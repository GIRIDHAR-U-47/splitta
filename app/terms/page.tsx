import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
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

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="font-serif font-bold text-4xl text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 font-sans mb-8">Last updated: August 15, 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-sans leading-relaxed mb-6">By using Splitta, you agree to:</p>

            <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed mb-6 space-y-2">
              <li>Provide accurate information when creating an account.</li>
              <li>Use the app for lawful purposes only.</li>
              <li>Accept that Splitta is currently in its beta stage, and features may change without notice.</li>
              <li>
                Understand that payment settlement is handled through third-party providers (UPI, PayPal, Venmo), and
                Splitta is not responsible for delays or failures in their systems.
              </li>
            </ul>

            <p className="text-gray-700 font-sans leading-relaxed mb-6">
              Splitta reserves the right to suspend accounts that violate these terms.
            </p>

            <p className="text-gray-700 font-sans leading-relaxed mb-8">
              If you do not agree, please do not use the service.
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
