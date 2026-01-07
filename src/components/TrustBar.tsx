"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Ship, Wrench } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const trustItems = [
    {
        icon: ShieldCheck,
        titleKey: "payment" as const,
    },
    {
        icon: Ship,
        titleKey: "logistics" as const,
    },
    {
        icon: Wrench,
        titleKey: "network" as const,
    },
];

export default function TrustBar() {
    const { t } = useTranslation();

    return (
        <section className="relative py-8 md:py-12 px-6 bg-background-secondary/50 border-y border-glass-border">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        const trustItem = t.trustBar.items[item.titleKey];
                        return (
                            <motion.div
                                key={item.titleKey}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 justify-center md:justify-start"
                            >
                                {/* Icon container */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-accent" />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-foreground font-semibold text-sm md:text-base">
                                        {trustItem.title}
                                    </h3>
                                    <p className="text-foreground-muted text-xs md:text-sm">
                                        {trustItem.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
