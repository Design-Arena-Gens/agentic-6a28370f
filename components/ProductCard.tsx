"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    icon: LucideIcon;
    price: string;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const IconComponent = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4"
      >
        <IconComponent className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-slate-900">{product.title}</h3>
      <p className="text-slate-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-600">{product.price}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}
