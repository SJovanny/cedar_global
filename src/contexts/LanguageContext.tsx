"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, Language, TranslationKeys } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "cedar-global-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("fr");
    const [isHydrated, setIsHydrated] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (stored && translations[stored]) {
            setLanguageState(stored);
        }
        setIsHydrated(true);
    }, []);

    // Persist language choice
    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }, []);

    // Get current translations
    const t = translations[language];

    // Prevent hydration mismatch
    if (!isHydrated) {
        return (
            <LanguageContext.Provider value={{ language: "fr", setLanguage, t: translations.fr }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

// Alias for convenience
export const useTranslation = useLanguage;
