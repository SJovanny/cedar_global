"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0">
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://res.cloudinary.com/ddvabefhf/video/upload/v1766302566/range_rover_hero_gopqd0.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Eyebrow text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-accent font-medium text-sm md:text-base uppercase tracking-widest mb-6"
                >
                    {t.hero.eyebrow}
                </motion.p>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                    <span className="text-foreground">{t.hero.headline1}</span>
                    <br />
                    <span className="text-gradient">{t.hero.headline2}</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10"
                >
                    {t.hero.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#conciergerie"
                        className="px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
                    >
                        {t.hero.ctaPrimary}
                    </a>
                    <a
                        href="#stock"
                        className="px-8 py-4 border border-foreground-subtle/30 hover:border-foreground-muted text-foreground font-medium rounded-full transition-all duration-300 hover:bg-white/5"
                    >
                        {t.hero.ctaSecondary}
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-foreground-subtle"
                >
                    <span className="text-xs uppercase tracking-widest">{t.hero.scrollLabel}</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
