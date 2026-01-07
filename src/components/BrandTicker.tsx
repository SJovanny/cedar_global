"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/LanguageContext";

const brands = [
    { name: "AUDI", logo: "Audi" },
    { name: "BMW", logo: "BMW" },
    { name: "MERCEDES", logo: "Mercedes-Benz" },
    { name: "PORSCHE", logo: "Porsche" },
    { name: "VOLKSWAGEN", logo: "Volkswagen" },
    { name: "AUDI", logo: "Audi" },
    { name: "BMW", logo: "BMW" },
    { name: "MERCEDES", logo: "Mercedes-Benz" },
    { name: "PORSCHE", logo: "Porsche" },
    { name: "VOLKSWAGEN", logo: "Volkswagen" },
];

export default function BrandTicker() {
    const { t } = useTranslation();

    return (
        <section className="py-16 overflow-hidden border-y border-glass-border bg-background-secondary/30">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-foreground-subtle text-sm uppercase tracking-widest"
                >
                    {t.brandTicker.label}
                </motion.p>
            </div>

            {/* Ticker Container */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary/30 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary/30 to-transparent z-10 pointer-events-none" />

                {/* Scrolling content */}
                <div className="flex animate-ticker">
                    {/* First set */}
                    {brands.map((brand, index) => (
                        <div
                            key={`brand-1-${index}`}
                            className="flex-shrink-0 px-8 md:px-12 group cursor-pointer"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-foreground-subtle/40 group-hover:text-foreground transition-colors duration-300 tracking-wider">
                                {brand.logo}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {brands.map((brand, index) => (
                        <div
                            key={`brand-2-${index}`}
                            className="flex-shrink-0 px-8 md:px-12 group cursor-pointer"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-foreground-subtle/40 group-hover:text-foreground transition-colors duration-300 tracking-wider">
                                {brand.logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
