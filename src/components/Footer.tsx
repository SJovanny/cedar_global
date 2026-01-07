"use client";

import { motion } from "framer-motion";
import { Car, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useTranslation();

    const quickLinks = [
        { label: t.footer.links.stock, href: "#stock" },
        { label: t.footer.links.conciergerie, href: "#conciergerie" },
        { label: t.footer.links.parts, href: "#pieces" },
        { label: t.footer.links.garages, href: "#garages" },
    ];

    const legalLinks = [
        { label: t.footer.links.legal, href: "#" },
        { label: t.footer.links.privacy, href: "#" },
        { label: t.footer.links.terms, href: "#" },
    ];

    return (
        <footer className="bg-background-secondary border-t border-glass-border">
            {/* CTA Section */}
            <div className="py-20 px-6 border-b border-glass-border">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                        {t.footer.cta.eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        {t.footer.cta.title}
                    </h2>
                    <p className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
                        {t.footer.cta.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#conciergerie"
                            className="px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
                        >
                            {t.footer.cta.primary}
                        </a>
                        <a
                            href="tel:+596696000000"
                            className="px-8 py-4 border border-foreground-subtle/30 hover:border-foreground-muted text-foreground font-medium rounded-full transition-all duration-300 hover:bg-white/5 flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            {t.footer.cta.secondary}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Footer Content */}
            <div className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                                <Car className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-xl font-bold tracking-wide text-foreground">
                                CEDAR <span className="text-accent">GLOBAL</span>
                            </span>
                        </a>
                        <p className="text-foreground-muted text-sm mb-6">
                            {t.footer.brand.description}
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-background-tertiary hover:bg-accent/20 flex items-center justify-center transition-colors group"
                            >
                                <Instagram className="w-5 h-5 text-foreground-muted group-hover:text-accent transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-background-tertiary hover:bg-accent/20 flex items-center justify-center transition-colors group"
                            >
                                <Facebook className="w-5 h-5 text-foreground-muted group-hover:text-accent transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-background-tertiary hover:bg-accent/20 flex items-center justify-center transition-colors group"
                            >
                                <Linkedin className="w-5 h-5 text-foreground-muted group-hover:text-accent transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{t.footer.links.services}</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-foreground-muted hover:text-accent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{t.footer.links.info}</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-foreground-muted hover:text-accent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{t.footer.links.contact}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span className="text-foreground-muted text-sm">
                                    Fort-de-France, Martinique
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a
                                    href="tel:+596696000000"
                                    className="text-foreground-muted hover:text-accent transition-colors text-sm"
                                >
                                    +596 696 00 00 00
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a
                                    href="mailto:contact@cedarglobal.com"
                                    className="text-foreground-muted hover:text-accent transition-colors text-sm"
                                >
                                    contact@cedarglobal.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-6 px-6 border-t border-glass-border">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-foreground-subtle text-sm">
                        {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
                    </p>
                    <p className="text-foreground-subtle text-xs">
                        {t.footer.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
}
