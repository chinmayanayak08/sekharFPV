import { motion, AnimatePresence } from 'framer-motion'
import { Star, Upload, MessageSquare, Check } from 'lucide-react'
import React, { useState, useRef } from 'react'
import { AdminData, TestimonialItem } from '../App'
import { saveAdminData } from '../services/dbService'


interface TestimonialsProps {
  adminData: AdminData
}

const Testimonials = ({ adminData }: TestimonialsProps) => {
  const testimonials = adminData.testimonials || []
  
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(5)
  const [avatarBase64, setAvatarBase64] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const MAX_WIDTH = 150
          const MAX_HEIGHT = 150
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }

          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height)
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8)
            setAvatarBase64(compressedBase64)
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !role || !content) return

    // Initials avatar fallback if no image uploaded
    const finalAvatar = avatarBase64 || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`

    const newReview: TestimonialItem = {
      id: Date.now(),
      name,
      role,
      content,
      rating,
      avatar: finalAvatar,
    }

    const updatedTestimonials = [...testimonials, newReview]
    const updatedAdminData: AdminData = {
      ...adminData,
      testimonials: updatedTestimonials,
    }

    // Save to database & localStorage
    saveAdminData(updatedAdminData)

    // Dispatch update event
    window.dispatchEvent(
      new CustomEvent('adminDataUpdated', { detail: updatedAdminData })
    )

    // Show success and reset form
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setShowForm(false)
      setName('')
      setRole('')
      setContent('')
      setRating(5)
      setAvatarBase64('')
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        </motion.div>
      ))}
    </div>
  )

  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What clients from diverse industries say about working with Sekhar FPV
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id || i}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)',
              }}
              className="glass-effect p-8 rounded-2xl border border-white/20 hover:border-neon-cyan/50 transition-all duration-300 flex flex-col group animate-fadeIn"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic leading-relaxed mb-6 flex-grow whitespace-pre-wrap">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/30"
                />
                <div>
                  <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Review Section Toggle Button */}
        <div className="flex justify-center mt-12 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="glow-button glow-button-secondary text-neon-cyan px-8 py-3.5 font-bold flex items-center gap-2"
          >
            <MessageSquare size={18} />
            {showForm ? 'Close Review Form' : 'Share Your Experience'}
          </motion.button>
        </div>

        {/* Expandable Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto overflow-hidden"
            >
              <div className="glass-effect p-8 rounded-2xl border border-neon-cyan/30 mt-6 space-y-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-center py-8 space-y-3"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto text-green-400">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Review Submitted!</h3>
                    <p className="text-gray-400">Thank you for sharing your feedback with Sekhar FPV.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Leave Your Feedback</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 font-semibold mb-1 text-sm">Your Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rajas Sekhar"
                          className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 font-semibold mb-1 text-sm">Role / Company / Relation</label>
                        <input
                          type="text"
                          required
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="e.g. Cinematic Director"
                          className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <label className="block text-gray-300 font-semibold mb-1 text-sm">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="text-yellow-400 hover:scale-1.1 transition-transform"
                            >
                              <Star
                                size={28}
                                className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-800 border border-white/10 flex-shrink-0">
                          {avatarBase64 ? (
                            <img src={avatarBase64} alt="Avatar Preview" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center text-xs text-gray-400">
                              No image
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 rounded bg-dark-800 hover:bg-dark-700 text-xs font-semibold text-gray-300 border border-gray-700 transition-colors flex items-center gap-1.5"
                          >
                            <Upload size={14} /> Upload Avatar
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm">Your Comment</label>
                      <textarea
                        required
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Describe what you liked most about working with Sekhar FPV..."
                        className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors text-sm resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full glow-button glow-button-primary text-dark-950 py-3 font-bold text-sm"
                    >
                      Submit Review
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-12 rounded-2xl border border-neon-cyan/30 text-center"
        >
          <motion.h3
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            className="text-5xl font-bold gradient-text mb-2"
          >
            4.98/5
          </motion.h3>
          <p className="text-gray-300">Average rating from 100+ satisfied clients</p>
          <p className="text-sm text-gray-400 mt-2">Based on completed projects and verified reviews</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
