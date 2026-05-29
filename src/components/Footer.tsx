import { motion } from 'framer-motion'
import { Instagram, Mail, Phone, Heart } from 'lucide-react'
import { AdminData } from '../App'

interface FooterProps {
  adminData: AdminData
}

const Footer = ({ adminData }: FooterProps) => {
  const socialLinks = [
    {
      icon: Instagram,
      href: `https://instagram.com/${adminData.instagram.replace('@', '')}`,
      label: 'Instagram',
    },
    {
      icon: Mail,
      href: `mailto:${adminData.email}`,
      label: 'Email',
    },
    {
      icon: Phone,
      href: `tel:${adminData.phone}`,
      label: 'Phone',
    },
  ]

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative bg-dark-900 border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple" />
              <span className="text-xl font-bold gradient-text">Sekhar FPV</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional FPV drone cinematography for cinematic shoots, weddings, travel, and commercial productions by {adminData.name}.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Wedding Cinematography',
                'Real Estate Tours',
                'Travel Videos',
                'Commercial Shoots',
                'Event Coverage',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${adminData.phone}`}
                  className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                >
                  {adminData.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${adminData.email}`}
                  className="text-gray-400 hover:text-neon-cyan transition-colors text-sm break-all"
                >
                  {adminData.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${adminData.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                >
                  {adminData.instagram}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-500 text-sm text-center md:text-left"
            >
              © 2026 {adminData.name} — Cinematic Drone Experiences. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="flex gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    variants={itemVariants}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-neon-cyan hover:text-neon-magenta transition-colors border border-neon-cyan/30"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-600 text-xs mt-6 flex items-center justify-center gap-2"
        >
          Made with <Heart size={14} className="text-neon-magenta fill-neon-magenta" /> by {adminData.name}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
