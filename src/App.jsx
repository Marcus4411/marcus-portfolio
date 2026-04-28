import React, { useRef, useState } from 'react'
import { motion, useInView, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import profilePhoto from './assets/marcus-profile.png'
import logoImage from './assets/marcus-logo.png'

const IconText = ({ symbol, size = 20, className = '' }) => (
  <span className={className} style={{ fontSize: size, lineHeight: 1 }} aria-hidden="true">
    {symbol}
  </span>
)

const Menu = ({ size = 24, className = '' }) => <IconText symbol="☰" size={size} className={className} />
const X = ({ size = 24, className = '' }) => <IconText symbol="✕" size={size} className={className} />
const ArrowRight = ({ size = 20, className = '' }) => <IconText symbol="→" size={size} className={className} />
const Mail = ({ size = 20, className = '' }) => <IconText symbol="✉" size={size} className={className} />
const Phone = ({ size = 20, className = '' }) => <IconText symbol="☎" size={size} className={className} />
const WhatsApp = ({ size = 20, className = '' }) => <IconText symbol="🟢" size={size} className={className} />
const MapPin = ({ size = 20, className = '' }) => <IconText symbol="📍" size={size} className={className} />
const Github = ({ size = 20, className = '' }) => <IconText symbol="⌘" size={size} className={className} />
const Linkedin = ({ size = 20, className = '' }) => <IconText symbol="in" size={size} className={className} />
const ExternalLink = ({ size = 16, className = '' }) => <IconText symbol="↗" size={size} className={className} />
const ChevronDown = ({ size = 28, className = '' }) => <IconText symbol="⌄" size={size} className={className} />

const EMAIL_HREF = 'mailto:marcusmutonyi44@gmail.com?subject=Portfolio%20Inquiry'

// ═══════════════════════════════════════════════════════════════════
// NAVBAR COMPONENT
// ═══════════════════════════════════════════════════════════════════
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const isNavVisible = useInView(navRef, { once: false })

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-default"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          <img
            src={logoImage}
            alt="Marcus Mutonyi logo"
            className="h-10 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`text-sm font-body transition-colors relative ${
                activeSection === section.id ? 'text-accent-gold' : 'text-text-muted hover:text-text-primary'
              }`}
              whileHover={{ color: '#C9A84C' }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href={EMAIL_HREF}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)' }}
          className="hidden md:block px-4 py-2 rounded-lg bg-accent-gold text-bg-primary font-body font-semibold text-sm hover:bg-opacity-90 transition-all"
        >
          Get in Touch
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary"
          whileHover={{ rotate: 90 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-t border-border-default"
          >
            <div className="px-4 py-4 space-y-3">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  whileHover={{ x: 8 }}
                  className="block w-full text-left px-4 py-2 text-text-primary hover:text-accent-gold font-body"
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ═══════════════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════════════
const Hero = ({ setActiveSection }) => {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = ['Software Engineering Student', 'Graphic Designer', 'Problem Solver', 'ICT Enthusiast']
  const heroRef = useRef(null)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const name = 'Marcus Mutonyi'
  const nameLetters = name.split('')

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border-2 border-accent-gold/10 rounded-full"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 border-2 border-accent-steel/10"
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, x: { duration: 8, repeat: Infinity } }}
        />
        {/* Dot Grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-text-primary leading-tight mb-4">
            {nameLetters.map((letter, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl text-accent-gold font-body mb-4">
            <span className="font-mono text-lg">&gt;</span> {' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </p>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-text-muted font-body text-lg mb-10"
        >
          Final-year Software Engineering student at Information & Communications University, Lusaka.
          Passionate about networking, coding, and transforming ideas into elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => {
              setActiveSection('projects')
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 168, 76, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-gold text-bg-primary font-display font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            View My Work <ArrowRight size={20} />
          </motion.button>
          <motion.a
            href="/cv.pdf"
            whileHover={{ scale: 1.05, borderColor: '#C9A84C' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-display font-bold rounded-lg hover:bg-accent-gold hover:text-bg-primary transition-all"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent-gold"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// ABOUT SECTION
// ═══════════════════════════════════════════════════════════════════
const About = () => {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { once: true, margin: '-100px' })

  const stats = [
    { label: 'Years Experience', value: '4+', suffix: '' },
    { label: 'Started University', value: '2022', suffix: '' },
    { label: 'Projects Completed', value: '10+', suffix: '' },
  ]

  return (
    <section id="about" ref={aboutRef} className="relative py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Photo Placeholder */}
          <motion.div
            className="flex justify-center md:justify-start"
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 rounded-full border-4 border-accent-gold overflow-hidden bg-bg-surface flex items-center justify-center shadow-2xl"
              style={{
                boxShadow: isInView ? '0 0 40px rgba(201, 168, 76, 0.4)' : '0 0 20px rgba(201, 168, 76, 0.2)'
              }}
            >
              <img
                src={profilePhoto}
                alt="Marcus Mutonyi portrait"
                className="w-full h-full object-cover"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 border-4 border-accent-gold/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-text-primary"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted font-body text-lg leading-relaxed"
            >
              Motivated and detail-oriented IT learner with strong academic and practical interest in computer networking, coding, and information systems. I bring a unique blend of creative design thinking and technical problem-solving to every project.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 py-8 border-t border-b border-border-default"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <CounterNumber target={parseInt(stat.value)} isInView={isInView} delay={0.4 + i * 0.1} />
                  <p className="text-text-muted font-body text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-muted font-body text-base"
            >
              When I'm not coding or designing, I'm exploring emerging technologies and collaborating with teams to build solutions that matter.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Counter Number Component
const CounterNumber = ({ target, isInView, delay }) => {
  const count = useMotionValue(0)
  const rounded = useSpring(count, {
    layout: false,
  })

  React.useEffect(() => {
    if (isInView) {
      count.set(target)
    }
  }, [isInView, target, count])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay }}
      className="text-3xl md:text-4xl font-display font-bold text-accent-gold"
    >
      <motion.span>{rounded}</motion.span>
      <span className="text-2xl">+</span>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// EXPERIENCE SECTION
// ═══════════════════════════════════════════════════════════════════
const Experience = () => {
  const experienceRef = useRef(null)
  const isInView = useInView(experienceRef, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Grit Web Services',
      period: '2026 – Present',
      description: 'Developing and maintaining full-stack web solutions, building responsive front-end interfaces, integrating backend services, and collaborating with teams to deliver reliable digital products.',
      side: 'left',
    },
    {
      title: 'Graphic Designer',
      company: 'Active Computing Services',
      period: '2022 – 2025',
      description: 'Designed posters, banners, and digital graphics for business promotion. Created branding materials aligned with client requirements. Produced clean, professional layouts for print and digital use. Collaborated with teams to meet deadlines and revise based on feedback.',
      side: 'right',
    },
    {
      title: 'Software Engineering Student',
      company: 'Information and Communications University',
      period: '2022 – 2026',
      description: 'Final-year student pursuing BSc in Information & Communication Technology. Specialized in Software Engineering with focus on networking, coding, and information systems. Maintained strong academic performance while building practical projects.',
      side: 'left',
    },
  ]

  return (
    <section id="experience" ref={experienceRef} className="relative py-24 bg-bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-16 text-center"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <svg className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 h-full hidden lg:block" viewBox="0 0 2 100%" preserveAspectRatio="none">
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#C9A84C"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </svg>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: exp.side === 'left' ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: exp.side === 'left' ? -40 : 40 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${exp.side === 'right' ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex justify-center">
                  <motion.div
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    className="w-6 h-6 bg-accent-gold rounded-full border-4 border-bg-primary shadow-lg"
                  />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: exp.side === 'left' ? -8 : 8 }}
                  className={`p-6 rounded-lg bg-bg-primary border-l-4 border-accent-gold hover:shadow-lg transition-all ${exp.side === 'left' ? 'lg:text-right' : ''}`}
                >
                  <h3 className="text-2xl font-display font-bold text-accent-gold mb-1">{exp.title}</h3>
                  <p className="text-text-muted font-body text-sm mb-2">{exp.company} · {exp.period}</p>
                  <p className="text-text-primary font-body leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// SKILLS SECTION
// ═══════════════════════════════════════════════════════════════════
const Skills = () => {
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, { once: true, margin: '-100px' })

  const technicalSkills = [
    { name: 'HTML', level: 92 },
    { name: 'CSS', level: 88 },
    { name: 'Tailwind CSS', level: 86 },
    { name: 'React', level: 82 },
    { name: 'PHP', level: 58 },
    { name: 'JavaScript', level: 67 },
    { name: 'MySQL', level: 60 },
    { name: 'Graphic Design', level: 88 },
  ]

  const softSkills = [
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Organization',
    'Willingness to Learn',
    'Adaptability',
  ]

  return (
    <section id="skills" ref={skillsRef} className="relative py-24 bg-bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-display font-bold text-accent-gold mb-8"
            >
              Technical Skills
            </motion.h3>

            <div className="space-y-8">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-text-primary font-semibold">{skill.name}</span>
                    <span className="font-body text-accent-gold font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-bg-surface rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-gold to-accent-steel rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-display font-bold text-accent-gold mb-8"
            >
              Soft Skills
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + i * 0.05,
                  }}
                  className="px-4 py-3 rounded-full bg-bg-surface border border-accent-gold/30 text-center"
                >
                  <p className="font-body text-text-primary text-sm font-medium">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// PROJECTS SECTION
// ═══════════════════════════════════════════════════════════════════
const Projects = () => {
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'BloodLink Mongu',
      description: 'Blood Donor Management System designed to connect donors with recipients in Mongu. Built with PHP and MySQL for seamless donor registration and matching.',
      tags: ['PHP', 'MySQL', 'Database Design'],
      icon: '🩸',
    },
    {
      title: 'ICU Campus Portal',
      description: 'Responsive academic portal for Information & Communications University. Created with HTML, CSS, and modern web principles to enhance student engagement.',
      tags: ['HTML', 'CSS', 'Responsive Design'],
      icon: '🎓',
    },
    {
      title: 'Brand Identity Design',
      description: 'Comprehensive graphic design work completed at Active Computing Services. Includes posters, banners, and branding materials for various business clients.',
      tags: ['Graphic Design', 'Branding', 'Digital Media'],
      icon: '🎨',
    },
  ]

  return (
    <section id="projects" ref={projectsRef} className="relative py-24 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: 5, y: 30 }}
              animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : { opacity: 0, rotateX: 5, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(201, 168, 76, 0.15)' }}
              className="p-6 rounded-lg bg-bg-primary border-t-4 border-accent-gold overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{project.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-accent-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted font-body text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-mono bg-accent-gold/10 text-accent-gold rounded-full border border-accent-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-accent-gold font-body font-semibold text-sm hover:text-text-primary transition-colors"
              >
                View Project <ExternalLink size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// CONTACT SECTION
// ═══════════════════════════════════════════════════════════════════
const Contact = () => {
  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const whatsappNumber = '260974349854'
  const whatsappHref = `https://wa.me/${whatsappNumber}`

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: 'marcusmutonyi44@gmail.com',
      href: EMAIL_HREF,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+260 974 349 854',
      href: 'tel:+260974349854',
    },
    {
      icon: WhatsApp,
      label: 'WhatsApp',
      value: '+260 974 349 854',
      href: whatsappHref,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lusaka, Zambia',
      href: '#',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={contactRef} className="relative py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-text-muted font-body text-lg max-w-2xl mx-auto mb-16"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.a
                key={i}
                href={card.href}
                target={card.label === 'WhatsApp' ? '_blank' : undefined}
                rel={card.label === 'WhatsApp' ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(201, 168, 76, 0.1)' }}
                className={`p-6 rounded-lg bg-bg-surface border border-border-default hover:border-accent-gold/30 transition-all text-center group ${
                  card.label === 'WhatsApp' ? 'hover:border-green-500/60' : ''
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors"
                >
                  <Icon className="text-accent-gold" size={28} />
                </motion.div>
                <h3 className="font-display font-bold text-text-primary mb-2">{card.label}</h3>
                <p className="font-body text-text-muted text-sm">{card.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-body text-text-primary font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-bg-surface border border-border-default text-text-primary placeholder-text-muted font-body focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-text-primary font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-bg-surface border border-border-default text-text-primary placeholder-text-muted font-body focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-text-primary font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-bg-surface border border-border-default text-text-primary placeholder-text-muted font-body focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 168, 76, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-accent-gold text-bg-primary font-display font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// FOOTER COMPONENT
// ═══════════════════════════════════════════════════════════════════
const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true })

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: WhatsApp, href: 'https://wa.me/260974349854', label: 'WhatsApp' },
    { icon: Mail, href: EMAIL_HREF, label: 'Email' },
  ]

  return (
    <footer ref={footerRef} className="relative py-12 bg-bg-surface border-t border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Copyright */}
          <p className="font-body text-text-muted text-sm text-center md:text-left">
            © 2026 Marcus Mutonyi — Built with React & Tailwind CSS
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  target={link.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={link.label === 'WhatsApp' ? 'noreferrer' : undefined}
                  whileHover={{ y: -4, color: '#C9A84C' }}
                  className="text-text-muted hover:text-accent-gold transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MAIN APP COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="bg-bg-primary text-text-primary font-body overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
