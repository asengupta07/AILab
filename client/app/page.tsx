import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Eye,
  ThumbsUp,
  Github,
  Mail,
  ChevronRight,
  Trophy,
  Zap,
  ImageIcon,
  BarChart3,
} from "lucide-react";
import Particles from "@/components/Particles";
import Aurora from "@/components/Aurora";
import TrueFocus from "@/components/TrueFocus";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="w-full h-full">
            <div className="z-0 h-[900px]">
              <Aurora
                colorStops={["#6A0DAD", "#6A0DAD", "#6A0DAD"]}
                blend={0.9}
                amplitude={0.2}
                speed={0.5}
              />
            </div>
            <div
              style={{ width: "100%", height: "900px", position: "absolute", top: 0, left: 0 }}
              className="z-10"
            >
              <Particles
                particleColors={["#6A0DAD", "#FFD700", "#00FF00"]}
                // particleColors={["#ffffff", "#ffffff", "#ffffff"]}g
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
        <header className="container mx-auto py-10 px-4 flex justify-center items-center">
          {/* <div className="flex flex-col items-center gap-4">
            <Brain className="h-12 w-12 text-cyan-400 animate-pulse" />
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 animate-gradient">
              Real or AI?
            </span>
          </div> */}
          <TrueFocus 
sentence="Real or AI?"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <Badge className="mb-6 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border border-purple-500">
            AI Lab Assignment
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Can You Spot the Fake?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
            Challenge yourself to detect real vs. AI-generated images. Compare your results with our AI models, and see if you can outsmart them.
            <span className="block mt-2 text-cyan-400">
              Are your eyes better than algorithms?
            </span>
          </p>
          <Button className="group text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
            Start the Game
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* <div className="mt-16 relative w-full max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-sm"></div>
            <div className="relative bg-black rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Game preview"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                <div className="p-6 md:p-10 w-full">
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <div>
                      <Badge className="mb-2 bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50">
                        AI Generated
                      </Badge>
                      <h3 className="text-xl md:text-2xl font-bold">
                        Can you tell this is fake?
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-950 hover:text-red-300"
                      >
                        Fake
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-950 hover:text-green-300"
                      >
                        Real
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              How It Works
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-cyan-900/50 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">
                1. View Image
              </h3>
              <p className="text-gray-400">
                Examine carefully crafted images from our curated dataset of
                real and AI-generated content.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                2. Make Your Guess
              </h3>
              <p className="text-gray-400">
                Trust your instincts and decide whether the image is authentic
                or AI-generated.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-pink-900/50 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-pink-300">
                3. See AI's Guess
              </h3>
              <p className="text-gray-400">
                Compare your answer with our AI detector and see who's better at
                spotting fakes.
              </p>
            </Card>
          </div>
        </section>

        {/* Leaderboard Preview */}
        {/* <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Leaderboard
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-sm"></div>
              <Card className="relative bg-gray-900/70 border-gray-800 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">
                      Top Detectors
                    </h3>
                    <Badge className="bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900/50">
                      <Trophy className="h-4 w-4 mr-1" />
                      Live Rankings
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "AI Model X-2000", score: 92, isAI: true },
                      { name: "PixelHunter", score: 89, isAI: false },
                      { name: "DeepVision", score: 87, isAI: true },
                      { name: "ImageSleuth", score: 84, isAI: false },
                      { name: "PhotoDetective", score: 81, isAI: false },
                    ].map((entry, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{entry.name}</span>
                              {entry.isAI && (
                                <Badge
                                  variant="outline"
                                  className="text-xs border-cyan-500 text-cyan-400"
                                >
                                  <Zap className="h-3 w-3 mr-1" />
                                  AI
                                </Badge>
                              )}
                            </div>
                            <div className="text-xs text-gray-400">
                              {entry.isAI
                                ? "Machine Learning Model"
                                : "Human Player"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                              style={{ width: `${entry.score}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-lg">
                            {entry.score}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
                    >
                      View Full Leaderboard
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section> */}

        {/* About the Project */}
        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gray-900/50 border-gray-800 p-6 rounded-3xl backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                About the Project
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
                  <ImageIcon className="h-5 w-5" />
                  The CIFAKE Dataset
                </h3>
                <p className="text-gray-300 mb-4">
                  Our research utilizes the CIFAKE dataset, a comprehensive
                  collection of real and AI-generated images specifically
                  designed to train and test detection algorithms.
                </p>
                <p className="text-gray-400">
                  With over 60,000 carefully curated images, this dataset
                  provides a robust foundation for our research into the visual
                  differences between authentic and synthetic content.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
                  <BarChart3 className="h-5 w-5" />
                  Model Training
                </h3>
                <p className="text-gray-300 mb-4">
                  We've trained multiple detection models using state-of-the-art
                  deep learning techniques, including convolutional neural
                  networks and vision transformers.
                </p>
                <p className="text-gray-400">
                  By comparing human perception against machine learning
                  algorithms, we aim to identify the most effective methods for
                  detecting increasingly sophisticated AI-generated imagery.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-gray-900/30 border border-gray-800">
              <h3 className="text-lg font-bold mb-3 text-white">
                Research Goals
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-900/50 flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 text-xs">✓</span>
                  </div>
                  Measure human ability to detect AI-generated images compared
                  to algorithmic approaches
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-900/50 flex items-center justify-center mt-0.5">
                    <span className="text-purple-400 text-xs">✓</span>
                  </div>
                  Identify visual patterns that distinguish real from synthetic
                  imagery
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-900/50 flex items-center justify-center mt-0.5">
                    <span className="text-pink-400 text-xs">✓</span>
                  </div>
                  Develop more effective detection tools to combat
                  misinformation
                </li>
              </ul>
            </div>
          </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Test Your Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join as participants in our assignment and see if
              you can outsmart AI at its own game.
            </p>
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
              Start the Challenge
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-6 md:mb-0">
                <Brain className="h-6 w-6 text-cyan-400" />
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Real or AI?
                </span>
              </div>

              <div className="flex gap-6 mb-6 md:mb-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>

              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Real or AI? AI Lab Assignment
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
