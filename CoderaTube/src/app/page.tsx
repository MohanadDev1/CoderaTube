"use client";

import { Navbar } from "@/components/Navbar";
import { DownloaderBox } from "@/components/DownloaderBox";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Globe2, Film, Music, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { language } = useLanguage();

  const isEn = language === "en";

  const t = {
    heroTitle1: isEn ? "Download the Web" : "حمّل من الويب",
    heroTitle2: isEn ? "Without Limits" : "بلا حدود",
    heroSub: isEn ? "CoderaTube is your premium tool to download high-quality videos from YouTube, TikTok, Twitter, Instagram and 1000+ other platforms instantly. Free, fast, and secure." : "CoderaTube هي أداتك الاحترافية لتحميل مقاطع الفيديو بجودة عالية من يوتيوب، تيك توك، تويتر، انستجرام وأكثر من 1000 منصة أخرى فوراً. مجاني، سريع، وآمن.",
    featuresTitle: isEn ? "Why Choose CoderaTube?" : "لماذا تختار CoderaTube؟",
    platformsTitle: isEn ? "Supported Platforms" : "المنصات المدعومة",
    footerText: isEn ? "© 2026 CoderaTube. All rights reserved for personal fair-use." : "© 2026 CoderaTube. جميع الحقوق محفوظة للاستخدام الشخصي العادل."
  };

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: isEn ? "Lightning Fast" : "سرعة البرق",
      desc: isEn ? "Process and download videos in seconds with our optimized edge network." : "قم بمعالجة وتحميل مقاطع الفيديو في ثوانٍ باستخدام شبكتنا المحسنة."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: isEn ? "100% Secure" : "آمن 100٪",
      desc: isEn ? "No malware, no spam, and complete privacy. We don't track your downloads." : "لا برامج ضارة، لا رسائل مزعجة، وخصوصية تامة. نحن لا نتتبع تحميلاتك."
    },
    {
      icon: <Film className="h-6 w-6 text-purple-500" />,
      title: isEn ? "Up to 4K Quality" : "جودة تصل إلى 4K",
      desc: isEn ? "Get exactly what you want. We support pulling the highest available resolution." : "احصل على ما تريد بالضبط. نحن ندعم سحب أعلى دقة متاحة."
    },
    {
      icon: <Music className="h-6 w-6 text-blue-500" />,
      title: isEn ? "Audio Extraction" : "استخراج الصوت",
      desc: isEn ? "Easily convert any video into high-quality MP3 format with one click." : "حول أي فيديو إلى صيغة MP3 عالية الجودة بنقرة واحدة بسهولة."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-pink-500" />,
      title: isEn ? "Mobile Ready" : "متوافق مع الجوال",
      desc: isEn ? "Download on the go. Works perfectly on iOS, Android, and tablets as a PWA." : "حمل أثناء التنقل. يعمل بشكل مثالي على iOS وأندرويد والأجهزة اللوحية."
    },
    {
      icon: <Globe2 className="h-6 w-6 text-teal-500" />,
      title: isEn ? "1000+ Sites" : "1000+ موقع",
      desc: isEn ? "Supports almost any video platform, social network, and streaming site." : "يدعم تقريباً أي منصة فيديو، شبكة اجتماعية، وموقع بث."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 -z-10 h-full w-full bg-background overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] h-[40%] w-[40%] rounded-full bg-purple-500/20 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] h-[40%] w-[40%] rounded-full bg-blue-500/20 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Hero Section */}
        <section className="w-full px-4 pt-20 pb-32 text-center max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 rtl:ml-2 rtl:mr-0 animate-pulse"></span>
              {isEn ? "CoderaTube v1.0 is live" : "CoderaTube v1.0 متاح الآن"}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              {t.heroTitle1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                {t.heroTitle2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.heroSub}
            </p>
          </motion.div>

          {/* Main Downloader Component */}
          <DownloaderBox />
        </section>

        {/* Features Section */}
        <section className="w-full py-24 bg-secondary/30 border-y border-border/50 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">{t.featuresTitle}</h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-background shadow-inner flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-10 border-t border-border mt-auto relative z-10 bg-background/50 backdrop-blur-md">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Film className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Codera<span className="text-primary">Tube</span></span>
            </div>
            <p className="text-sm text-muted-foreground">{t.footerText}</p>
            <div className="flex gap-4 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">{isEn ? "Terms" : "الشروط"}</a>
              <a href="#" className="hover:text-primary transition-colors">{isEn ? "Privacy" : "الخصوصية"}</a>
              <a href="#" className="hover:text-primary transition-colors">{isEn ? "API" : "واجهة برمجية"}</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
