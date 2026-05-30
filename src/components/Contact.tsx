import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { AdminData } from '../App'

interface ContactProps {
  adminData: AdminData
}

const Contact = ({ adminData }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')
    
    const key = adminData.web3formsKey?.trim()
    if (!key) {
      // Simulate form submission locally if key is not configured
      console.log('Form submitted (Simulated):', formData)
      setSubmitted(true)
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
      }, 3000)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: key,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          subject: `New FPV Booking Request from ${formData.name}`,
          from_name: `${formData.name} (via FPV Portfolio)`,
          replyto: formData.email,
          message: `You received a new FPV drone booking request details:\n\n` +
            `- Client Name: ${formData.name}\n` +
            `- Email Address: ${formData.email}\n` +
            `- Phone Number: ${formData.phone || 'N/A'}\n` +
            `- Project Type: ${formData.projectType.toUpperCase()}\n\n` +
            `Project Vision / Details:\n` +
            `${formData.message}`
        }),
      })

      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setErrorMsg(data.message || 'Failed to send inquiry. Please try again.')
      }
    } catch (err) {
      console.error('Email send error:', err)
      setErrorMsg('Network error. Please check your connection or contact directly via phone/socials.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: adminData.phone,
      link: `tel:${adminData.phone}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: adminData.email,
      link: `mailto:${adminData.email}`,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: adminData.instagram,
      link: `https://instagram.com/${adminData.instagram.replace('@', '')}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: adminData.phone,
      link: `https://wa.me/${adminData.phone.replace(/\D/g, '')}`,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to bring your cinematic drone vision to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="mb-10"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
              <p className="text-gray-400">
                Whether you have a specific project in mind or just want to explore possibilities, I'm here to help. Reach out through any of these channels.
              </p>
            </motion.div>

            {/* Contact Methods */}
            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={i}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group glass-effect p-6 rounded-xl border border-white/20 hover:border-neon-cyan/50 flex items-start gap-4 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-neon-cyan" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {method.label}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Info Card */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl border border-neon-cyan/30 mt-10"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-neon-magenta flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Availability</h4>
                  <p className="text-gray-400 text-sm">
                    Available for projects across India and abroad. Quick turnarounds for urgent shoots.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass-effect p-8 md:p-10 rounded-2xl border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="text-gray-300 font-semibold mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-gray-300 font-semibold mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-gray-300 font-semibold mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </motion.div>

              {/* Project Type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="text-gray-300 font-semibold mb-2 block">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="wedding">Wedding</option>
                  <option value="travel">Travel/Tourism</option>
                  <option value="realestate">Real Estate</option>
                  <option value="commercial">Commercial/Music Video</option>
                  <option value="events">Events</option>
                  <option value="reels">Reels/Social Media</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="text-gray-300 font-semibold mb-2 block">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, vision, and timeline..."
                  rows={4}
                  required
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                />
              </motion.div>

              {/* Error Message */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm font-semibold text-center bg-red-500/10 border border-red-500/20 py-2 rounded-lg"
                >
                  {errorMsg}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { scale: 1.05 }}
                whileTap={isSubmitting ? {} : { scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`w-full glow-button ${
                  submitted
                    ? 'glow-button-secondary'
                    : isSubmitting
                    ? 'bg-gray-700 text-gray-400 cursor-wait'
                    : 'glow-button-primary'
                } text-dark-950 transition-all`}
              >
                {submitted ? '✓ Message Sent!' : isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
              </motion.button>
            </form>

            {/* Form Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-500 text-sm text-center mt-4"
            >
              I'll get back to you within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
