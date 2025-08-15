import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, Smartphone, Shield, Check } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-sans">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif font-bold text-xl text-gray-900">Splitta</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Payment Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <Badge className="bg-orange-100 text-orange-600 font-serif font-semibold px-4 py-2 text-sm mb-4">
            🚀 Early Access
          </Badge>
          <h1 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Get Early Access to Splitta</h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            Join the first wave of users and enjoy lifetime benefits for just ₹99
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif font-bold text-xl text-gray-900">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-sans text-gray-600">Splitta Early Access</span>
                <span className="font-serif font-semibold text-gray-900">₹99.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-sans text-gray-600">Processing Fee</span>
                <span className="font-serif font-semibold text-gray-900">₹0.00</span>
              </div>
              <div className="flex justify-between items-center py-3 font-serif font-bold text-lg">
                <span className="text-gray-900">Total</span>
                <span className="text-orange-600">₹99.00</span>
              </div>

              {/* Benefits */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-serif font-semibold text-gray-900 mb-3">What you get:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="font-sans text-sm text-gray-700">First access to Splitta app</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="font-sans text-sm text-gray-700">Lifetime 50% discount on premium features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="font-sans text-sm text-gray-700">Priority customer support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="font-sans text-sm text-gray-700">Early access to new features</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif font-bold text-xl text-gray-900">Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* UPI Payment */}
              <div className="p-4 border-2 border-orange-200 rounded-lg bg-orange-50">
                <div className="flex items-center space-x-3 mb-3">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                  <span className="font-serif font-semibold text-gray-900">UPI Payment</span>
                  <Badge className="bg-green-100 text-green-600 text-xs">Recommended</Badge>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-serif font-semibold rounded-lg py-3">
                  Pay ₹99 with UPI
                </Button>
              </div>

              {/* Card Payment */}
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <CreditCard className="h-6 w-6 text-gray-600" />
                  <span className="font-serif font-semibold text-gray-900">Credit/Debit Card</span>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-serif font-semibold rounded-lg py-3">
                    Pay ₹99 with Card
                  </Button>
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-4">
                <Shield className="h-4 w-4" />
                <span className="font-sans">Your payment is secured with 256-bit SSL encryption</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="font-serif font-semibold text-gray-900 mb-2">30-Day Money Back Guarantee</h3>
          <p className="font-sans text-gray-600 text-sm">
            Not satisfied with early access? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </div>
  )
}
