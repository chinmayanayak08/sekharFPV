import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Play, RotateCcw, X } from 'lucide-react'
import { AdminData, PortfolioItem } from '../App'

interface PortfolioProps {
  adminData: AdminData
}

const Portfolio = ({ adminData }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeVideoItem, setActiveVideoItem] = useState<PortfolioItem | null>(null)

  const portfolioItems = adminData.portfolioItems || []

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'travel', label: 'Travel' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'reels', label: 'Reels' },
    { id: 'commercial', label: 'Commercial' },
  ]

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Portfolio Gallery</h2>
          <p className="section-subtitle">
            Showcase of cinematic drone shots from various projects and productions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-950 shadow-lg shadow-neon-cyan/50'
                  : 'glass-effect text-gray-300 hover:text-neon-cyan border-gray-600'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveVideoItem(item)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-full"
            >
              {/* Image */}
              <motion.img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover animate-fadeIn"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent flex flex-col justify-between p-6"
              >
                {/* Duration Badge */}
                <div className="flex justify-between items-start">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-neon-cyan/20 backdrop-blur-md px-3 py-1 rounded-full text-neon-cyan text-sm font-semibold"
                  >
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-dark-950/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold"
                  >
                    {item.duration}
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-neon-cyan"
                  >
                    <Play size={18} />
                    <span>View Full Video</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Play Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full bg-neon-cyan/20 backdrop-blur-md flex items-center justify-center hover:bg-neon-cyan/40 transition-all"
                >
                  <Play size={32} fill="#00d4ff" stroke="#00d4ff" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No items found in this category.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveCategory('all')}
              className="mt-4 inline-flex items-center gap-2 text-neon-cyan hover:text-neon-magenta transition-colors"
            >
              <RotateCcw size={20} />
              View All
            </motion.button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-8">
            Want to see more work? Let's discuss your project!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button glow-button-primary text-dark-950"
          >
            Start Your Project
          </motion.a>
        </motion.div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideoItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setActiveVideoItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-dark-950/40 rounded-2xl border border-white/20 w-full max-w-4xl aspect-video overflow-hidden shadow-2xl shadow-neon-cyan/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideoItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-neon-cyan hover:text-dark-950 transition-all shadow-md"
                  title="Close Video"
                >
                  <X size={20} />
                </button>

                {/* Video Player */}
                <video
                  src={activeVideoItem.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Title */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pointer-events-none">
                  <h4 className="text-xl font-bold text-white mb-1">{activeVideoItem.title}</h4>
                  <p className="text-neon-cyan text-sm capitalize">{activeVideoItem.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
