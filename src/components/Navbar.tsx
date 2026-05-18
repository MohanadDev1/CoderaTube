"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, Video } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 glass">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg"
          >
            <Video className="h-5 w-5" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight">Codera<span className="text-primary">Tube</span></span>
        </Link>

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center justify-center rounded-full p-2 hover:bg-secondary/80 transition-colors"
            title={language === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            <Globe className="h-5 w-5 mr-1 rtl:ml-1 rtl:mr-0" />
            <span className="text-sm font-medium uppercase">{language}</span>
          </button>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center rounded-full p-2 hover:bg-secondary/80 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <div className="hidden sm:block h-6 w-px bg-border mx-2"></div>
          
          <Link href="/login" className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
            {language === "en" ? "Sign In" : "تسجيل الدخول"}
          </Link>
          <Link href="/register" className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            {language === "en" ? "Get Started" : "ابدأ الآن"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
