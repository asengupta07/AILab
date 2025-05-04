"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, ArrowLeft, Loader2, Sparkles, Trophy, Zap, Lightbulb, AlertTriangle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import Particles from "@/components/Particles"
import Aurora from "@/components/Aurora"
import TrueFocus from "@/components/TrueFocus"

// Types for our game
type ImageData = {
  imageName: string // Changed from id
  imageUrl: string // Added to store the full image URL
  trueClass: "real" | "ai"
  predictedClass: "real" | "ai"
}

// Updated function to fetch images from the API
const fetchRandomImage = async (): Promise<ImageData | null> => { // Return null on error
  try {
    const response = await fetch("/api/getImage")
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    const data = await response.json()

    // Map '0'/'1' to 'ai'/'real'
    const trueClass = data.trueClass === '1' ? "real" : "ai"
    const predictedClass = data.predictedClass === '1' ? "real" : "ai"
    const folder = trueClass === 'real' ? 'REAL' : 'FAKE'
    // Construct image URL for the new route
    const imageUrl = `/api/image/${folder}/${data.imageName}`

    return {
      imageName: data.imageName,
      imageUrl: imageUrl,
      trueClass: trueClass,
      predictedClass: predictedClass,
    }
  } catch (error) {
    console.error("Failed to fetch image:", error)
    return null // Return null to indicate failure
  }
}

export default function GamePage() {
  const { toast } = useToast()
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [userGuess, setUserGuess] = useState<"real" | "ai" | null>(null)
  const [showAiThinking, setShowAiThinking] = useState(false)
  const [aiThinkingProgress, setAiThinkingProgress] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({ user: 0, ai: 0, total: 0 })
  const [streak, setStreak] = useState(0)
  const [aiThinkingText, setAiThinkingText] = useState("Analyzing image patterns...")

  // Load a new image when the component mounts
  useEffect(() => {
    loadNewImage()
  }, [])

  // Function to update the leaderboard (calls API)
  const updateLeaderboard = async (playerType: "user" | "ai", correct: boolean) => {
    console.log(`Leaderboard Update: ${playerType} was ${correct ? 'correct' : 'incorrect'}`)
    try {
      const response = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerType, correct }),
      });
      if (!response.ok) {
        // Try to get more specific error from response body if possible
        let errorMsg = 'Failed to update leaderboard';
        try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg;
        } catch (_) {
            // Ignore if response is not JSON or empty
        }
        throw new Error(errorMsg);
      }
      const result = await response.json();
      console.log('Leaderboard updated:', result);
    } catch (error) {
      console.error("Error updating leaderboard:", error);
      toast({
        title: "Leaderboard Error",
        description: error instanceof Error ? error.message : "Could not update leaderboard.",
        variant: "destructive",
      })
    }
  }

  // AI thinking animation effect
  useEffect(() => {
    if (showAiThinking) {
      const thinkingTexts = [
        "Analyzing image patterns...",
        "Detecting inconsistencies...",
        "Examining pixel coherence...",
        "Checking for artifacts...",
        "Evaluating lighting consistency...",
        "Finalizing analysis...",
      ]

      let progress = 0
      const interval = setInterval(() => {
        progress += 1
        setAiThinkingProgress(progress)

        // Update thinking text at certain intervals
        if (progress % 16 === 0 && progress < 96) {
          const textIndex = Math.floor(progress / 16)
          setAiThinkingText(thinkingTexts[textIndex])
        }

        if (progress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShowAiThinking(false)
            setShowResult(true)

            if (!currentImage) return; // Guard against null image

            // Update scores
            const newScore = { ...score }
            newScore.total += 1

            if (userGuess === currentImage?.trueClass) {
              newScore.user += 1
              setStreak(streak + 1)

              // Update leaderboard if user is correct
              updateLeaderboard("user", true)

              toast({
                title: "You got it right!",
                description: `That was ${currentImage?.trueClass === "real" ? "a real" : "an AI-generated"} image.`,
                variant: "default",
              })
            } else {
              setStreak(0)
              updateLeaderboard("user", false)
            }

            if (currentImage?.predictedClass === currentImage?.trueClass) {
              newScore.ai += 1
              updateLeaderboard("ai", true)
            } else {
              updateLeaderboard("ai", false)
            }

            setScore(newScore)
          }, 500)
        }
      }, 50)

      return () => clearInterval(interval)
    }
  }, [showAiThinking, currentImage, userGuess, score, streak, toast])

  const loadNewImage = async () => {
    setLoading(true)
    setUserGuess(null)
    setShowResult(false)
    setAiThinkingProgress(0)
    setCurrentImage(null) // Clear current image while loading

    try {
      const newImage = await fetchRandomImage()
      if (newImage) {
        setCurrentImage(newImage)
      } else {
        // Handle fetch error gracefully
        toast({
          title: "Error",
          description: "Failed to load image. Please try again later.",
          variant: "destructive",
        })
        // Optionally, you could attempt to load another image or show a placeholder
      }
    } catch (error) { // Catch any unexpected errors during fetchRandomImage call itself
      console.error("Error in loadNewImage:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred while loading the image.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGuess = (guess: "real" | "ai") => {
    setUserGuess(guess)
    setShowAiThinking(true)
  }

  const handleNextImage = () => {
    loadNewImage()
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="w-full h-full">
            <div className="z-0 h-[900px]">
              <Aurora colorStops={["#6A0DAD", "#6A0DAD", "#6A0DAD"]} blend={0.9} amplitude={0.2} speed={0.5} />
            </div>
            <div style={{ width: "100%", height: "900px", position: "absolute", top: 0, left: 0 }} className="z-10">
              <Particles
                particleColors={["#6A0DAD", "#FFD700", "#00FF00"]}
                particleCount={900}
                particleSpread={10}
                speed={1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border border-purple-500">
              <Trophy className="h-4 w-4 mr-1" />
              Your Score: {score.user}/{score.total}
            </Badge>

            {streak > 2 && (
              <Badge className="bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50 border border-cyan-500">
                <Zap className="h-4 w-4 mr-1" />
                Streak: {streak}
              </Badge>
            )}
          </div>
        </header>

        {/* Game Section */}
        <section className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <TrueFocus
                sentence="Real or AI?"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
              <p className="text-xl text-gray-300 mt-4">Can you tell if this image is real or generated by AI?</p>
            </div>

            {/* Game Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-sm"></div>
              <Card className="relative bg-gray-900/70 border-gray-800 backdrop-blur-sm overflow-hidden">
                {loading ? (
                  <div className="flex flex-col items-center justify-center p-20">
                    <Loader2 className="h-16 w-16 text-purple-500 animate-spin mb-4" />
                    <p className="text-gray-300">Loading next image...</p>
                  </div>
                ) : (
                  <div>
                    {/* Image Display */}
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={currentImage?.imageUrl || "/placeholder.svg?height=600&width=800"}
                        alt="Guess if this is real or AI generated"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        unoptimized
                        priority
                      />

                      {/* Overlay for AI thinking animation */}
                      {showAiThinking && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6 animate-pulse">
                            <Brain className="h-12 w-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white">AI is analyzing...</h3>
                          <p className="text-gray-300 mb-6">{aiThinkingText}</p>
                          <div className="w-full max-w-md mb-2">
                            <Progress value={aiThinkingProgress} className="h-2 bg-gray-700" />
                          </div>
                          <p className="text-sm text-gray-400">{aiThinkingProgress}% complete</p>
                        </div>
                      )}

                      {/* Result Overlay */}
                      {showResult && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
                          <div
                            className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${userGuess === currentImage?.trueClass ? "bg-green-500 animate-bounce" : "bg-red-500 animate-shake"}`}
                          >
                            {userGuess === currentImage?.trueClass ? (
                              <Sparkles className="h-12 w-12 text-white" />
                            ) : (
                              <AlertTriangle className="h-12 w-12 text-white" />
                            )}
                          </div>

                          <h3 className="text-2xl font-bold mb-4 text-white">
                            {userGuess === currentImage?.trueClass ? "You got it right!" : "Not quite right!"}
                          </h3>

                          <div className="grid grid-cols-2 gap-8 w-full max-w-md mb-8">
                            <div className="text-center">
                              <p className="text-gray-400 mb-2">The image was:</p>
                              <Badge
                                className={`text-lg py-1 px-4 ${currentImage?.trueClass === "real" ? "bg-green-900/50 text-green-300 border-green-500" : "bg-red-900/50 text-red-300 border-red-500"}`}
                              >
                                {currentImage?.trueClass === "real" ? "Real" : "AI Generated"}
                              </Badge>
                            </div>

                            <div className="text-center">
                              <p className="text-gray-400 mb-2">AI guessed:</p>
                              <Badge
                                className={`text-lg py-1 px-4 ${currentImage?.predictedClass === currentImage?.trueClass ? "bg-green-900/50 text-green-300 border-green-500" : "bg-red-900/50 text-red-300 border-red-500"}`}
                              >
                                {currentImage?.predictedClass === "real" ? "Real" : "AI Generated"}
                              </Badge>
                            </div>
                          </div>

                          <Button
                            onClick={handleNextImage}
                            className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]"
                          >
                            Next Image
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* User Controls */}
                    {!userGuess && !showAiThinking && !showResult && (
                      <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-white">What do you think?</h3>
                          <p className="text-gray-400">Trust your instincts and make a guess</p>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            onClick={() => handleGuess("real")}
                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(22,163,74,0.3)]"
                          >
                            <Eye className="h-5 w-5 mr-2" />
                            Real Image
                          </Button>

                          <Button
                            onClick={() => handleGuess("ai")}
                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                          >
                            <Brain className="h-5 w-5 mr-2" />
                            AI Generated
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </div>

            {/* Game Stats */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-cyan-900/50 flex items-center justify-center mb-3">
                    <Eye className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-cyan-300">Your Score</h3>
                  <p className="text-3xl font-bold text-white">
                    {score.total > 0 ? Math.round((score.user / score.total) * 100) : 0}%
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {score.user} correct out of {score.total}
                  </p>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-3">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-purple-300">AI Score</h3>
                  <p className="text-3xl font-bold text-white">
                    {score.total > 0 ? Math.round((score.ai / score.total) * 100) : 0}%
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {score.ai} correct out of {score.total}
                  </p>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-pink-900/50 flex items-center justify-center mb-3">
                    <Lightbulb className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-pink-300">Current Streak</h3>
                  <p className="text-3xl font-bold text-white">{streak}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {streak === 0
                      ? "No current streak"
                      : streak === 1
                        ? "1 correct answer"
                        : `${streak} correct answers in a row`}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
