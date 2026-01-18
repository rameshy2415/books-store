import React from "react";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-amber-900 to-amber-950 text-amber-50">
      {/* Main Footer Content */}
      {/* <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-amber-200 text-sm">
                  123 Book Street, Literary District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400 shrink-0" />
                <span className="text-amber-200 text-sm">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400 hrink-0" />
                <span className="text-amber-200 text-sm">
                  hello@pageturner.com
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-amber-200 mb-2 text-center">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-amber-800 border border-amber-700 text-amber-50 placeholder-amber-400 text-sm focus:outline-none focus:border-amber-500"
                />
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center items-center mb-5">
            <p className="text-amber-300 text-sm">
              © 2026 PageTurner. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6">
            <a
              href="#"
              className="text-amber-300 hover:text-amber-50 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-amber-300 hover:text-amber-50 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-amber-300 hover:text-amber-50 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
