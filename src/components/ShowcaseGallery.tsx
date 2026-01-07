"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Wrench, ChevronRight, ChevronLeft, Gauge, Shield, Zap, Mountain, Crown, Users, LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTranslation } from "@/contexts/LanguageContext";

type TabType = "vehicles" | "parts";

interface VehicleCategory {
    id: string;
    titleKey: keyof typeof import("@/lib/translations/fr").fr.showcase.vehicles;
    icon: LucideIcon;
    gradient: string;
    imageSrc: string;
}

interface PartCategory {
    id: string;
    titleKey: keyof typeof import("@/lib/translations/fr").fr.showcase.parts;
    icon: LucideIcon;
}

// Vehicle categories - Lifestyle approach
const vehicleCategories: VehicleCategory[] = [
    {
        id: "offroad",
        titleKey: "offroad",
        icon: Mountain,
        gradient: "from-emerald-900/40 to-background-secondary",
        imageSrc: "/showcase-offroad.png",
    },
    {
        id: "prestige",
        titleKey: "prestige",
        icon: Crown,
        gradient: "from-amber-900/40 to-background-secondary",
        imageSrc: "/showcase-prestige.png",
    },
    {
        id: "family",
        titleKey: "family",
        icon: Users,
        gradient: "from-blue-900/40 to-background-secondary",
        imageSrc: "/showcase-daily.png",
    },
];

// Parts categories - Technical expertise
const partsCategories: PartCategory[] = [
    { id: "engine", titleKey: "engine", icon: Gauge },
    { id: "body", titleKey: "body", icon: Car },
    { id: "brakes", titleKey: "brakes", icon: Shield },
    { id: "electronics", titleKey: "electronics", icon: Zap },
];

function VehicleCard({ category, index }: { category: VehicleCategory; index: number }) {
    const { t } = useTranslation();
    const Icon = category.icon;
    const vehicleData = t.showcase.vehicles[category.titleKey];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl border border-glass-border bg-background-secondary cursor-pointer hover:border-accent/30 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative h-[200px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${category.imageSrc})` }}
                />
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm border border-glass-border flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                </div>
                {/* CTA Button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40">
                    <a
                        href="#conciergerie"
                        className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-background font-semibold rounded-full transition-colors shadow-lg text-sm"
                    >
                        {t.showcase.searchCta}
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Text Content */}
            <div className="p-6">
                <p className="text-accent text-sm font-medium mb-1">{vehicleData.subtitle}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{vehicleData.title}</h3>
                <p className="text-foreground-muted text-sm mb-2">{vehicleData.description}</p>
                <p className="text-foreground-subtle text-xs italic">{vehicleData.examples}</p>
            </div>
        </motion.div>
    );
}

function PartsCarousel() {
    const { t } = useTranslation();
    const [, setScrollPosition] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const container = document.getElementById("parts-carousel");
        if (container) {
            const scrollAmount = direction === "left" ? -350 : 350;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setScrollPosition(container.scrollLeft + scrollAmount);
        }
    };

    return (
        <div className="relative">
            {/* Navigation Arrows */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-background-secondary border border-glass-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-accent/50 transition-colors hidden md:flex"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-background-secondary border border-glass-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-accent/50 transition-colors hidden md:flex"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Container */}
            <div
                id="parts-carousel"
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {partsCategories.map((part, index) => {
                    const Icon = part.icon;
                    const partData = t.showcase.parts[part.titleKey];
                    return (
                        <motion.div
                            key={part.id}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[300px] md:w-[340px] snap-start"
                        >
                            <div className="group h-full p-6 rounded-2xl border border-glass-border bg-background-secondary hover:border-accent/30 transition-all duration-300 cursor-pointer">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <Icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <span className="text-foreground-subtle text-xs uppercase tracking-wider">
                                        {t.showcase.expertise}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-1">{partData.title}</h3>
                                <p className="text-accent text-sm font-medium mb-3">{partData.subtitle}</p>
                                <p className="text-foreground-muted text-sm">{partData.description}</p>

                                {/* CTA */}
                                <div className="mt-6 pt-4 border-t border-glass-border">
                                    <a
                                        href="#conciergerie"
                                        className="flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-accent transition-colors group-hover:text-accent"
                                    >
                                        {t.showcase.quoteCta}
                                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
    );
}

export default function ShowcaseGallery() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<TabType>("vehicles");

    return (
        <section id="pieces" className="py-24 md:py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                        {t.showcase.eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        {t.showcase.title}
                    </h2>
                    <p className="text-foreground-muted max-w-2xl mx-auto">
                        {t.showcase.subtitle}
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1.5 rounded-full bg-background-secondary border border-glass-border">
                        <button
                            onClick={() => setActiveTab("vehicles")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                                activeTab === "vehicles"
                                    ? "bg-accent text-background"
                                    : "text-foreground-muted hover:text-foreground"
                            )}
                        >
                            <Car className="w-4 h-4" />
                            {t.showcase.tabVehicles}
                        </button>
                        <button
                            onClick={() => setActiveTab("parts")}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                                activeTab === "parts"
                                    ? "bg-accent text-background"
                                    : "text-foreground-muted hover:text-foreground"
                            )}
                        >
                            <Wrench className="w-4 h-4" />
                            {t.showcase.tabParts}
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "vehicles" ? (
                        <motion.div
                            key="vehicles"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {vehicleCategories.map((category, index) => (
                                    <VehicleCard key={category.id} category={category} index={index} />
                                ))}
                            </div>

                            {/* Bottom CTA - simplified */}
                            <div className="text-center mt-12">
                                <a
                                    href="#conciergerie"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background font-semibold rounded-full transition-all duration-300"
                                >
                                    {t.showcase.customSearchCta}
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="parts"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Single Parts Card */}
                            <div className="max-w-4xl mx-auto">
                                <div className="group p-8 md:p-10 rounded-3xl border border-glass-border bg-background-secondary hover:border-accent/30 transition-all duration-300">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                            <Wrench className="w-8 h-8 text-accent" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                        {t.showcase.partsCard.title}
                                    </h3>
                                    <p className="text-foreground-muted text-lg mb-6 max-w-2xl">
                                        {t.showcase.partsCard.description}
                                    </p>

                                    {/* Examples */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {t.showcase.partsCard.categories.map((part) => (
                                            <span key={part} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                                                {part}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Info */}
                                    <p className="text-foreground-muted text-sm mb-6">
                                        {t.showcase.partsInfo}
                                    </p>
                                    <p className="text-foreground-subtle text-xs mb-8">
                                        {t.showcase.partsGuarantee}
                                    </p>

                                    {/* CTA */}
                                    <a
                                        href="/order-parts"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-full transition-colors"
                                    >
                                        {t.showcase.partsCard.orderCta}
                                        <ChevronRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section >
    );
}
