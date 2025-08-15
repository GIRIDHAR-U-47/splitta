"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Receipt, Zap, BarChart3, Camera, CreditCard } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 text-center hover:from-orange-600 hover:to-pink-600 transition-all duration-300">
        <p className="text-sm font-medium animate-pulse">
          🎉 Early Access Available! Be among the first to try Splitta
        </p>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif font-bold text-xl text-gray-900">Splitta</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-orange-500 font-sans transition-colors duration-200 hover:scale-105 transform"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-orange-500 font-sans transition-colors duration-200 hover:scale-105 transform"
              >
                How It Works
              </a>
              <Link href="/join">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-serif font-semibold rounded-full px-6 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
                  Join Early Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight hover:scale-105 transition-transform duration-300">
                Split Bills,{" "}
                <span className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                  Not Friendships
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 font-sans leading-relaxed max-w-2xl hover:text-gray-700 transition-colors duration-200">
                The student-friendly app that makes splitting group expenses effortless. Track costs, scan receipts, and
                settle payments instantly with your friends.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 text-orange-600 font-serif font-semibold rounded-full px-8 py-4 text-lg hover:bg-orange-50 bg-transparent hover:scale-105 transform transition-all duration-200 hover:border-orange-400"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/splitting-bills-illustration-H6WgTzqmngVN9KJcr0LdM1H35EFxCk.png"
                alt="Friends splitting bills together using mobile apps"
                className="w-full h-auto rounded-3xl shadow-2xl transform -translate-y-4 hover:-translate-y-6 transition-all duration-500 animate-bounce-slow hover:scale-105"
                style={{
                  animation: "float 3s ease-in-out infinite",
                }}
              />
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(-16px); }
                  50% { transform: translateY(-24px); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4 hover:text-green-600 transition-colors duration-200">
              How Splitta Works
            </h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-200">
              Three simple steps to effortless expense splitting
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-200 hover:scale-110 transform">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-green-600 transition-colors duration-200">
                  Create Group
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Set up your group with friends and start tracking shared expenses together.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-200 transition-colors duration-200 hover:scale-110 transform">
                  <Receipt className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-orange-600 transition-colors duration-200">
                  Add Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Quickly add expenses manually or scan receipts with our smart camera feature.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-pink-200 transition-colors duration-200 hover:scale-110 transform">
                  <Zap className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-pink-600 transition-colors duration-200">
                  Auto-Settle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Settle payments instantly via UPI with just one tap.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-200">
              Powerful features designed specifically for students
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 hover:bg-green-200 transition-colors duration-200 hover:scale-110 transform">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-green-600 transition-colors duration-200">
                  Quick Expense Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Add expenses in seconds with our intuitive interface designed for speed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 hover:bg-orange-200 transition-colors duration-200 hover:scale-110 transform">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-orange-600 transition-colors duration-200">
                  Group Expense Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Keep track of all group expenses with real-time updates and notifications.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 hover:bg-blue-200 transition-colors duration-200 hover:scale-110 transform">
                  <Receipt className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200">
                  Recurring Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Set up recurring expenses like rent, utilities, and subscriptions automatically.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 hover:bg-pink-200 transition-colors duration-200 hover:scale-110 transform">
                  <Camera className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-pink-600 transition-colors duration-200">
                  Receipt Scanning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Scan receipts with your camera and let AI extract all the details automatically.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 hover:bg-purple-200 transition-colors duration-200 hover:scale-110 transform">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-purple-600 transition-colors duration-200">
                  Leaderboards & Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Fun stats and leaderboards to gamify expense tracking with your friends.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 hover:bg-teal-200 transition-colors duration-200 hover:scale-110 transform">
                  <CreditCard className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-gray-900 hover:text-teal-600 transition-colors duration-200">
                  Instant Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans hover:text-gray-700 transition-colors duration-200">
                  Settle up instantly with UPI, PayPal, Venmo, and other popular payment methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Badge className="bg-pink-100 text-pink-600 font-serif font-semibold px-4 py-2 text-sm mb-4 hover:bg-pink-200 transition-colors duration-200">
              🚀 Coming Soon
            </Badge>
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-6 hover:text-orange-600 transition-colors duration-200">
              Be First to Try Splitta
            </h2>
            <p className="text-xl text-gray-600 font-sans mb-8 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-200">
              Join the early access list and be among the first to experience seamless expense splitting with your
              friends. Get exclusive early access when we launch!
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <Link href="/join">
                  <Button
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-serif font-bold rounded-full px-8 py-4 text-xl hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-2xl"
                  >
                    Join the Early Access List
                  </Button>
                </Link>
              </div>
              <p className="text-gray-500 font-sans mt-4 text-sm hover:text-gray-600 transition-colors duration-200">
                Free to join • Be the first to know when we launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 hover:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 hover:scale-105 transform transition-all duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif font-bold text-xl">Splitta</span>
            </div>
            <div className="flex space-x-6 text-sm font-sans">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-105 transform"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-105 transform"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:scale-105 transform"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-sans text-sm hover:text-gray-300 transition-colors duration-200">
              © 2024 Splitta. All rights reserved. Made with ❤️ for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
