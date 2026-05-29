import { motion } from 'framer-motion'
import { Award, Target, Zap } from 'lucide-react'
import { AdminData } from '../App'

interface AboutProps {
  adminData: AdminData
}

const About = ({ adminData }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const stats = [
    { icon: Award, label: adminData.projectsCompleted || '100+ Projects', value: 'Completed' },
    { icon: Target, label: adminData.flightTime || '500+ Hours', value: 'Flight Time' },
    { icon: Zap, label: adminData.experience || '8 Years', value: 'Experience' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Hi, I'm {adminData.name} — an FPV drone pilot passionate about capturing immersive aerial visuals and dynamic cinematic moments.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Picture */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-2xl overflow-hidden glass-effect border-2 border-neon-cyan/50 shadow-lg shadow-neon-cyan/20">
                  {adminData.profileImage ? (
                    <img
                      src={adminData.profileImage}
                      alt={adminData.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                      <span className="text-gray-400 text-center px-4">
                        Profile Picture
                      </span>
                    </div>
                  )}
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {adminData.aboutMe}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My experience spans across multiple industries:
              </p>

              <ul className="space-y-3">
                {[
                  '🎬 Weddings & Cinematic Events',
                  '✈️ Travel & Tourism Videos',
                  '🏠 Real Estate Aerial Tours',
                  '📱 Reels & Instagram Content',
                  '🎥 Commercial & Music Videos',
                  '🎉 Event Coverage & Live Streaming',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gray-300 flex items-center gap-3"
                  >
                    <span className="text-neon-cyan text-xl">{item.split(' ')[0]}</span>
                    <span>{item.substring(2)}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-lg text-gray-300 leading-relaxed">
                What sets me apart is my commitment to delivering professionally edited, cinematic-ready footage with creative shot planning, safe flying practices, and attention to every detail.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
                  className="glass-effect p-8 cursor-pointer group card-hover rounded-2xl border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-neon-cyan" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{stat.label}</h3>
                      <p className="text-gray-400">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Quote Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect p-8 border-l-4 border-neon-cyan rounded-2xl border border-white/20"
          >
            <p className="text-gray-300 italic text-lg leading-relaxed">
              "{adminData.quote}"
            </p>
            <p className="text-neon-cyan font-semibold mt-4">— {adminData.name}</p>
          </motion.div>

          {/* Expertise Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              'DJI FPV Drone',
              'Cinematic Shots',
              'Color Grading',
              'Sound Design',
              'Stabilized Footage',
              '4K/8K Production',
              'Adobe Premier Pro',
              'Creative Direction',
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-effect px-4 py-3 text-center text-sm md:text-base font-semibold text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan rounded-lg"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
