"use client";

import { motion } from "framer-motion";
import { Search, Wrench, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTranslation } from "@/contexts/LanguageContext";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
    hasImage?: boolean;
    imageGradient?: string;
    delay?: number;
}

function ServiceCard({
    title,
    description,
    icon,
    className,
    hasImage = false,
    imageGradient,
    delay = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-glass-border transition-all duration-500",
                "hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10",
                hasImage ? "glass" : "glass-strong",
                className
            )}
        >
            {/* Background gradient for image cards */}
            {hasImage && (
                <div
                    className={cn(
                        "absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500",
                        imageGradient
                    )}
                />
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                {/* Icon for non-image cards */}
                {icon && (
                    <div className="mb-auto">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            {icon}
                        </div>
                    </div>
                )}

                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-foreground-muted text-sm md:text-base">
                        {description}
                    </p>
                </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-accent/10 blur-3xl" />
            </div>
        </motion.div>
    );
}

export default function ServicesGrid() {
    const { t } = useTranslation();

    return (
        <section id="stock" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                        {t.services.eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        {t.services.title}
                    </h2>
                    <p className="text-foreground-muted max-w-2xl mx-auto">
                        {t.services.subtitle}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Large Card - Import Véhicule */}
                    <ServiceCard
                        title={t.services.import.title}
                        description={t.services.import.description}
                        hasImage
                        imageGradient="bg-gradient-to-t from-background via-background/80 to-transparent"
                        className="lg:row-span-2 min-h-[300px] lg:min-h-[500px]"
                        delay={0.1}
                    />

                    {/* La Conciergerie */}
                    <ServiceCard
                        title={t.services.conciergerie.title}
                        description={t.services.conciergerie.description}
                        icon={<Search className="w-6 h-6 text-accent" />}
                        className="min-h-[220px]"
                        delay={0.2}
                    />

                    {/* Pièces Détachées */}
                    <ServiceCard
                        title={t.services.parts.title}
                        description={t.services.parts.description}
                        icon={<Wrench className="w-6 h-6 text-accent" />}
                        className="min-h-[220px]"
                        delay={0.3}
                    />

                    {/* Réseau Garages */}
                    <ServiceCard
                        title={t.services.network.title}
                        description={t.services.network.description}
                        icon={<MapPin className="w-6 h-6 text-accent" />}
                        className="md:col-span-2 lg:col-span-2 min-h-[220px]"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
