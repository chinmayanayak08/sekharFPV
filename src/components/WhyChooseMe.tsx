import { motion } from 'framer-motion'
import { Zap, Shield, Lightbulb, RefreshCw, Lock, Sparkles } from 'lucide-react'

const WhyChooseMe = () => {
  const features = [
    {
      icon: Zap,
      title: 'High-Speed Cinematic FPV',
      description: 'Capture dynamic, fast-moving shots that create adrenaline-pumping cinematic moments. Perfect for action sequences and dynamic transitions.',
    },
    {
      icon: RefreshCw,
      title: 'Smooth Stabilized Footage',
      description: 'Advanced gimbal technology ensures perfectly smooth, professional-grade footage even during high-speed maneuvers and complex movements.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Shot Planning',
      description: 'Collaborate on pre-production planning to visualize your story. Custom shot lists, storyboards, and creative direction tailored to your vision.',
    },
    {
      icon: Sparkles,
      title: 'Professional Editing Ready',
      description: 'Deliver footage in premium formats (ProRes, DCI 4K, 8K) ready for editing. Optional color grading and sound design available.',
    },
    {
      icon: Shield,
      title: 'Safe & Licensed Flying',
      description: 'All flights fully insured and compliant with local aviation regulations. Safety protocols and professional risk management guaranteed.',
    },
    {
      icon: Lock,
      title: 'Fast Turnaround & Reliability',
      description: 'Quick delivery timelines with backup equipment. Professional communication and project coordination from start to finish.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Me</h2>
          <p className="section-subtitle">
            What makes my FPV drone cinematography service stand out from the rest
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)',
                }}
                className="group glass-effect p-8 rounded-2xl border border-white/20 hover:border-neon-cyan/50 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '500+', label: 'Flight Hours' },
            { number: '30+', label: 'Industries Served' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 text-center rounded-2xl border border-neon-cyan/30"
            >
              <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect p-8 md:p-12 rounded-2xl border border-neon-cyan/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Commitment</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '🎬 Cinematic Quality',
                description: 'Every frame is crafted with cinematography in mind, not just aerial coverage.',
              },
              {
                title: '🤝 Full Collaboration',
                description: 'Your vision drives the project. Extensive pre-planning and creative input welcomed.',
              },
              {
                title: '⚡ Fast & Efficient',
                description: 'Professional workflows ensure quick turnarounds without compromising quality.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-blue-400 mb-3">{item.title}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseMe
