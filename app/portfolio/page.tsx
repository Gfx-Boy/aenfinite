"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Code, Users, Calendar } from "lucide-react";
import { AnimatedStars } from "@/components/ui/animated-stars";

export default function Portfolio() {
  const projects = [
    {
      title: "Khanjees",
      category: "Web Development",
      image: "https://i.ibb.co/5xV9s7F/Screenshot-2025-01-24-190912.png",
      description: "A modern e-commerce platform built with wordpress , featuring real-time inventory management.",
      technologies: ["Wordpress", "TailwindCSS", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "https://khanjees.com",
      completionDate: "March 2024",
      teamSize: 4,
      views: "2.5k",
    },
    {
      title: "Frutopia",
      category: "Web Development",
      image: "https://i.ibb.co/Y2qRJW5/Screenshot-2025-01-24-190932.png",
      description: "A modern e-commerce platform built with php, Wordpress.",
      technologies: ["Next.js", "Stripe", "TailwindCSS", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      completionDate: "April 2024",
      teamSize: 4,
      views: "3.25k",
    },
    {
      title: "KrmTec",
      category: "Web Development",
      image: "https://i.ibb.co/9pq6ht7/Screenshot-2025-01-24-191206.png",
      description: "A modern website",
      technologies: ["Html,Css and Javascript"],
      githubUrl: "#",
      liveUrl: "#",
      completionDate: "March 2024",
      teamSize: 4,
      views: "2.5k",
    },
    {
      title: "Books Turner",
      category: "Web Development",
      image: "https://i.ibb.co/F5QGCtj/Screenshot-2025-01-24-191306.png",
      description: "A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management",
      technologies: ["Next.js", "Stripe", "TailwindCSS", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      completionDate: "November 2024",
      teamSize: 4,
      views: "10.4k",
    },
    {
      title: "Gotgarmz",
      category: "Web Development",
      image: "https://i.ibb.co/rZN1F5N/Gotgarmz.jpg",
      description: "A Clothing Store made in Shopify",
      technologies: ["Shopify"],
      githubUrl: "#",
      liveUrl: "#",
      completionDate: "March 2024",
      teamSize: 4,
      views: "2.5k",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      description: "A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management and AI-powered product recommendations.",
      technologies: ["Next.js", "Stripe", "TailwindCSS", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      completionDate: "March 2024",
      teamSize: 4,
      views: "2.5k",
    },
    {
      title: "Health & Fitness App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=500&fit=crop",
      description: "Cross-platform mobile app for fitness tracking with personalized workout plans and nutrition guidance.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      completionDate: "February 2024",
      teamSize: 3,
      views: "1.8k",
    },
    // ... (previous projects remain the same with added details)
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Custom Software",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20">
        <AnimatedStars />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our latest projects and success stories
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-purple-900/50 hover:border-purple-700/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 left-4 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.completionDate}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Team: {project.teamSize}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {project.views}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "10+", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Have a Project in Mind?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's work together to bring your vision to life
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Start a Project
              <Code className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}