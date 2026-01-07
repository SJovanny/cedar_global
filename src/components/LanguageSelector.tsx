"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language, languageNames } from "@/lib/translations";
import { cn } from "@/lib/cn";

// SVG Flag components for better Windows compatibility
const FlagFR = () => (
    <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 900 600">
        <rect width="300" height="600" fill="#002654" />
        <rect x="300" width="300" height="600" fill="#FFFFFF" />
        <rect x="600" width="300" height="600" fill="#CE1126" />
    </svg>
);

const FlagES = () => (
    <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 750 500">
        <rect width="750" height="500" fill="#AA151B" />
        <rect y="125" width="750" height="250" fill="#F1BF00" />
    </svg>
);

const FlagGB = () => (
    <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 60 30">
        <rect fill="#012169" width="60" height="30" />
        <path fill="#FFF" d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
        <path fill="#C8102E" d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        <path fill="#FFF" d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="10" />
        <path fill="#C8102E" d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
);

const languageFlags: Record<Language, React.ReactNode> = {
    fr: <FlagFR />,
    es: <FlagES />,
    en: <FlagGB />,
};

interface LanguageSelectorProps {
    variant?: "desktop" | "mobile";
}

export default function LanguageSelector({ variant = "desktop" }: LanguageSelectorProps) {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: Language[] = ["fr", "es", "en"];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    if (variant === "mobile") {
        return (
            <div className="flex items-center justify-center gap-3">
                {languages.map((lang) => (
                    <button
                        key={lang}
                        onClick={() => handleSelect(lang)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            language === lang
                                ? "bg-accent text-background"
                                : "text-foreground-muted hover:text-foreground border border-glass-border hover:border-foreground-subtle/50"
                        )}
                    >
                        {languageFlags[lang]}
                        <span>{lang.toUpperCase()}</span>
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300",
                    "border border-glass-border hover:border-foreground-subtle/50",
                    "text-foreground-muted hover:text-foreground",
                    isOpen && "border-accent/50 text-foreground"
                )}
            >
                <Globe className="w-4 h-4" />
                <span className="flex items-center gap-1.5 text-sm font-medium">
                    {languageFlags[language]}
                    {language.toUpperCase()}
                </span>
                <ChevronDown
                    className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 min-w-[160px] py-2 rounded-xl glass-strong border border-glass-border shadow-xl z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleSelect(lang)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                                    language === lang
                                        ? "bg-accent/10 text-accent"
                                        : "text-foreground-muted hover:text-foreground hover:bg-white/5"
                                )}
                            >
                                {languageFlags[lang]}
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">{languageNames[lang]}</span>
                                    <span className="text-xs text-foreground-subtle">{lang.toUpperCase()}</span>
                                </div>
                                {language === lang && (
                                    <motion.div
                                        layoutId="active-lang"
                                        className="ml-auto w-2 h-2 rounded-full bg-accent"
                                    />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
