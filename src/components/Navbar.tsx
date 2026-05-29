import { motion } from 'framer-motion'
import { Menu, X, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { AdminData } from '../App'

const Drone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="2.5" />
    <path d="m8.5 8.5-4-4M15.5 15.5l4 4M8.5 15.5l-4 4M15.5 8.5l4-4" />
    <circle cx="4.5" cy="4.5" r="1" fill="currentColor" />
    <circle cx="19.5" cy="4.5" r="1" fill="currentColor" />
    <circle cx="4.5" cy="19.5" r="1" fill="currentColor" />
    <circle cx="19.5" cy="19.5" r="1" fill="currentColor" />
    <path d="M2 4.5h5M17 4.5h5M2 19.5h5M17 19.5h5" />
  </svg>
)

interface NavbarProps {
  adminData: AdminData
  onAdminClick: () => void
}

const Navbar = ({ adminData, onAdminClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar-blur fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="relative">
            <Drone className="w-8 h-8 text-neon-cyan animate-pulse" />
          </div>
          <span className="text-2xl font-bold gradient-text">Sekhar FPV</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ color: '#00d4ff', scale: 1.1 }}
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Admin Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAdminClick}
            className="p-2 rounded-lg glass-effect border border-neon-cyan/30 hover:border-neon-cyan/50 text-neon-cyan transition-colors"
            title="Admin Panel"
          >
            <Settings size={20} />
          </motion.button>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button glow-button-primary text-dark-950"
          >
            Book a Shoot
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon-cyan flex items-center gap-4"
          onClick={toggleMenu}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              onAdminClick()
              setIsOpen(false)
            }}
            className="p-2 rounded-lg glass-effect border border-neon-cyan/30"
          >
            <Settings size={18} />
          </motion.button>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-900/95 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-neon-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="glow-button glow-button-primary text-dark-950 w-full"
            onClick={() => setIsOpen(false)}
          >
            Book a Shoot
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
