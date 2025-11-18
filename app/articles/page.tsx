"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: "network-security-best-practices",
    title: "Network Security Best Practices for 2024",
    excerpt: "Discover the latest strategies to protect your enterprise network from evolving cyber threats and vulnerabilities.",
    image: "/articles/security.svg",
    category: "Security",
    readTime: "8 min read",
    date: "Nov 15, 2024"
  },
  {
    id: "wifi6e-guide",
    title: "Complete Guide to WiFi 6E Deployment",
    excerpt: "Learn how WiFi 6E technology can revolutionize your wireless infrastructure with expanded bandwidth and reduced interference.",
    image: "/articles/wifi.svg",
    category: "Wireless",
    readTime: "12 min read",
    date: "Nov 10, 2024"
  },
  {
    id: "network-performance-optimization",
    title: "Optimizing Network Performance at Scale",
    excerpt: "Expert techniques for maximizing throughput, minimizing latency, and ensuring consistent performance across large networks.",
    image: "/articles/performance.svg",
    category: "Performance",
    readTime: "10 min read",
    date: "Nov 5, 2024"
  },
  {
    id: "cloud-networking-fundamentals",
    title: "Cloud Networking Fundamentals",
    excerpt: "Understanding the principles of cloud-based networking and how to integrate it with your on-premises infrastructure.",
    image: "/articles/cloud.svg",
    category: "Cloud",
    readTime: "15 min read",
    date: "Oct 30, 2024"
  },
  {
    id: "switching-technologies-comparison",
    title: "Layer 2 vs Layer 3 Switching: A Deep Dive",
    excerpt: "Comprehensive comparison of switching technologies to help you make informed decisions for your network architecture.",
    image: "/articles/switching.svg",
    category: "Infrastructure",
    readTime: "9 min read",
    date: "Oct 25, 2024"
  },
  {
    id: "network-monitoring-tools",
    title: "Essential Network Monitoring Tools and Techniques",
    excerpt: "Explore the must-have monitoring solutions that keep your network running smoothly and help prevent downtime.",
    image: "/articles/monitoring.svg",
    category: "Management",
    readTime: "11 min read",
    date: "Oct 20, 2024"
  }
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h1 className="text-5xl font-bold mb-4">Knowledge Hub</h1>
            <p className="text-xl text-blue-100">
              Expert insights, guides, and best practices for network professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/articles/${article.id}`}>
                  <motion.article
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-black/20"
                        whileHover={{ opacity: 0 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-24 h-24 border-4 border-white/30 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-slate-900 hover:text-blue-600 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-slate-600 mb-4 flex-1">{article.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <span className="text-sm text-slate-500">{article.date}</span>
                        <motion.span
                          className="text-blue-600 font-semibold flex items-center gap-2"
                          whileHover={{ gap: "12px" }}
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
