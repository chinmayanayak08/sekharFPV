import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import droneImage from '../assets/drone.jpg'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system for cinematic effect
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      size: number
    }> = []

    const createParticles = () => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: 1,
          size: Math.random() * 2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(10, 14, 39, 0)')
      gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.05)')
      gradient.addColorStop(1, 'rgba(179, 0, 255, 0.05)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.01

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.fillStyle = `rgba(0, 212, 255, ${p.life * 0.5})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      if (Math.random() < 0.02) createParticles()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950/80 opacity-60" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,212,255,.05)_25%,rgba(0,212,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,212,255,.05)_75%,rgba(0,212,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,212,255,.05)_25%,rgba(0,212,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,212,255,.05)_75%,rgba(0,212,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full mx-auto px-6 grid md:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Text & CTA */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-semibold">
              🚁 Professional FPV Drone Cinematography
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Cinematic FPV
            <br />
            <span className="gradient-text">Drone Shots That Feel Alive</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            Professional DJI FPV Drone Rental With Pilot for Cinematic Shoots, Reels & Events. High-speed aerial cinematography that captures motion like never before.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button glow-button-primary text-dark-950 text-center"
            >
              Book a Shoot
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button glow-button-secondary text-center"
            >
              View Portfolio
            </motion.a>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            {['High-Speed', 'Stabilized', 'Creative'].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-4 py-2 glass-effect border border-neon-cyan/30 text-neon-cyan text-sm font-semibold"
              >
                ✓ {text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Drone Image */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            variants={itemVariants}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Animated Glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-purple opacity-20 blur-3xl rounded-full" />
            
            {/* Floating Drone Image */}
            <motion.img
              src={droneImage}
              alt="FPV Drone"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="w-full h-full object-contain filter drop-shadow-[0_15px_15px_rgba(0,212,255,0.4)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-neon-cyan animate-pulse" />
      </motion.div>
    </section>
  )
}

export default Hero
