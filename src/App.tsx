import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyChooseMe from './components/WhyChooseMe'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'
import defaultProfile from './assets/profile.jpg'
import { loadAdminData } from './services/dbService'

export interface ServiceItem {
  iconName: string
  title: string
  description: string
  color: string
}

export interface PortfolioItem {
  id: number
  title: string
  category: string
  thumbnail: string
  duration: string
  videoUrl: string
}

export interface TestimonialItem {
  id: string | number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

export interface AdminData {
  name: string
  email: string
  phone: string
  instagram: string
  profileImage: string
  aboutMe: string
  experience: string
  flightTime: string
  projectsCompleted: string
  quote: string
  services: ServiceItem[]
  portfolioItems: PortfolioItem[]
  testimonials: TestimonialItem[]
  web3formsKey?: string
}

function App() {
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [adminData, setAdminData] = useState<AdminData>({
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
    web3formsKey: '',
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
  })

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Load admin data from database or localStorage
    const fetchData = async () => {
      const data = await loadAdminData()
      if (data) {
        setAdminData((prev) => ({
          ...prev,
          ...data,
          profileImage: data.profileImage || defaultProfile,
        }))
      }
    }
    fetchData()

    // Listen for admin data updates
    const handleAdminUpdate = (event: CustomEvent) => {
      setAdminData(event.detail)
    }

    window.addEventListener('adminDataUpdated', handleAdminUpdate as EventListener)
    return () => {
      window.removeEventListener('adminDataUpdated', handleAdminUpdate as EventListener)
    }
  }, [])

  return (
    <div className="bg-dark-950 min-h-screen">
      <Navbar 
        adminData={adminData}
        onAdminClick={() => setShowAdminPanel(true)} 
      />
      <Hero />
      <About adminData={adminData} />
      <Services adminData={adminData} />
      <Portfolio adminData={adminData} />
      <WhyChooseMe adminData={adminData} />
      <Testimonials adminData={adminData} />
      <Contact adminData={adminData} />
      <Footer adminData={adminData} />

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  )
}

export default App
