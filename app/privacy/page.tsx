import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif font-bold text-xl text-gray-900">Splitta</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="font-serif font-bold text-4xl text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 font-sans mb-8">Last updated: August 15, 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-sans leading-relaxed mb-6">
              Splitta values your privacy. We collect minimal personal information such as your name, email, and payment
              details (when you subscribe) to operate our service. Expense data you enter is stored securely and used
              only to provide you and your group members with bill-splitting features.
            </p>

            <p className="text-gray-700 font-sans leading-relaxed mb-6">
              We do not sell your information to third parties. We may share necessary data with payment providers UPI(gpay,Phonepay) to complete transactions.
            </p>

            <p className="text-gray-700 font-sans leading-relaxed mb-8">
              You can request deletion of your account and associated data anytime by contacting us at{" "}
              <a href="mailto:officialsplitta@gmail.com" className="text-orange-600 hover:text-orange-700 underline">
                officialsplitta@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-serif font-semibold rounded-full px-8">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
