"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  ArrowLeft,
  Trophy,
  Zap,
  Users,
  Eye,
  BarChart3,
  AlertTriangle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Particles from "@/components/Particles"
import Aurora from "@/components/Aurora"
import TrueFocus from "@/components/TrueFocus"

// Types for API response
type LeaderboardStatsData = {
  user?: { wins: number; totalGames: number };
  ai?: { wins: number; totalGames: number };
}

type LeaderboardSummaryData = {
  userWinRate: number;
  aiWinRate: number;
  totalGamesPlayed: number;
}

export default function LeaderboardPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [apiStats, setApiStats] = useState<{ data: LeaderboardStatsData; summary: LeaderboardSummaryData } | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Fetch leaderboard data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/leaderboard'); // Fetch from the GET endpoint
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to fetch leaderboard data (${response.status})`);
        }
        const data = await response.json();
        if (!data.data || !data.summary) {
            throw new Error('Invalid data format received from API');
        }
        setApiStats({ data: data.data, summary: data.summary });

      } catch (fetchError: any) {
        console.error("Failed to load leaderboard data:", fetchError);
        setError(fetchError.message || "Failed to load leaderboard data. Please try again.");
        toast({
          title: "Error",
          description: fetchError.message || "Failed to load leaderboard data. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [toast])

  // Calculate stats safely, providing defaults
  const userWins = apiStats?.data?.user?.wins ?? 0;
  const userTotalGames = apiStats?.data?.user?.totalGames ?? 0;
  const aiWins = apiStats?.data?.ai?.wins ?? 0;
  const aiTotalGames = apiStats?.data?.ai?.totalGames ?? 0; // Note: API currently assumes total games are the same
  const totalGamesPlayed = apiStats?.summary?.totalGamesPlayed ?? 0;
  const userWinRate = apiStats?.summary?.userWinRate ?? 0;
  const aiWinRate = apiStats?.summary?.aiWinRate ?? 0;

  const humanAccuracyPercent = Math.round(userWinRate * 100);
  const aiAccuracyPercent = Math.round(aiWinRate * 100);

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
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border border-purple-500">
              <Trophy className="h-4 w-4 mr-1" />
              Leaderboard
            </Badge>
          </div>
        </header>

        {/* Leaderboard Title */}
        <section className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <TrueFocus
              sentence="Global Leaderboard"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            <p className="text-xl text-gray-300 mt-4">
              See how Humans stack up against AI in spotting the difference!
            </p>
          </div>
        </section>

        {/* Leaderboard Content */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="mt-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center p-20 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm">
                  <div className="h-16 w-16 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin mb-4"></div>
                  <p className="text-gray-300">Loading leaderboard data...</p>
                </div>
              ) : error ? (
                <Card className="bg-red-900/30 border-red-700 p-6 backdrop-blur-sm text-center">
                  <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-red-300 mb-2">Failed to Load Stats</h3>
                  <p className="text-red-200">{error}</p>
                </Card>
              ) : apiStats ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Total Games Card */}
                  <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                        <Eye className="h-8 w-8 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-purple-300">Total Games Played</h3>
                      <p className="text-4xl font-bold text-white mb-2">{totalGamesPlayed.toLocaleString()}</p>
                      <p className="text-sm text-gray-400">Across all players (Humans & AI)</p>
                    </div>
                  </Card>

                  {/* Human Stats Card */}
                  <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-cyan-900/50 flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-cyan-300">Human Performance</h3>
                      <div className="w-full max-w-xs mt-4 space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-400">Win Rate</span>
                            <span className="text-sm font-bold text-cyan-400">{humanAccuracyPercent}%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                              style={{ width: `${humanAccuracyPercent}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{userWins} wins / {userTotalGames} games</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* AI Stats Card */}
                  <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                        <Brain className="h-8 w-8 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-purple-300">AI Performance</h3>
                      <div className="w-full max-w-xs mt-4 space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-400">Win Rate</span>
                            <span className="text-sm font-bold text-purple-400">{aiAccuracyPercent}%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                              style={{ width: `${aiAccuracyPercent}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{aiWins} wins / {aiTotalGames} games</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Comparison Card */}
                  <Card className="md:col-span-2 lg:col-span-3 bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-pink-900/50 flex items-center justify-center mb-4">
                        <BarChart3 className="h-8 w-8 text-pink-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-pink-300">Head-to-Head Comparison</h3>
                      
                      <div className="w-full max-w-2xl mt-6">
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400 flex items-center gap-2">
                                <Users className="h-5 w-5 text-cyan-400" />
                                Human
                              </span>
                              <span className="text-cyan-400 font-bold">{humanAccuracyPercent}%</span>
                            </div>
                            <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                                style={{ width: `${humanAccuracyPercent}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400 flex items-center gap-2">
                                <Brain className="h-5 w-5 text-purple-400" />
                                AI
                              </span>
                              <span className="text-purple-400 font-bold">{aiAccuracyPercent}%</span>
                            </div>
                            <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                                style={{ width: `${aiAccuracyPercent}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                          <p className="text-gray-300">
                            {aiAccuracyPercent > humanAccuracyPercent
                              ? `AI models currently outperform humans by ${aiAccuracyPercent - humanAccuracyPercent} percentage points.`
                              : humanAccuracyPercent > aiAccuracyPercent
                                ? `Humans currently outperform AI models by ${humanAccuracyPercent - aiAccuracyPercent} percentage points.`
                                : `Humans and AI models are currently tied in accuracy.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm text-center">
                  <p className="text-gray-400">No leaderboard data available.</p>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
