"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

declare global {
  interface Window {
    emailjs: any
  }
}

export default function JoinEarlyAccess() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    splitMethod: "",
    pricing: "",
    contactMethods: [] as string[],
    phone: "",
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactMethodChange = (method: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        contactMethods: [...prev.contactMethods, method],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        contactMethods: prev.contactMethods.filter((m) => m !== method),
        phone: method === "WhatsApp" ? "" : prev.phone,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.consent) {
      alert("Please fill in all required fields and accept the consent.")
      return
    }

    setIsSubmitting(true)

    try {
      // Load EmailJS if not already loaded
      if (!window.emailjs) {
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        script.onload = () => {
          window.emailjs.init("fVbHRYJ-dlGRhj8QG")
          sendEmail()
        }
        document.head.appendChild(script)
      } else {
        sendEmail()
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("There was an error submitting your form. Please try again.")
      setIsSubmitting(false)
    }
  }

  const sendEmail = async () => {
    try {
      const templateParams = {
        to_name: "Splitta Team",
        from_name: formData.name,
        from_email: formData.email,
        split_method: formData.splitMethod || "Not specified",
        pricing_interest: formData.pricing || "Not specified",
        contact_methods: formData.contactMethods.join(", ") || "Email only",
        phone_number: formData.phone || "Not provided",
        message: `New early access signup from ${formData.name}`,
      }

      await window.emailjs.send("service_sw72p6p", "template_sc8c768", templateParams)

      setSubmitted(true)
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center shadow-2xl border-0">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4">Welcome to the List! 🎉</h2>
            <p className="text-gray-600 font-sans mb-6">
              Thanks for joining our early access list! We'll notify you as soon as Splitta is ready for you to try.
            </p>
            <Link href="/">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-serif font-semibold rounded-full px-6">
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
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

      {/* Form Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-600 font-serif font-semibold px-4 py-2 text-sm mb-4">
              🚀 Early Access
            </Badge>
            <h1 className="font-serif font-bold text-4xl text-gray-900 mb-4">Join the Early Access List</h1>
            <p className="text-lg text-gray-600 font-sans">
              Be among the first to try Splitta when we launch. Help us build the perfect expense splitting app for
              students!
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="font-serif font-bold text-2xl text-gray-900 text-center">
                Tell Us About Yourself
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ... existing form fields ... */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-400 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-400 transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-sans">
                    How do you usually split expenses?
                  </label>
                  <div className="space-y-2">
                    {[
                      "Manually calculate",
                      "Google Sheets / Excel",
                      "Other apps",
                      "We don't track — just trust each other",
                    ].map((method) => (
                      <label
                        key={method}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                      >
                        <input
                          type="radio"
                          name="splitMethod"
                          value={method}
                          checked={formData.splitMethod === method}
                          onChange={(e) => setFormData((prev) => ({ ...prev, splitMethod: e.target.value }))}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="font-sans text-gray-700">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-sans">
                    Would you be interested in early supporter pricing?
                  </label>
                  <div className="space-y-2">
                    {[
                      "Yes, if under ₹50/month",
                      "Yes, if under ₹100/month",
                      "I'll try free version first",
                      "Not sure",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                      >
                        <input
                          type="radio"
                          name="pricing"
                          value={option}
                          checked={formData.pricing === option}
                          onChange={(e) => setFormData((prev) => ({ ...prev, pricing: e.target.value }))}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="font-sans text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-sans">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                      <input
                        type="checkbox"
                        checked={formData.contactMethods.includes("Email")}
                        onChange={(e) => handleContactMethodChange("Email", e.target.checked)}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500 rounded"
                      />
                      <span className="font-sans text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                      <input
                        type="checkbox"
                        checked={formData.contactMethods.includes("WhatsApp")}
                        onChange={(e) => handleContactMethodChange("WhatsApp", e.target.checked)}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500 rounded"
                      />
                      <span className="font-sans text-gray-700">WhatsApp</span>
                    </label>
                  </div>

                  {formData.contactMethods.includes("WhatsApp") && (
                    <div className="mt-3">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-400 transition-all duration-200"
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500 rounded mt-1"
                    />
                    <span className="font-sans text-gray-700 text-sm">
                      I agree to receive updates and early access invites from Splitta.{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-serif font-bold rounded-full px-8 py-4 text-xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-2xl disabled:hover:scale-100"
                >
                  {isSubmitting ? "Joining..." : "Join the Early Access List"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
