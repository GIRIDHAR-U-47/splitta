import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
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

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            Have questions about Splitta? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="font-serif font-bold text-xl text-gray-900">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-sans mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:officialsplitta@gmail.com"
                className="text-orange-600 hover:text-orange-700 font-sans font-semibold underline"
              >
                officialsplitta@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="font-serif font-bold text-xl text-gray-900">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-sans mb-4">Our team is based in Chennai, India.</p>
              <p className="text-gray-700 font-sans font-semibold">Chennai, India</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8">
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 font-sans mb-6">
              Join the early access program and be among the first to experience Splitta.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
