import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { 
  Upload, Save, X, LogOut, Edit2, Lock, User, 
  Plus, Trash2, FolderOpen, Layers, Activity, 
  Quote, Settings, Mail, Phone, Instagram, Briefcase, Film
} from 'lucide-react'
import defaultProfile from '../assets/profile.jpg'
import { ServiceItem, PortfolioItem, TestimonialItem, AdminData } from '../App'

const AdminPanel = ({ onClose }: { onClose: () => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const portfolioFileInputRef = useRef<HTMLInputElement>(null)
  const portfolioVideoFileInputRef = useRef<HTMLInputElement>(null)
  
  const defaultData: AdminData = {
    name: 'Sekhar Pahi',
    email: 'sekharpahi@gmail.com',
    phone: '+91 9337513044',
    instagram: '@sekhar.fpv',
    profileImage: defaultProfile,
    aboutMe: "With over 8 years of expertise in FPV drone piloting and aerial cinematography, I've mastered the art of capturing high-speed, dynamic shots that bring stories to life. Whether it's a breathtaking wedding moment, an action-packed travel sequence, or a commercial production, every frame is crafted with precision and creativity.",
    experience: "8 Years",
    flightTime: "500+ Hours",
    projectsCompleted: "100+ Projects",
    quote: "Every frame tells a story. My goal is to capture moments that are not just seen, but felt. That's what makes a cinematic experience truly unforgettable.",
    services: [
      {
        iconName: 'Camera',
        title: 'FPV Drone Rental With Pilot',
        description: 'Professional DJI FPV drone rental services with experienced pilot. Full equipment support and creative direction for your project.',
        color: 'from-neon-cyan to-blue-500',
      },
      {
        iconName: 'Heart',
        title: 'Wedding Cinematic Shots',
        description: 'Capture your special day with breathtaking aerial cinematography. Perfect for ceremony coverage, grand entrances, and reception moments.',
        color: 'from-neon-magenta to-pink-500',
      },
      {
        iconName: 'Building2',
        title: 'Real Estate Aerial Tours',
        description: 'Showcase properties with stunning aerial perspectives. Perfect for luxury homes, developments, and commercial real estate.',
        color: 'from-neon-purple to-indigo-500',
      },
      {
        iconName: 'Plane',
        title: 'Travel & Tourism Videos',
        description: 'Document your travels with cinematic drone footage. Ideal for travel agencies, tourism boards, and adventure content creators.',
        color: 'from-neon-lime to-green-500',
      },
      {
        iconName: 'Instagram',
        title: 'Reel & Instagram Content',
        description: 'Create engaging short-form content optimized for Instagram, TikTok, and social media. Trending effects and editing included.',
        color: 'from-pink-500 to-orange-500',
      },
      {
        iconName: 'Zap',
        title: 'Event Coverage',
        description: 'Comprehensive event videography from aerial perspectives. Conferences, concerts, sports events, and corporate gatherings.',
        color: 'from-yellow-400 to-red-500',
      },
      {
        iconName: 'Clapperboard',
        title: 'Commercial Shoots',
        description: 'Professional commercial production with cinematic quality. Ads, promotional videos, and brand content creation.',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        iconName: 'Sparkles',
        title: 'Professional Editing Ready',
        description: 'Deliver raw or color-graded footage ready for editing. All files in premium formats (ProRes, DCI 4K, 8K options available).',
        color: 'from-purple-500 to-magenta-500',
      },
    ],
    portfolioItems: [
      {
        id: 1,
        title: 'Wedding Ceremony - Sky High Love',
        category: 'weddings',
        thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop',
        duration: '2:45',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
      },
      {
        id: 2,
        title: 'Bali Travel Reel',
        category: 'travel',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=400&fit=crop',
        duration: '0:30',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-in-the-ocean-1527-large.mp4',
      },
      {
        id: 3,
        title: 'High-End Real Estate Showcase',
        category: 'realestate',
        thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop',
        duration: '1:20',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-snow-covered-forest-41525-large.mp4',
      },
      {
        id: 4,
        title: 'Action Music Video',
        category: 'commercial',
        thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop',
        duration: '3:15',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
      },
      {
        id: 5,
        title: 'Instagram Reel - Sunday Vibes',
        category: 'reels',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop',
        duration: '0:15',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-in-the-ocean-1527-large.mp4',
      },
      {
        id: 6,
        title: 'Mountain Adventure',
        category: 'travel',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        duration: '2:00',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-snow-covered-forest-41525-large.mp4',
      },
      {
        id: 7,
        title: 'Wedding Reception Dance',
        category: 'weddings',
        thumbnail: 'https://images.unsplash.com/photo-1516295541773-1fb64d2be7a0?w=500&h=400&fit=crop',
        duration: '1:30',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
      },
      {
        id: 8,
        title: 'Corporate Event Highlight',
        category: 'commercial',
        thumbnail: 'https://images.unsplash.com/photo-1519167758481-dc8997617545?w=500&h=400&fit=crop',
        duration: '1:45',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-in-the-ocean-1527-large.mp4',
      },
      {
        id: 9,
        title: 'City Cinematic',
        category: 'reels',
        thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop',
        duration: '0:45',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-snow-covered-forest-41525-large.mp4',
      },
    ],
    testimonials: [
      {
        id: 1,
        name: 'Rajas & Priya',
        role: 'Wedding Couple',
        content: 'Sekhar captured our wedding day in the most beautiful way. The aerial shots were breathtaking, and his professionalism made us feel comfortable the entire time. Highly recommended!',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      {
        id: 2,
        name: 'Aditya Singh',
        role: 'Real Estate Developer',
        content: "The drone footage for our property showcase was phenomenal. Sekhar's attention to detail and creative shots helped us sell properties faster than ever before.",
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
      {
        id: 3,
        name: 'Priya Verma',
        role: 'Travel Content Creator',
        content: 'Working with Sekhar was a game-changer for my travel content. His FPV shots bring such dynamic energy to my videos. Followers increased by 200% after uploading his footage!',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      },
      {
        id: 4,
        name: 'Vikram Productions',
        role: 'Commercial Production House',
        content: "We've worked with several drone operators, but Sekhar's combination of technical skill and creative vision is unmatched. He's now our go-to partner for all FPV drone requirements.",
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
      {
        id: 5,
        name: 'Neha Sharma',
        role: 'Event Organizer',
        content: 'The event coverage was absolutely stunning. Sekhar knows exactly how to capture the highlights and create a compelling narrative around the event.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      {
        id: 6,
        name: 'Rohan Patel',
        role: 'Music Video Director',
        content: "Sekhar's high-speed FPV shots elevated our music video from good to extraordinary. The cinematic quality is professional-grade. Worth every penny!",
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
    ],
  }

  const [adminData, setAdminData] = useState<AdminData>(defaultData)
  const [tempData, setTempData] = useState<AdminData>(defaultData)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [saveMessage, setSaveMessage] = useState('')
  const [activeTab, setActiveTab] = useState<'profile' | 'about' | 'services' | 'portfolio' | 'reviews'>('profile')

  const [uploadingPortfolioIndex, setUploadingPortfolioIndex] = useState<number | null>(null)
  const [uploadingVideoIndex, setUploadingVideoIndex] = useState<number | null>(null)
  const [videoUploadWarning, setVideoUploadWarning] = useState<string>('')

  // Authentication States
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  // Load admin data and session authentication on mount
  useEffect(() => {
    const isAuth = sessionStorage.getItem('sekharFPVIsAdmin') === 'true'
    setIsAuthenticated(isAuth)

    const savedData = localStorage.getItem('sekharFPVAdminData')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        const mergedData: AdminData = {
          name: parsed.name || defaultData.name,
          email: parsed.email || defaultData.email,
          phone: parsed.phone || defaultData.phone,
          instagram: parsed.instagram || defaultData.instagram,
          profileImage: parsed.profileImage || defaultData.profileImage,
          aboutMe: parsed.aboutMe || defaultData.aboutMe,
          experience: parsed.experience || defaultData.experience,
          flightTime: parsed.flightTime || defaultData.flightTime,
          projectsCompleted: parsed.projectsCompleted || defaultData.projectsCompleted,
          quote: parsed.quote || defaultData.quote,
          services: parsed.services || defaultData.services,
          portfolioItems: parsed.portfolioItems ? parsed.portfolioItems.map((item: any, i: number) => ({
            ...item,
            videoUrl: item.videoUrl || (defaultData.portfolioItems[i] ? defaultData.portfolioItems[i].videoUrl : 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4')
          })) : defaultData.portfolioItems,
          testimonials: parsed.testimonials || defaultData.testimonials,
        }
        setAdminData(mergedData)
        setTempData(mergedData)
        setImagePreview(mergedData.profileImage)
      } catch (e) {
        console.error('Failed to parse admin data', e)
        setAdminData(defaultData)
        setTempData(defaultData)
        setImagePreview(defaultProfile)
      }
    } else {
      setAdminData(defaultData)
      setTempData(defaultData)
      setImagePreview(defaultProfile)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginUsername.trim() === 'sekharpahi2006' && loginPassword === 'sekhar@fpv') {
      setIsAuthenticated(true)
      sessionStorage.setItem('sekharFPVIsAdmin', 'true')
      setLoginError('')
      setLoginUsername('')
      setLoginPassword('')
    } else {
      setLoginError('Invalid username or password!')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('sekharFPVIsAdmin')
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTempData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const MAX_WIDTH = 400
          const MAX_HEIGHT = 400
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
            setImagePreview(compressedBase64)
            setTempData((prev) => ({ ...prev, profileImage: compressedBase64 }))
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  // Services handlers
  const handleServiceChange = (index: number, field: keyof ServiceItem, value: string) => {
    setTempData((prev) => {
      const updated = [...prev.services]
      updated[index] = { ...updated[index], [field]: value }
      return { ...prev, services: updated }
    })
  }

  const handleAddService = () => {
    setTempData((prev) => {
      const newItem: ServiceItem = {
        iconName: 'Camera',
        title: 'New Service Offered',
        description: 'Provide details about this custom drone cinematography service.',
        color: 'from-neon-cyan to-blue-500',
      }
      return { ...prev, services: [...prev.services, newItem] }
    })
  }

  const handleDeleteService = (index: number) => {
    setTempData((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }))
  }

  // Portfolio handlers
  const handlePortfolioChange = (index: number, field: keyof PortfolioItem, value: string | number) => {
    setTempData((prev) => {
      const updated = [...prev.portfolioItems]
      updated[index] = { ...updated[index], [field]: value } as PortfolioItem
      return { ...prev, portfolioItems: updated }
    })
  }

  const handlePortfolioImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const MAX_WIDTH = 600
          const MAX_HEIGHT = 450
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
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.75)
            handlePortfolioChange(index, 'thumbnail', compressedBase64)
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePortfolioVideoUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setVideoUploadWarning('⚠️ File exceeds 2MB! Storing large video files in browser localStorage may crash the site. Consider using a direct video link instead!')
        setTimeout(() => setVideoUploadWarning(''), 6000)
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Data = reader.result as string
        handlePortfolioChange(index, 'videoUrl', base64Data)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddPortfolioItem = () => {
    setTempData((prev) => {
      const newItem: PortfolioItem = {
        id: Date.now(),
        title: 'New Drone Footage',
        category: 'reels',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=400&fit=crop',
        duration: '1:00',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
      }
      return { ...prev, portfolioItems: [...prev.portfolioItems, newItem] }
    })
  }

  const handleDeletePortfolioItem = (id: number) => {
    setTempData((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.filter((item) => item.id !== id),
    }))
  }

  // Reviews handlers
  const handleReviewChange = (index: number, field: keyof TestimonialItem, value: string | number) => {
    setTempData((prev) => {
      const updated = [...prev.testimonials]
      updated[index] = { ...updated[index], [field]: value } as TestimonialItem
      return { ...prev, testimonials: updated }
    })
  }

  const handleDeleteReview = (id: string | number) => {
    setTempData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((item) => item.id !== id),
    }))
  }

  const handleSave = () => {
    setAdminData(tempData)
    localStorage.setItem('sekharFPVAdminData', JSON.stringify(tempData))
    setSaveMessage('✓ Changes saved successfully!')
    setIsEditing(false)

    setTimeout(() => setSaveMessage(''), 2000)

    window.dispatchEvent(
      new CustomEvent('adminDataUpdated', { detail: tempData })
    )
  }

  const handleCancel = () => {
    setTempData(adminData)
    setImagePreview(adminData.profileImage || defaultProfile)
    setIsEditing(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-effect rounded-2xl border border-white/20 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-dark-900/95 border-b border-white/10 px-8 py-5 flex justify-between items-center flex-shrink-0">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Edit2 className="w-6 h-6 text-neon-cyan" />
            Admin Panel Customizer
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Auth Check */}
        {!isAuthenticated ? (
          /* Login Form */
          <div className="p-8 space-y-6 max-w-md mx-auto overflow-y-auto w-full">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white">Admin Authentication</h3>
              <p className="text-gray-400 text-sm">
                Enter credentials to customize cinematic sections
              </p>
            </div>

            {loginError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-center text-sm font-semibold"
              >
                {loginError}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                  <User size={16} className="text-neon-cyan" />
                  Username
                </label>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                  <Lock size={16} className="text-neon-cyan" />
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-dark-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 glow-button glow-button-primary text-dark-950 font-bold flex items-center justify-center gap-2"
              >
                <Lock size={18} />
                Access Panel
              </motion.button>
            </form>

            {/* Credentials hint block removed for security */}
          </div>
        ) : (
          /* Customization Dashboard */
          <>
            {/* Tabs Header */}
            <div className="flex border-b border-white/10 bg-dark-900/40 overflow-x-auto flex-shrink-0">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'border-neon-cyan text-neon-cyan bg-white/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <User size={16} />
                Profile & Contact
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'border-neon-cyan text-neon-cyan bg-white/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Briefcase size={16} />
                About & Stats
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'services'
                    ? 'border-neon-cyan text-neon-cyan bg-white/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers size={16} />
                Services
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'portfolio'
                    ? 'border-neon-cyan text-neon-cyan bg-white/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Film size={16} />
                Portfolio Gallery
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'reviews'
                    ? 'border-neon-cyan text-neon-cyan bg-white/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Quote size={16} />
                Manage Reviews
              </button>
            </div>

            {/* Tabs Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {/* Save Alert */}
              {saveMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg text-center"
                >
                  {saveMessage}
                </motion.div>
              )}

              {/* Profile & Contact Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden glass-effect border-2 border-neon-cyan/30 relative">
                        <img
                          src={imagePreview || defaultProfile}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={!isEditing}
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={!isEditing}
                        className={`w-full md:w-auto px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                          isEditing
                            ? 'glow-button glow-button-primary text-dark-950 cursor-pointer'
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <Upload size={16} />
                        Upload New Avatar
                      </button>
                      <p className="text-gray-400 text-xs mt-2">Recommended: Square Aspect Ratio (500x500px)</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={tempData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={tempData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={tempData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm">Instagram Handle</label>
                      <input
                        type="text"
                        name="instagram"
                        value={tempData.instagram}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* About & Stats Tab */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2 text-sm">About Me Bio Text</label>
                    <textarea
                      name="aboutMe"
                      rows={5}
                      value={tempData.aboutMe}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors resize-none ${
                        isEditing
                          ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                          : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                      }`}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm flex items-center gap-1">
                        <Activity size={14} className="text-neon-cyan" />
                        Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={tempData.experience}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="e.g. 8 Years"
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm flex items-center gap-1">
                        <Activity size={14} className="text-neon-cyan" />
                        Flight Time
                      </label>
                      <input
                        type="text"
                        name="flightTime"
                        value={tempData.flightTime}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="e.g. 500+ Hours"
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1 text-sm flex items-center gap-1">
                        <Activity size={14} className="text-neon-cyan" />
                        Projects Completed
                      </label>
                      <input
                        type="text"
                        name="projectsCompleted"
                        value={tempData.projectsCompleted}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="e.g. 100+ Projects"
                        className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
                          isEditing
                            ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                            : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2 text-sm flex items-center gap-1">
                      <Quote size={14} className="text-neon-cyan" />
                      Cinematic Quote
                    </label>
                    <textarea
                      name="quote"
                      rows={3}
                      value={tempData.quote}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Enter Quote Text"
                      className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors resize-none ${
                        isEditing
                          ? 'bg-dark-800/50 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                          : 'bg-dark-700 border-gray-800 text-gray-400 cursor-not-allowed'
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-bold">List of Services</h4>
                    {isEditing && (
                      <button
                        onClick={handleAddService}
                        className="glow-button glow-button-primary text-dark-950 px-3 py-1 text-xs font-bold flex items-center gap-1"
                      >
                        <Plus size={14} /> Add Service
                      </button>
                    )}
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                    {tempData.services.map((service, index) => (
                      <div key={index} className="glass-effect p-4 border border-white/10 rounded-xl space-y-3 relative group">
                        {isEditing && (
                          <button
                            onClick={() => handleDeleteService(index)}
                            className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors p-1"
                            title="Remove Service"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="md:col-span-1">
                            <label className="block text-gray-400 text-xs mb-1">Service Icon</label>
                            <select
                              value={service.iconName}
                              disabled={!isEditing}
                              onChange={(e) => handleServiceChange(index, 'iconName', e.target.value)}
                              className={`w-full px-3 py-1.5 text-xs rounded border transition-colors ${
                                isEditing
                                  ? 'bg-dark-800 border-gray-700 text-white'
                                  : 'bg-dark-700 border-gray-800 text-gray-400'
                              }`}
                            >
                              <option value="Camera">Camera</option>
                              <option value="Heart">Heart (Wedding)</option>
                              <option value="Building2">Building (Real Estate)</option>
                              <option value="Plane">Plane (Travel)</option>
                              <option value="Instagram">Instagram (Social)</option>
                              <option value="Zap">Zap (Event)</option>
                              <option value="Clapperboard">Clapperboard (Commercial)</option>
                              <option value="Sparkles">Sparkles (Editing)</option>
                            </select>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-400 text-xs mb-1">Service Title</label>
                            <input
                              type="text"
                              value={service.title}
                              disabled={!isEditing}
                              onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                              className={`w-full px-3 py-1.5 text-xs rounded border transition-colors ${
                                isEditing
                                  ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                  : 'bg-dark-700 border-gray-800 text-gray-400'
                              }`}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-400 text-xs mb-1">Description</label>
                          <textarea
                            value={service.description}
                            rows={2}
                            disabled={!isEditing}
                            onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                            className={`w-full px-3 py-1.5 text-xs rounded border transition-colors resize-none ${
                              isEditing
                                  ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                  : 'bg-dark-700 border-gray-800 text-gray-400'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Portfolio Tab */}
              {activeTab === 'portfolio' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-bold">List of Portfolio Videos</h4>
                    {isEditing && (
                      <button
                        onClick={handleAddPortfolioItem}
                        className="glow-button glow-button-primary text-dark-950 px-3 py-1 text-xs font-bold flex items-center gap-1"
                      >
                        <Plus size={14} /> Add Video Project
                      </button>
                    )}
                  </div>

                  {videoUploadWarning && (
                    <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 px-4 py-3 rounded-lg text-xs leading-relaxed">
                      {videoUploadWarning}
                    </div>
                  )}

                  {/* Hidden File Inputs */}
                  <input
                    ref={portfolioFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (uploadingPortfolioIndex !== null) {
                        handlePortfolioImageUpload(e, uploadingPortfolioIndex)
                        setUploadingPortfolioIndex(null)
                      }
                    }}
                    className="hidden"
                  />
                  <input
                    ref={portfolioVideoFileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={(e) => {
                      if (uploadingVideoIndex !== null) {
                        handlePortfolioVideoUpload(e, uploadingVideoIndex)
                        setUploadingVideoIndex(null)
                      }
                    }}
                    className="hidden"
                  />

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                    {tempData.portfolioItems.map((item, index) => (
                      <div key={item.id} className="glass-effect p-4 border border-white/10 rounded-xl space-y-3 relative">
                        {isEditing && (
                          <button
                            onClick={() => handleDeletePortfolioItem(item.id)}
                            className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors p-1 z-10"
                            title="Remove Video"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}

                        <div className="flex gap-4">
                          <div className="w-20 h-20 bg-dark-800 border border-white/10 rounded overflow-hidden flex-shrink-0 relative group">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover animate-fadeIn" />
                            {isEditing && (
                              <button
                                type="button"
                                onClick={() => {
                                  setUploadingPortfolioIndex(index)
                                  portfolioFileInputRef.current?.click()
                                }}
                                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-semibold gap-1"
                              >
                                <Upload size={14} /> Update Pic
                              </button>
                            )}
                          </div>

                          <div className="flex-1 grid md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Video Title</label>
                              <input
                                type="text"
                                value={item.title}
                                disabled={!isEditing}
                                onChange={(e) => handlePortfolioChange(index, 'title', e.target.value)}
                                className={`w-full px-2 py-1 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              />
                            </div>
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Category</label>
                              <select
                                value={item.category}
                                disabled={!isEditing}
                                onChange={(e) => handlePortfolioChange(index, 'category', e.target.value)}
                                className={`w-full px-2 py-1.5 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              >
                                <option value="weddings">Weddings</option>
                                <option value="travel">Travel</option>
                                <option value="realestate">Real Estate</option>
                                <option value="reels">Reels</option>
                                <option value="commercial">Commercial</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Duration</label>
                              <input
                                type="text"
                                value={item.duration}
                                disabled={!isEditing}
                                placeholder="e.g. 2:45"
                                onChange={(e) => handlePortfolioChange(index, 'duration', e.target.value)}
                                className={`w-full px-2 py-1 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Thumbnail Image URL / Base64</label>
                              <div className="flex gap-1.5">
                                <input
                                  type="text"
                                  value={item.thumbnail}
                                  disabled={!isEditing}
                                  onChange={(e) => handlePortfolioChange(index, 'thumbnail', e.target.value)}
                                  className={`flex-1 px-2 py-1 text-xs rounded border transition-colors ${
                                    isEditing
                                      ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                      : 'bg-dark-700 border-gray-800 text-gray-400 font-mono'
                                  }`}
                                />
                                {isEditing && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setUploadingPortfolioIndex(index)
                                      portfolioFileInputRef.current?.click()
                                    }}
                                    className="px-2 py-1 bg-dark-800 hover:bg-dark-700 border border-gray-700 text-xs font-semibold text-gray-300 rounded flex items-center gap-1 whitespace-nowrap"
                                  >
                                    <Upload size={12} /> Upload Image
                                  </button>
                                )}
                              </div>
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-gray-400 text-xs mb-0.5">Cinematic Video URL / Base64 Data</label>
                              <div className="flex gap-1.5">
                                <input
                                  type="text"
                                  value={item.videoUrl}
                                  disabled={!isEditing}
                                  placeholder="Enter streaming MP4 / YouTube URL"
                                  onChange={(e) => handlePortfolioChange(index, 'videoUrl', e.target.value)}
                                  className={`flex-1 px-2 py-1 text-xs rounded border transition-colors ${
                                    isEditing
                                      ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                      : 'bg-dark-700 border-gray-800 text-gray-400 font-mono'
                                  }`}
                                />
                                {isEditing && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setUploadingVideoIndex(index)
                                      portfolioVideoFileInputRef.current?.click()
                                    }}
                                    className="px-2 py-1 bg-dark-800 hover:bg-dark-700 border border-gray-700 text-xs font-semibold text-gray-300 rounded flex items-center gap-1 whitespace-nowrap"
                                  >
                                    <Upload size={12} /> Upload Video
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-bold">Client Reviews & Testimonials</h4>
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                    {tempData.testimonials.map((review, index) => (
                      <div key={review.id || index} className="glass-effect p-4 border border-white/10 rounded-xl space-y-3 relative">
                        {isEditing && (
                          <button
                            onClick={() => handleDeleteReview(review.id)}
                            className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors p-1"
                            title="Remove Review"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}

                        <div className="flex gap-4">
                          <div className="w-14 h-14 bg-dark-800 border border-white/10 rounded-full overflow-hidden flex-shrink-0">
                            <img src={review.avatar} alt={review.name} className="w-full h-full object-cover animate-fadeIn" />
                          </div>

                          <div className="flex-1 grid md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Client Name</label>
                              <input
                                type="text"
                                value={review.name}
                                disabled={!isEditing}
                                onChange={(e) => handleReviewChange(index, 'name', e.target.value)}
                                className={`w-full px-2 py-1 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              />
                            </div>
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Role / Company</label>
                              <input
                                type="text"
                                value={review.role}
                                disabled={!isEditing}
                                onChange={(e) => handleReviewChange(index, 'role', e.target.value)}
                                className={`w-full px-2 py-1 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              />
                            </div>
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Rating</label>
                              <select
                                value={review.rating}
                                disabled={!isEditing}
                                onChange={(e) => handleReviewChange(index, 'rating', parseInt(e.target.value))}
                                className={`w-full px-2 py-1.5 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              >
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-gray-400 text-xs mb-0.5">Avatar Image URL / Data</label>
                              <input
                                type="text"
                                value={review.avatar}
                                disabled={!isEditing}
                                onChange={(e) => handleReviewChange(index, 'avatar', e.target.value)}
                                className={`w-full px-2 py-1 text-xs rounded border transition-colors ${
                                  isEditing
                                    ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                    : 'bg-dark-700 border-gray-800 text-gray-400'
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-400 text-xs mb-0.5">Client Comment</label>
                          <textarea
                            value={review.content}
                            rows={3}
                            disabled={!isEditing}
                            onChange={(e) => handleReviewChange(index, 'content', e.target.value)}
                            className={`w-full px-2.5 py-1.5 text-xs rounded border transition-colors resize-none ${
                              isEditing
                                ? 'bg-dark-800 border-gray-700 text-white focus:border-neon-cyan focus:outline-none'
                                : 'bg-dark-700 border-gray-800 text-gray-400'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Panel */}
            <div className="bg-dark-900/90 border-t border-white/10 px-8 py-5 flex-shrink-0 flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-3 w-full md:w-auto">
                {!isEditing ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditing(true)}
                    className="flex-1 md:flex-none glow-button glow-button-primary text-dark-950 px-6 py-2.5 font-bold flex items-center justify-center gap-2"
                  >
                    <Edit2 size={16} />
                    Enable Editing
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSave}
                      className="flex-1 md:flex-none glow-button glow-button-primary text-dark-950 px-6 py-2.5 font-bold flex items-center justify-center gap-2"
                    >
                      <Save size={16} />
                      Save Settings
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCancel}
                      className="flex-1 md:flex-none glow-button glow-button-secondary px-6 py-2.5 font-bold flex items-center justify-center gap-2"
                    >
                      <X size={16} />
                      Discard
                    </motion.button>
                  </>
                )}
              </div>

              <div className="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleLogout}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-red-950/40 border border-red-500/30 hover:bg-red-900/40 text-red-300 text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut size={16} />
                  Log Out
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X size={16} />
                  Exit Panel
                </motion.button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default AdminPanel
