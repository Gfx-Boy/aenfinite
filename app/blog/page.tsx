"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, Tag, Eye, MessageSquare, Share2 } from "lucide-react";
import { AnimatedStars } from "@/components/ui/animated-stars";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Web Development: What's Next?",
      excerpt: "Explore the latest trends and technologies shaping the future of web development. From WebAssembly to Edge Computing, discover what's driving innovation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      author: "John Doe",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      tags: ["Web Development", "Innovation", "Technology"],
      views: "1.2k",
      comments: 24,
    },
    {
      title: "Mastering Mobile App Design: Best Practices",
      excerpt: "Learn the essential principles for creating engaging mobile applications. Deep dive into UI/UX patterns, performance optimization, and user engagement strategies.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      author: "Jane Smith",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
      date: "Mar 12, 2024",
      readTime: "7 min read",
      category: "Design",
      tags: ["Mobile", "Design", "UX"],
      views: "856",
      comments: 18,
    },
    {
      title: "Digital Marketing Strategies for 2024",
      excerpt: "Stay ahead of the curve with these effective digital marketing techniques. From AI-powered analytics to personalized content strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      author: "Mike Johnson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Marketing",
      tags: ["Marketing", "Strategy", "Digital"],
      views: "2.1k",
      comments: 32,
    },
    // ... (previous posts remain the same)
  ];

  const categories = [
    { name: "All", count: 42 },
    { name: "Technology", count: 15 },
    { name: "Design", count: 12 },
    { name: "Marketing", count: 8 },
    { name: "Development", count: 7 },
  ];

  const popularTags = [
    "Web Development",
    "UX Design",
    "Marketing",
    "Technology",
    "Innovation",
    "Mobile",
    "AI",
    "Cloud",
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
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, tutorials, and updates from our team of experts
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  className="rounded-full"
                >
                  {category.name}
                  <span className="ml-2 text-sm text-gray-400">({category.count})</span>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-purple-900/50 hover:border-purple-700/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="text-white font-medium">{post.author}</div>
                          <div className="text-sm text-gray-400">
                            {post.date} · {post.readTime}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views}
                          </span>
                          <span className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-0 h-auto"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-900/50">
                <h3 className="text-lg font-semibold mb-4 text-white">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-900/50">
                <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-900/50">
                <h3 className="text-lg font-semibold mb-4 text-white">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-purple-900/50 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-lg mb-8 text-gray-300">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-gray-900/50 border border-purple-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 flex-1 max-w-md"
              />
              <Button
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}