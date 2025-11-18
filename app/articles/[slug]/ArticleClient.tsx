"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Shield, Wifi, Zap, Server, Cloud, Activity } from "lucide-react";

function getGradientClass(type: string) {
  const gradients: Record<string, string> = {
    'gradient-shield': 'from-blue-500 to-purple-600',
    'gradient-lock': 'from-purple-500 to-pink-600',
    'gradient-network': 'from-cyan-500 to-blue-600',
    'gradient-firewall': 'from-red-500 to-orange-600',
    'gradient-monitor': 'from-green-500 to-teal-600',
    'gradient-audit': 'from-indigo-500 to-purple-600',
    'gradient-wave': 'from-cyan-400 to-blue-600',
    'gradient-spectrum': 'from-purple-500 to-pink-500',
    'gradient-location': 'from-green-500 to-cyan-500',
    'gradient-devices': 'from-orange-500 to-red-500',
    'gradient-speed': 'from-yellow-400 to-orange-500',
    'gradient-security': 'from-red-600 to-pink-600',
    'gradient-chart': 'from-blue-500 to-cyan-500',
    'gradient-priority': 'from-purple-600 to-blue-600',
    'gradient-flow': 'from-teal-500 to-green-500',
    'gradient-topology': 'from-indigo-500 to-blue-500',
    'gradient-hardware': 'from-gray-600 to-blue-600',
    'gradient-cloud': 'from-sky-400 to-blue-600',
    'gradient-bridge': 'from-cyan-500 to-purple-600',
    'gradient-code': 'from-green-600 to-teal-600',
    'gradient-balance': 'from-orange-500 to-yellow-500',
    'gradient-money': 'from-green-600 to-emerald-600',
    'gradient-layer2': 'from-blue-600 to-indigo-600',
    'gradient-layer3': 'from-purple-600 to-pink-600',
    'gradient-vlan': 'from-cyan-600 to-blue-600',
    'gradient-route': 'from-teal-600 to-green-600',
    'gradient-performance': 'from-orange-600 to-red-600',
    'gradient-deployment': 'from-indigo-600 to-purple-600',
    'gradient-health': 'from-green-500 to-emerald-600',
    'gradient-packet': 'from-blue-600 to-cyan-600',
    'gradient-test': 'from-yellow-500 to-orange-600',
    'gradient-alert': 'from-red-600 to-orange-600',
  };
  return gradients[type] || 'from-blue-500 to-cyan-500';
}

const iconMap: Record<string, any> = {
  Shield,
  Wifi,
  Zap,
  Server,
  Cloud,
  Activity
};

export default function ArticleClient({ article }: { article: any }) {
  const IconComponent = iconMap[article.iconName] || Shield;

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/articles">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Articles
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
              {article.category}
            </span>
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>

          <h1 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.sections.map((section: any, index: number) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-16"
            >
              {/* Visual Element */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <div className={`h-64 bg-gradient-to-br ${getGradientClass(section.image)} relative`}>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 border-4 border-white/30 rounded-2xl"
                    />
                    <motion.div
                      animate={{
                        rotate: [360, 0],
                        scale: [1, 0.9, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute w-24 h-24 border-4 border-white/40 rounded-full"
                    />
                  </motion.div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                {section.heading}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Article Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-200"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Ready to Upgrade Your Network?
            </h3>
            <p className="text-slate-600 mb-6">
              Explore our range of professional networking equipment
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Products
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
