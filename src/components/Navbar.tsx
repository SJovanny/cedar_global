"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTranslation } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: t.nav.stock, href: "#stock" },
        { label: t.nav.conciergerie, href: "#conciergerie" },
        { label: t.nav.pieces, href: "#pieces" },
        { label: t.nav.about, href: "#apropos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <Car className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-xl font-bold tracking-wide text-foreground">
                            CEDAR <span className="text-accent">GLOBAL</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-medium text-foreground-muted hover:text-foreground transition-colors group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Right side: Language Selector + CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSelector variant="desktop" />
                        <a
                            href="#conciergerie"
                            className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-background font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                        >
                            {t.nav.myProject}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 pt-20 glass-strong md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-10">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            {/* Language Selector for Mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4"
                            >
                                <LanguageSelector variant="mobile" />
                            </motion.div>

                            <motion.a
                                href="#conciergerie"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-8 py-3 bg-accent hover:bg-accent-hover text-background font-semibold rounded-full transition-colors"
                            >
                                {t.nav.myProject}
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
