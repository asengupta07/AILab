"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  BarChart3,
  ChevronRight,
  Github,
  Mail,
  Download,
  ArrowLeft,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Scale,
  ImageIcon,
  ExternalLink,
} from "lucide-react"
import Particles from "@/components/Particles"
import Aurora from "@/components/Aurora"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Whitepaper() {
  // Model comparison data for chart
  const modelComparisonData = [
    {
      name: "ResNet50",
      accuracy: 95.99,
      precision: 94.61,
      recall: 97.55,
      params: 24.14,
    },
    {
      name: "VGG16",
      accuracy: 96.16,
      precision: 95.99,
      recall: 96.35,
      params: 14.86,
    },
    {
      name: "EfficientNetV2-B0",
      accuracy: 97.13,
      precision: 97.59,
      recall: 96.65,
      params: 6.27,
    },
    {
      name: "MobileNetV3Small",
      accuracy: 94.69,
      precision: 94.06,
      recall: 95.41,
      params: 1.11,
    },
  ]

  // Social media impact data
  const socialMediaData = [
    {
      name: "AI-Generated",
      engagement: 41,
      fill: "#8884d8",
    },
    {
      name: "Human-Created",
      engagement: 66,
      fill: "#82ca9d",
    },
  ]

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
        <header className="container mx-auto py-10 px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Real or AI?
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
          <Badge className="mb-6 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border border-purple-500">
            Research Whitepaper
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              AI-Generated Image Detection
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
            A comprehensive analysis of transfer learning approaches for detecting AI-generated imagery
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="group text-lg px-6 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
              <Download className="mr-2 h-5 w-5" />
              Download Full Paper
            </Button>
            <Button
              variant="outline"
              className="group text-lg px-6 py-5 bg-gray-800/80 text-white border-gray-700 hover:bg-gray-700/80 rounded-full transition-all duration-300"
              onClick={() => {
                const methodologySection = document.getElementById("methodology");
                if (methodologySection) {
                  methodologySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Methodology
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Abstract Section */}
        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Abstract
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  As AI-generated imagery becomes increasingly prevalent in our digital landscape, the ability to
                  distinguish between authentic and synthetic content has emerged as a critical challenge. This research
                  explores the effectiveness of various transfer learning approaches in detecting AI-generated images,
                  with a particular focus on optimizing the balance between model performance and computational
                  efficiency.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our findings demonstrate that fine-tuned convolutional neural networks can achieve remarkable accuracy
                  in identifying synthetic imagery, with our best-performing model reaching 97.13% validation accuracy.
                  This paper presents a comprehensive analysis of our experimental results, discusses the implications
                  for digital media authentication, and proposes future directions for research in this rapidly evolving
                  field.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Statistics Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            The Growing Challenge of AI-Generated Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-cyan-900/50 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-cyan-400" />
                </div>
                <span className="text-4xl font-bold text-white mb-2">71%</span>
                <p className="text-gray-400">of images shared on social media are AI-generated</p>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-purple-400" />
                </div>
                <span className="text-4xl font-bold text-white mb-2">51%</span>
                <p className="text-gray-400">of people can accurately identify real photographs</p>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-pink-900/50 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-pink-400" />
                </div>
                <span className="text-4xl font-bold text-white mb-2">52%</span>
                <p className="text-gray-400">of consumers report reduced engagement with AI content</p>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-cyan-900/50 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-cyan-400" />
                </div>
                <span className="text-4xl font-bold text-white mb-2">61%</span>
                <p className="text-gray-400">higher engagement for human-created vs. AI content</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Social Media Engagement Comparison</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={socialMediaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis
                      stroke="#888"
                      label={{ value: "Avg. Likes", angle: -90, position: "insideLeft", fill: "#888" }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Bar dataKey="engagement" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Human-created images receive 61% more engagement than AI-generated content on social media platforms.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-300">Legal and Ethical Concerns</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Copyright Protection</span>
                    <span className="text-gray-400">25%</span>
                  </div>
                  <Progress value={25} className="h-2 bg-gray-700" />
                  <p className="text-gray-500 text-sm mt-1">
                    Only 25% of AI-generated images are eligible for copyright protection
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Lawsuits (2023)</span>
                    <span className="text-gray-400">+30%</span>
                  </div>
                  <Progress value={30} className="h-2 bg-gray-700" />
                  <p className="text-gray-500 text-sm mt-1">30% increase in lawsuits related to AI-generated content</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Deepfake Concerns</span>
                    <span className="text-gray-400">78%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-gray-700" />
                  <p className="text-gray-500 text-sm mt-1">
                    78% of surveyed individuals expressed concern about deepfake technology
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="container mx-auto px-4 py-16" id="methodology">
          <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Methodology
              </h2>

              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-cyan-300">Dataset</h3>
                  <Button 
                    className="group text-sm px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border border-gray-700 rounded-full transition-all duration-300"
                    onClick={() => window.open('https://www.kaggle.com/datasets/birdy654/cifake-real-and-ai-generated-synthetic-images', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access Dataset on Kaggle
                  </Button>
                </div>
                <p className="text-gray-300 mb-4">
                  Our research utilized the CIFAKE dataset, a comprehensive collection of real and AI-generated images
                  specifically designed for training and testing detection algorithms. The dataset consists of 60,000 images
                  (30,000 real and 30,000 AI-generated) with a resolution of 32x32 pixels. The real images are sourced from
                  the CIFAR-10 dataset, while the AI-generated images are created using Stable Diffusion v1.5, providing a
                  balanced and diverse set of samples for training and evaluation.
                </p>
                <p className="text-gray-300 mb-4">
                  The dataset is publicly available on Kaggle and has been carefully curated to ensure high-quality samples
                  for both classes. The AI-generated images are created using various prompts and parameters to ensure
                  diversity in the synthetic content, making it a robust benchmark for evaluating detection algorithms.
                </p>
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800 mt-4">
                  <h4 className="font-semibold mb-2 text-white">Dataset Statistics</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li className="flex justify-between">
                      <span>Total Images:</span>
                      <span className="text-cyan-400">60,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Real Images:</span>
                      <span className="text-cyan-400">30,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>AI-Generated Images:</span>
                      <span className="text-cyan-400">30,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Image Resolution:</span>
                      <span className="text-cyan-400">32x32 pixels</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Generation Model:</span>
                      <span className="text-cyan-400">Stable Diffusion v1.5</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Transfer Learning Approach</h3>
                <p className="text-gray-300 mb-4">
                  We employed transfer learning techniques using four pre-trained convolutional neural network
                  architectures: ResNet50, VGG16, EfficientNetV2-B0, and MobileNetV3Small. Each model was fine-tuned on
                  our dataset with the following modifications:
                </p>
                <ul className="space-y-2 text-gray-300 list-disc pl-6">
                  <li>Addition of batch normalization layers to improve training stability</li>
                  <li>Implementation of dropout (rate = 0.5) to prevent overfitting</li>
                  <li>Custom dense layers for feature extraction and classification</li>
                  <li>Binary classification output for real/fake image detection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pink-300">Training Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-semibold mb-2 text-white">Hyperparameters</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex justify-between">
                        <span>Learning Rate:</span>
                        <span className="text-cyan-400">0.0001</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Batch Size:</span>
                        <span className="text-cyan-400">32</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Epochs:</span>
                        <span className="text-cyan-400">50</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Optimizer:</span>
                        <span className="text-cyan-400">Adam</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Loss Function:</span>
                        <span className="text-cyan-400">Binary Cross-Entropy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-semibold mb-2 text-white">Data Augmentation</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex justify-between">
                        <span>Random Rotation:</span>
                        <span className="text-purple-400">±15°</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Random Zoom:</span>
                        <span className="text-purple-400">0.9 - 1.1</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Horizontal Flip:</span>
                        <span className="text-purple-400">True</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Width Shift:</span>
                        <span className="text-purple-400">±10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Height Shift:</span>
                        <span className="text-purple-400">±10%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Model Architecture Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Model Architectures
          </h2>

          <Tabs defaultValue="resnet50" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-gray-800/80">
              <TabsTrigger
                value="resnet50"
                className="data-[state=active]:bg-cyan-900/80 data-[state=active]:text-cyan-400 text-gray-300 hover:text-white"
              >
                ResNet50
              </TabsTrigger>
              <TabsTrigger
                value="vgg16"
                className="data-[state=active]:bg-purple-900/80 data-[state=active]:text-purple-400 text-gray-300 hover:text-white"
              >
                VGG16
              </TabsTrigger>
              <TabsTrigger
                value="efficientnet"
                className="data-[state=active]:bg-pink-900/80 data-[state=active]:text-pink-400 text-gray-300 hover:text-white"
              >
                EfficientNetV2-B0
              </TabsTrigger>
              <TabsTrigger
                value="mobilenet"
                className="data-[state=active]:bg-cyan-900/80 data-[state=active]:text-cyan-400 text-gray-300 hover:text-white"
              >
                MobileNetV3Small
              </TabsTrigger>
            </TabsList>

            <TabsContent value="resnet50">
              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-cyan-300">ResNet50 Architecture</h3>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        {`_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 input_2 (InputLayer)        [(None, 32, 32, 3)]       0         
                                                                 
 resnet50 (Functional)       (None, 2048)              23587712  
                                                                 
 batch_normalization (Batch  (None, 2048)              8192      
 Normalization)                                                  
                                                                 
 dense (Dense)               (None, 256)               524544    
                                                                 
 dropout (Dropout)           (None, 256)               0         
                                                                 
 dense_1 (Dense)             (None, 64)                16448     
                                                                 
 dense_2 (Dense)             (None, 1)                 65        
                                                                 
=================================================================
Total params: 24136961 (92.08 MB)
Trainable params: 24079745 (91.86 MB)
Non-trainable params: 57216 (223.50 KB)
_________________________________________________________________`}
                      </pre>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-cyan-300">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">95.99%</span>
                          <span className="text-gray-400">Validation Accuracy</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">0.1183</span>
                          <span className="text-gray-400">Validation Loss</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">94.61%</span>
                          <span className="text-gray-400">Precision</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">97.55%</span>
                          <span className="text-gray-400">Recall</span>
                        </div>
                      </Card>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2 text-white">Key Insights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          High recall indicates excellent ability to identify AI-generated images
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Largest model with highest parameter count (24.1M)
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                          Requires significant computational resources for deployment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="vgg16">
              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-purple-300">VGG16 Architecture</h3>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        {`Model: "model_1"
_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 input_4 (InputLayer)        [(None, 32, 32, 3)]       0         
                                                                 
 vgg16 (Functional)          (None, 512)               14714688  
                                                                 
 batch_normalization_1 (Bat  (None, 512)               2048      
 chNormalization)                                                
                                                                 
 dense_3 (Dense)             (None, 256)               131328    
                                                                 
 dropout_1 (Dropout)         (None, 256)               0         
                                                                 
 dense_4 (Dense)             (None, 64)                16448     
                                                                 
 dense_5 (Dense)             (None, 1)                 65        
                                                                 
=================================================================
Total params: 14864577 (56.70 MB)
Trainable params: 14863553 (56.70 MB)
Non-trainable params: 1024 (4.00 KB)
_________________________________________________________________`}
                      </pre>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-purple-300">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-purple-400">96.16%</span>
                          <span className="text-gray-400">Validation Accuracy</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-purple-400">0.1427</span>
                          <span className="text-gray-400">Validation Loss</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-purple-400">95.99%</span>
                          <span className="text-gray-400">Precision</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-purple-400">96.35%</span>
                          <span className="text-gray-400">Recall</span>
                        </div>
                      </Card>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2 text-white">Key Insights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Well-balanced precision and recall metrics
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Moderate parameter count (14.9M) with good performance
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                          Higher validation loss compared to ResNet50
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="efficientnet">
              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-pink-300">EfficientNetV2-B0 Architecture</h3>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        {`Model: "model_2"
_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 input_6 (InputLayer)        [(None, 32, 32, 3)]       0         
                                                                 
 efficientnetv2-b0 (Functio  (None, 1280)              5919312   
 nal)                                                            
                                                                 
 batch_normalization_2 (Bat  (None, 1280)              5120      
 chNormalization)                                                
                                                                 
 dense_6 (Dense)             (None, 256)               327936    
                                                                 
 dropout_2 (Dropout)         (None, 256)               0         
                                                                 
 dense_7 (Dense)             (None, 64)                16448     
                                                                 
 dense_8 (Dense)             (None, 1)                 65        
                                                                 
=================================================================
Total params: 6268881 (23.91 MB)
Trainable params: 6205713 (23.67 MB)
Non-trainable params: 63168 (246.75 KB)
_________________________________________________________________`}
                      </pre>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-pink-300">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-pink-400">97.13%</span>
                          <span className="text-gray-400">Validation Accuracy</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-pink-400">0.1145</span>
                          <span className="text-gray-400">Validation Loss</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-pink-400">97.59%</span>
                          <span className="text-gray-400">Precision</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-pink-400">96.65%</span>
                          <span className="text-gray-400">Recall</span>
                        </div>
                      </Card>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2 text-white">Key Insights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Highest overall accuracy and precision among all models
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Excellent parameter efficiency (6.3M) with superior performance
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Lowest validation loss, indicating strong generalization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="mobilenet">
              <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-cyan-300">MobileNetV3Small Architecture</h3>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
                        {`Model: "model_3"
_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 input_8 (InputLayer)        [(None, 32, 32, 3)]       0         
                                                                 
 MobilenetV3small (Function  (None, 576)               939120    
 al)                                                             
                                                                 
 batch_normalization_3 (Bat  (None, 576)               2304      
 chNormalization)                                                
                                                                 
 dense_9 (Dense)             (None, 256)               147712    
                                                                 
 dropout_3 (Dropout)         (None, 256)               0         
                                                                 
 dense_10 (Dense)            (None, 64)                16448     
                                                                 
 dense_11 (Dense)            (None, 1)                 65        
                                                                 
=================================================================
Total params: 1105649 (4.22 MB)
Trainable params: 1092385 (4.17 MB)
Non-trainable params: 13264 (51.81 KB)
_________________________________________________________________`}
                      </pre>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-cyan-300">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">94.69%</span>
                          <span className="text-gray-400">Validation Accuracy</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">0.1570</span>
                          <span className="text-gray-400">Validation Loss</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">94.06%</span>
                          <span className="text-gray-400">Precision</span>
                        </div>
                      </Card>

                      <Card className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-cyan-400">95.41%</span>
                          <span className="text-gray-400">Recall</span>
                        </div>
                      </Card>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2 text-white">Key Insights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Most lightweight model (1.1M parameters)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          Ideal for mobile and edge device deployment
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                          Lower overall performance metrics compared to other models
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Results Comparison Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Model Performance Comparison
          </h2>

          <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
            <div className="h-96 w-full">
              <ChartContainer
                config={{
                  accuracy: {
                    label: "Accuracy",
                    color: "hsl(var(--chart-1))",
                  },
                  precision: {
                    label: "Precision",
                    color: "hsl(var(--chart-2))",
                  },
                  recall: {
                    label: "Recall",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-full w-full"
              >
                <BarChart data={modelComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis domain={[90, 100]} stroke="#fff" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="accuracy" fill="var(--color-accuracy)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="precision" fill="var(--color-precision)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="recall" fill="var(--color-recall)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>

            <div className="mt-8">
              <Table>
                <TableCaption className="text-gray-300">Comprehensive comparison of model performance metrics</TableCaption>
                <TableHeader>
                  <TableRow className="hover:bg-gray-800/50">
                    <TableHead className="text-gray-300">Model</TableHead>
                    <TableHead className="text-gray-300">Accuracy (%)</TableHead>
                    <TableHead className="text-gray-300">Precision (%)</TableHead>
                    <TableHead className="text-gray-300">Recall (%)</TableHead>
                    <TableHead className="text-gray-300">Parameters (M)</TableHead>
                    <TableHead className="text-gray-300">Val Loss</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-gray-800/50">
                    <TableCell className="font-medium text-gray-200">ResNet50</TableCell>
                    <TableCell className="text-gray-200">95.99</TableCell>
                    <TableCell className="text-gray-200">94.61</TableCell>
                    <TableCell className="text-gray-200">97.55</TableCell>
                    <TableCell className="text-gray-200">24.14</TableCell>
                    <TableCell className="text-gray-200">0.1183</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-800/50">
                    <TableCell className="font-medium text-gray-200">VGG16</TableCell>
                    <TableCell className="text-gray-200">96.16</TableCell>
                    <TableCell className="text-gray-200">95.99</TableCell>
                    <TableCell className="text-gray-200">96.35</TableCell>
                    <TableCell className="text-gray-200">14.86</TableCell>
                    <TableCell className="text-gray-200">0.1427</TableCell>
                  </TableRow>
                  <TableRow className="bg-green-900/20 hover:bg-green-900/30">
                    <TableCell className="font-medium text-green-400">EfficientNetV2-B0</TableCell>
                    <TableCell className="text-green-400">97.13</TableCell>
                    <TableCell className="text-green-400">97.59</TableCell>
                    <TableCell className="text-green-400">96.65</TableCell>
                    <TableCell className="text-green-400">6.27</TableCell>
                    <TableCell className="text-green-400">0.1145</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-800/50">
                    <TableCell className="font-medium text-gray-200">MobileNetV3Small</TableCell>
                    <TableCell className="text-gray-200">94.69</TableCell>
                    <TableCell className="text-gray-200">94.06</TableCell>
                    <TableCell className="text-gray-200">95.41</TableCell>
                    <TableCell className="text-gray-200">1.11</TableCell>
                    <TableCell className="text-gray-200">0.1570</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        {/* Conclusion Section */}
        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gray-900/50 border-gray-800 p-8 rounded-3xl backdrop-blur-sm hover:shadow-[0_0_15px_rgba(8,145,178,0.2)] transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Conclusions & Future Work
              </h2>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Key Findings</h3>
                <p className="text-gray-300 mb-6">
                  Our research demonstrates that transfer learning with pre-trained convolutional neural networks
                  provides a highly effective approach for detecting AI-generated images. The EfficientNetV2-B0 model
                  emerged as the optimal solution, achieving 97.13% validation accuracy while maintaining a relatively
                  modest parameter count of 6.27 million, representing an excellent balance between performance and
                  computational efficiency.
                </p>

                <h3 className="text-xl font-bold mb-4 text-purple-300">Implications</h3>
                <p className="text-gray-300 mb-6">
                  The proliferation of AI-generated imagery presents significant challenges for digital media
                  authenticity. Our findings suggest that automated detection systems can achieve high accuracy in
                  identifying synthetic content, potentially serving as a valuable tool for combating misinformation and
                  preserving trust in visual media. However, the gap between human perception (51% accuracy in
                  identifying real photos) and machine learning capabilities highlights the need for both technological
                  solutions and improved digital literacy.
                </p>

                <h3 className="text-xl font-bold mb-4 text-pink-300">Future Directions</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>
                      Explore adversarial training techniques to improve robustness against evolving AI generation
                      methods
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>Investigate multimodal approaches that combine visual features with metadata analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>Develop lightweight detection models optimized for mobile and browser-based deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>
                      Conduct longitudinal studies to track detection performance as AI generation technology evolves
                    </span>
                  </li>
                </ul>

                <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 mt-8">
                  <h4 className="font-semibold mb-4 text-white text-center">Final Recommendation</h4>
                  <p className="text-gray-300 text-center">
                    Based on our comprehensive analysis, we recommend the EfficientNetV2-B0 architecture for
                    AI-generated image detection applications, as it provides the optimal balance between detection
                    accuracy and computational efficiency. For deployment on resource-constrained devices,
                    MobileNetV3Small offers a viable alternative with reasonable performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Test Your Detection Skills</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Think you can spot AI-generated images? Try our interactive challenge and compare your results with our
              best-performing model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)]">
                Start the Challenge
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 bg-gray-800/80 text-white border-gray-700 hover:bg-gray-700/80 rounded-full transition-all duration-300"
              onClick={() => {
                window.location.href = '/leaderboard';
              }}
              >
                View the Leaderboard
              </Button>
            </div>
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
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>

              <div className="text-sm text-gray-500">© {new Date().getFullYear()} Real or AI? Research Team</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
