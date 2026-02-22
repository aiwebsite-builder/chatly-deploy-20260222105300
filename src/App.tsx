import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Cloud, LayoutGrid, Check, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardHoverEffect = {
  hover: {
    y: -5,
    boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
    transition: { duration: 0.2 },
  },
};

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <header className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900"
          >
            Ascend
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex space-x-8"
          >
            {['Product', 'Features', 'Pricing', 'Company'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 transition-colors">
                {item}
              </a>
            ))}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              Sign Up
            </button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gray-50 text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full glow-gradient animate-pulse-slow"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto px-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Unlock Your Team's Full Potential
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ascend provides a seamless platform for collaboration, project management, and growth. Empower your team to achieve more, together.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-xl border-2 border-indigo-200 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Learn More
            </button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-20 relative w-full aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] xl:aspect-[16/6] max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-white p-2"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard screenshot"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-4 ring-indigo-500 ring-opacity-10"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-20 md:py-28 bg-white" id="trusted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-500 font-medium"
          >
            Trusted by teams at leading companies worldwide
          </motion.p>
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {[
              'InnovateX',
              'Quantum Corp',
              'GlobalTech',
              'Apex Systems',
              'Visionary Inc',
            ].map((company, index) => (
              <motion.span
                key={company}
                variants={itemVariants}
                className="text-3xl font-bold tracking-tight text-gray-400 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {company}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 md:py-28 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Everything You Need to Scale
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-xl text-gray-600"
            >
              From seamless project tracking to insightful analytics, Ascend empowers your team with powerful tools designed for efficiency.
            </motion.p>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              {
                icon: Sparkles,
                title: 'Intuitive Workflows',
                description: 'Design custom workflows that adapt to your team\'s unique processes, ensuring efficiency and clarity at every step.',
              },
              {
                icon: LayoutGrid,
                title: 'Integrated Project Management',
                description: 'Keep all your projects organized and on track with powerful task management, timelines, and resource allocation features.',
              },
              {
                icon: BarChart3,
                title: 'Actionable Analytics',
                description: 'Gain deep insights into team performance and project progress with customizable dashboards and real-time reports.',
              },
              {
                icon: Cloud,
                title: 'Secure Cloud Collaboration',
                description: 'Work together seamlessly with secure file sharing, real-time editing, and synchronized updates across all devices.',
              },
              {
                icon: Check,
                title: 'Customizable Dashboards',
                description: 'Tailor your dashboard to highlight the metrics and projects most critical to your role and objectives.',
              },
              {
                icon: BarChart3,
                title: 'Automated Reporting',
                description: 'Automate tedious report generation, freeing up your team to focus on strategic work rather than manual data compilation.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 transform"
              >
                <feature.icon className="w-10 h-10 text-indigo-600" />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 md:py-28 bg-white" id="product">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
              alt="Project management interface"
              className="rounded-2xl shadow-2xl object-cover w-full h-auto transform rotate-1 transition-transform duration-500 hover:rotate-0"
            />
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-4 ring-indigo-500 ring-opacity-5 glow-gradient"></div>
          </motion.div>
          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Streamlined Productivity, Simplified.
            </h2>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Ascend brings all your essential tools into one powerful, intuitive interface. From task assignments to progress tracking, every feature is designed to cut through complexity and boost your team's output.
            </p>
            <ul className="mt-8 space-y-4 text-lg text-gray-700">
              <li className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" /> Real-time collaboration
              </li>
              <li className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" /> Advanced access controls
              </li>
              <li className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" /> Integrations with your favorite apps
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-indigo-700 text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Elevate Your Team's Performance?
          </h2>
          <p className="mt-6 text-xl text-indigo-200 max-w-2xl mx-auto">
            Join thousands of teams already using Ascend to achieve their goals faster and more efficiently.
          </p>
          <div className="mt-10">
            <button className="px-10 py-5 bg-white text-indigo-700 text-xl font-bold rounded-xl hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto">
              Start Your Free Trial Today
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ascend</h3>
            <p className="text-gray-400">
              Empowering teams to achieve more, together.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ascend. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
