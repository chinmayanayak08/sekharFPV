import { motion } from 'framer-motion'
import { Camera, Heart, Building2, Plane, Instagram, Zap, Clapperboard, Sparkles } from 'lucide-react'
import { AdminData } from '../App'

const iconMap: Record<string, React.ComponentType<any>> = {
  Camera,
  Heart,
  Building2,
  Plane,
  Instagram,
  Zap,
  Clapperboard,
  Sparkles,
}

interface ServicesProps {
  adminData: AdminData
}

const Services = ({ adminData }: ServicesProps) => {
  const services = adminData.services || []

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

  return (
    <section id="services" className="relative py-20 md:py-32 px-6 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Complete range of FPV drone cinematography services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName] || Camera
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                }}
                className="group glass-effect p-8 rounded-2xl border border-white/20 hover:border-neon-cyan/50 cursor-pointer transition-all duration-300 card-hover"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-6 inline-block p-3 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="mt-4 inline-block text-neon-cyan"
                >
                  →
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-12 rounded-2xl border border-neon-cyan/30 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Need a Custom Package?
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            We can create a tailored solution for your specific production needs.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button glow-button-primary text-dark-950"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
