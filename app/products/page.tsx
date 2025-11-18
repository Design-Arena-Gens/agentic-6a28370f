"use client";

import { motion } from "framer-motion";
import { Server, Wifi, Network, Shield, Router, Cable, Cpu, HardDrive } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Routers & Gateways",
      products: [
        { title: "Enterprise Core Router", description: "High-performance routing for large networks with advanced BGP support", icon: Network, price: "$4,999" },
        { title: "Branch Office Router", description: "Secure SD-WAN enabled routing for remote locations", icon: Router, price: "$1,299" },
        { title: "Edge Gateway", description: "Multi-WAN gateway with integrated security features", icon: Shield, price: "$2,499" },
      ]
    },
    {
      title: "Switches",
      products: [
        { title: "48-Port Managed Switch", description: "Layer 3 switching with full routing capabilities and PoE+", icon: Server, price: "$2,199" },
        { title: "24-Port Access Switch", description: "Layer 2 managed switch perfect for access layer deployment", icon: Cable, price: "$899" },
        { title: "10G Core Switch", description: "High-density 10 Gigabit switching for data center applications", icon: Cpu, price: "$8,999" },
      ]
    },
    {
      title: "Wireless Solutions",
      products: [
        { title: "WiFi 6E Access Point", description: "Tri-band wireless with 6 GHz support for maximum performance", icon: Wifi, price: "$649" },
        { title: "Outdoor AP", description: "Weather-resistant access point for outdoor deployments", icon: Wifi, price: "$549" },
        { title: "Wireless Controller", description: "Centralized management for up to 500 access points", icon: Server, price: "$3,499" },
      ]
    },
    {
      title: "Security Appliances",
      products: [
        { title: "Next-Gen Firewall", description: "Advanced threat protection with deep packet inspection", icon: Shield, price: "$5,499" },
        { title: "IPS/IDS System", description: "Intrusion prevention and detection for network security", icon: Shield, price: "$3,999" },
        { title: "VPN Concentrator", description: "High-performance VPN for secure remote access", icon: Network, price: "$2,799" },
      ]
    },
  ];

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
            <HardDrive className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h1 className="text-5xl font-bold mb-4">Network Equipment</h1>
            <p className="text-xl text-blue-100">
              Professional-grade solutions for every networking need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-10 text-slate-900"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <ProductCard
                    key={productIndex}
                    product={product}
                    index={productIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Need Help Choosing?</h2>
            <p className="text-xl mb-8 text-slate-600">
              Our network specialists are here to help you find the perfect solution
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors glow-effect"
            >
              Contact Our Experts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
