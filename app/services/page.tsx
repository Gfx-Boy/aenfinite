"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Search,
  Code,
  Palette,
  ShoppingCart,
  Server,
  Shield,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites that engage users and drive conversions",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "CMS Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter",
      ],
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies for growth",
      features: [
        "SEO Services",
        "Social Media Marketing",
        "Content Marketing",
        "PPC Campaigns",
      ],
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions for your business",
      features: [
        "Enterprise Software",
        "Cloud Solutions",
        "API Development",
        "Legacy System Updates",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user experiences",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Online stores that drive sales and growth",
      features: [
        "Shopping Cart Development",
        "Payment Integration",
        "Inventory Management",
        "Order Processing",
      ],
    },
    {
      icon: Server,
      title: "Cloud Services",
      description: "Scalable cloud solutions for your applications",
      features: [
        "AWS Integration",
        "Azure Services",
        "Cloud Migration",
        "DevOps",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets and data",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Security Training",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-purple-900/50 hover:border-purple-700/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}