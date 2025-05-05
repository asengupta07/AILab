"use client"

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
  Play,
  FileText,
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
                // particleColors={["#ffffff", "#ffffff", "#ffffff"]}
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
        <header className="container mx-auto mt-8 sm:mt-6 md:mt-10 py-4 sm:py-6 md:py-10 px-4 sm:px-6 flex justify-center items-center">
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
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 flex flex-col items-center text-center min-h-[50dvh] sm:min-h-[60dvh] md:min-h-[75dvh]">
          <Badge className="mb-4 sm:mb-6 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border border-purple-500">
            AI Lab Assignment
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Can You Spot the Fake?
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-6 sm:mb-8 md:mb-10 px-4">
            Challenge yourself to detect real vs. AI-generated images. Compare your results with our AI models, and see if you can outsmart them.
            <span className="block mt-2 text-cyan-400">
              Are your eyes better than algorithms?
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto px-4 sm:px-0">
            <Button className="group text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]"
            onClick={() => {
              window.location.href = '/whitepaper';
            }}
            >
              <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View the Whitepaper
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="group text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]"
            onClick={() => {
              window.location.href = '/game';
            }}
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Start the Game
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Navigation Buttons Section */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
            <Link href="/leaderboard" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/50 rounded-full ring-1 ring-gray-800/50 flex items-center justify-center gap-3 hover:ring-gray-700/50 transition-all duration-300">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400/80 group-hover:text-cyan-400 transition-colors" />
                <span className="text-base sm:text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                  Leaderboard
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              How It Works
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 p-4 sm:p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-cyan-900/50 flex items-center justify-center mb-3 sm:mb-4">
                <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-300">
                1. View Image
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Examine carefully crafted images from our curated dataset of
                real and AI-generated content.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-4 sm:p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-3 sm:mb-4">
                <ThumbsUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">
                2. Make Your Guess
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Trust your instincts and decide whether the image is authentic
                or AI-generated.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-4 sm:p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-pink-900/50 flex items-center justify-center mb-3 sm:mb-4">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-pink-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-pink-300">
                3. See AI's Guess
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Compare your answer with our AI detector and see who's better at
                spotting fakes.
              </p>
            </Card>
          </div>
        </section>

        {/* About the Project */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <Card className="bg-gray-900/50 border-gray-800 p-4 sm:p-6 rounded-3xl backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                About the Project
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-cyan-300">
                  <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  The CIFAKE Dataset
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  Our research utilizes the CIFAKE dataset, a comprehensive
                  collection of real and AI-generated images specifically
                  designed to train and test detection algorithms.
                </p>
                <p className="text-sm sm:text-base text-gray-400">
                  With over 60,000 carefully curated images, this dataset
                  provides a robust foundation for our research into the visual
                  differences between authentic and synthetic content.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-purple-300">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
                  Model Training
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  We've trained multiple detection models using state-of-the-art
                  deep learning techniques, including convolutional neural
                  networks and vision transformers.
                </p>
                <p className="text-sm sm:text-base text-gray-400">
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
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Test Your Skills?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              Join as participants in our assignment and see if
              you can outsmart AI at its own game.
            </p>
            <Button className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
              Start the Challenge
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 sm:py-10 md:py-12 mt-8 sm:mt-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                <span className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                  Real or AI?
                </span>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <Link
                  href="https://github.com/asengupta07/AILab"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="mailto:arnabsengupta104@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>

              <div className="text-xs sm:text-sm text-gray-500">
                © {new Date().getFullYear()} Real or AI? AI Lab Assignment
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
