"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Network, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">NetConnect</span>
            </div>
            <p className="text-slate-400">
              Your trusted partner for enterprise networking solutions and equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Routers & Gateways</li>
              <li>Switches</li>
              <li>Wireless Solutions</li>
              <li>Security Appliances</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@netconnect.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 NetConnect Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
