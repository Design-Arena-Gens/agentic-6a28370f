"use client";

import { motion } from "framer-motion";
import { Server, Wifi, Network, Shield, Zap, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import NetworkAnimation from "@/components/NetworkAnimation";

export default function Home() {
  const products = [
    {
      title: "Enterprise Routers",
      description: "High-performance routing solutions for demanding business networks",
      icon: Network,
      price: "$2,499"
    },
    {
      title: "Managed Switches",
      description: "Intelligent switching infrastructure with advanced management capabilities",
      icon: Server,
      price: "$899"
    },
    {
      title: "Wireless Access Points",
      description: "Next-gen WiFi 6E solutions for seamless connectivity",
      icon: Wifi,
      price: "$449"
    },
    {
      title: "Security Appliances",
      description: "Comprehensive network security with firewall and intrusion prevention",
      icon: Shield,
      price: "$3,299"
    }
  ];

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for maximum throughput" },
    { icon: Shield, title: "Secure by Design", description: "Enterprise-grade security built-in" },
    { icon: Cloud, title: "Cloud Managed", description: "Monitor and manage from anywhere" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <NetworkAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Enterprise Networking Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              Power your business with cutting-edge network infrastructure
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2 glow-effect"
                >
                  Explore Products <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/articles">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-900/50 transition-colors"
                >
                  Read Articles
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-slate-900"
          >
            Why Choose NetConnect?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 animate-float" />
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-slate-50 network-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Products</h2>
            <p className="text-xl text-slate-600">Professional-grade equipment for every network need</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Network?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get in touch with our experts for personalized recommendations
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
