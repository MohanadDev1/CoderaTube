"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Download, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function DownloaderBox() {
  const { language } = useLanguage();
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const t = {
    placeholder: language === "en" ? "Paste video URL from YouTube, TikTok, etc..." : "ضع رابط الفيديو من يوتيوب، تيك توك، الخ...",
    button: language === "en" ? "Fetch Video" : "جلب الفيديو",
    loading: language === "en" ? "Processing..." : "جاري المعالجة...",
    errorTitle: language === "en" ? "Error" : "خطأ",
    successTitle: language === "en" ? "Ready to download" : "جاهز للتحميل",
    downloadVideo: language === "en" ? "Download Video" : "تحميل الفيديو",
    downloadAudio: language === "en" ? "Download Audio" : "تحميل الصوت",
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsLoading(true);
    setError("");
    setResult(null);

    // Mocking an API call delay for the demonstration
    setTimeout(() => {
      if (!url.includes("http")) {
        setError(language === "en" ? "Please enter a valid URL." : "يرجى إدخال رابط صحيح.");
        setIsLoading(false);
        return;
      }
      setResult({
        title: "Sample Video Title",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        duration: "10:32",
        platform: "YouTube",
        formats: [
          { quality: "1080p", type: "MP4", size: "120MB" },
          { quality: "720p", type: "MP4", size: "65MB" },
          { quality: "320kbps", type: "MP3", size: "8MB" },
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>
        
        <form onSubmit={handleFetch} className="relative z-10 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 rtl:pl-0 rtl:pr-4 pointer-events-none">
              <Link2 className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t.placeholder}
              className="w-full h-14 pl-12 rtl:pl-4 rtl:pr-12 bg-background/50 border-2 border-border/50 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-lg"
              dir="ltr"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !url}
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2 rtl:ml-2 rtl:mr-0" />
                {t.loading}
              </>
            ) : (
              <>
                <Download className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" />
                {t.button}
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-destructive/10 text-destructive rounded-xl flex items-center"
            >
              <AlertCircle className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 pt-8 border-t border-border/50"
            >
              <div className="flex items-center gap-2 mb-6 text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                <h3 className="text-xl font-semibold">{t.successTitle}</h3>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative shadow-lg group">
                  <img src={result.thumbnail} alt={result.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-primary text-white px-2 py-1 rounded w-max mb-2">
                      {result.platform}
                    </span>
                    <h4 className="font-bold line-clamp-2">{result.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{result.duration}</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                  {result.formats.map((format: any, index: number) => (
                    <button
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:border-primary hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-bold text-lg">{format.quality}</span>
                        <span className="text-xs text-muted-foreground uppercase">{format.type}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">{format.size}</span>
                        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Download className="h-5 w-5" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
