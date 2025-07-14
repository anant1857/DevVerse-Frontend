"use client"

// ContactUsSection.jsx
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react"

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    subject: Yup.string()
      .required("Subject is required")
      .min(5, "Subject must be at least 5 characters")
      .max(100, "Subject must be less than 100 characters"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(1000, "Message must be less than 1000 characters"),
  })

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true)
        const response = await fetch("https://devverse-backend-r5ym.onrender.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })

        const data = await response.json()

        if (response.ok) {
          setStatus({
            submitted: true,
            success: true,
            message: data.message || "Your message has been sent successfully!",
          })
          resetForm()
        } else {
          setStatus({
            submitted: true,
            success: false,
            message: data.message || "Failed to send your message. Please try again.",
          })
        }
      } catch (error) {
        setStatus({
          submitted: true,
          success: false,
          message: "An error occurred. Please try again later.",
        })
        console.error("Contact form error:", error)
      } finally {
        setIsSubmitting(false)
        // Clear status message after 5 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, submitted: false }))
        }, 5000)
      }
    },
  })

  return (
    <div className="bg-[#1e1e1e] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about DevVerse? Our team is here to help you secure and enhance your code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-[#232323] rounded-xl p-8 h-full">
            <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
            <p className="text-gray-300 mb-8">
              Our support team is available to help you with any questions about our platform, pricing, or
              implementation. We're committed to responding within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-[#2a2a2a] rounded-lg mr-4">
                  <Mail className="text-[#d16439]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-gray-300">support@devguardian.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#2a2a2a] rounded-lg mr-4">
                  <Phone className="text-[#d16439]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#2a2a2a] rounded-lg mr-4">
                  <MapPin className="text-[#d16439]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                  <p className="text-gray-300">
                    123 Developer Avenue, Tech District
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#2a2a2a] rounded-lg mr-4">
                  <Clock className="text-[#d16439]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9AM - 6PM (PST)
                    <br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-[#2a2a2a] rounded-full hover:bg-[#d16439] transition-colors text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-[#2a2a2a] rounded-full hover:bg-[#d16439] transition-colors text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-[#2a2a2a] rounded-full hover:bg-[#d16439] transition-colors text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-[#2a2a2a] rounded-full hover:bg-[#d16439] transition-colors text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#232323] rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            <p className="text-gray-300 mb-8">
              Have specific questions about how DevVerse can benefit your development process? Reach out directly and
              we'll be in touch shortly.
            </p>

            {/* Status message */}
            {status.submitted && (
              <div
                className={`mb-6 p-4 rounded-md ${status.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"}`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-md text-white focus:outline-none focus:border-[#d16439] ${
                      formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="John Doe"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-md text-white focus:outline-none focus:border-[#d16439] ${
                      formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="john@example.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-md text-white focus:outline-none focus:border-[#d16439] ${
                    formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="How DevVerse can help my team"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="mt-1 text-red-500 text-sm">{formik.errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="5"
                  className={`resize-none w-full px-4 py-3 bg-[#2a2a2a] border rounded-md text-white focus:outline-none focus:border-[#d16439] ${
                    formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Tell us how we can help you..."
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{formik.errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formik.isValid}
                className={`w-full px-6 py-3 bg-[#d16439] rounded-md font-medium text-white transition-all flex items-center justify-center ${
                  isSubmitting || !formik.isValid ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} className="ml-2" />
              </button>
            </form>

            <div className="mt-6 flex items-start">
              <MessageSquare size={20} className="text-[#d16439] mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-400">
                By submitting this form, you agree to our privacy policy and terms of service. We'll never share your
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
