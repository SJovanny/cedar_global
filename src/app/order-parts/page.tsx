"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, ChevronLeft, Send, Car, Package, User, Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

export default function CommanderPiecesPage() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        // Vehicle info
        vehicleBrand: "",
        vehicleModel: "",
        vehicleYear: "",
        vehicleVin: "",
        // Parts info
        partsNeeded: "",
        urgency: "normal",
        // Contact info
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-background pt-24 pb-16 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center"
                        >
                            <Package className="w-10 h-10 text-accent" />
                        </motion.div>
                        <h1 className="text-3xl font-bold text-foreground mb-4">
                            {t.partsOrder.successTitle}
                        </h1>
                        <p className="text-foreground-muted mb-8">
                            {t.partsOrder.successMessage}
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-background font-semibold rounded-full transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            {t.partsOrder.backToHome}
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/#pieces"
                        className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        {t.partsOrder.back}
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                                <Wrench className="w-7 h-7 text-accent" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                                    {t.partsOrder.pageTitle}
                                </h1>
                                <p className="text-foreground-muted">
                                    {t.partsOrder.pageSubtitle}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        {/* Vehicle Information */}
                        <div className="p-6 md:p-8 rounded-3xl border border-glass-border bg-background-secondary">
                            <div className="flex items-center gap-3 mb-6">
                                <Car className="w-5 h-5 text-accent" />
                                <h2 className="text-xl font-semibold text-foreground">
                                    {t.partsOrder.vehicleSection}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        {t.partsOrder.brand} *
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleBrand"
                                        value={formData.vehicleBrand}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.partsOrder.brandPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        {t.partsOrder.model} *
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleModel"
                                        value={formData.vehicleModel}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.partsOrder.modelPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        {t.partsOrder.year}
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleYear"
                                        value={formData.vehicleYear}
                                        onChange={handleChange}
                                        placeholder={t.partsOrder.yearPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        {t.partsOrder.vin}
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleVin"
                                        value={formData.vehicleVin}
                                        onChange={handleChange}
                                        placeholder={t.partsOrder.vinPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Parts Information */}
                        <div className="p-6 md:p-8 rounded-3xl border border-glass-border bg-background-secondary">
                            <div className="flex items-center gap-3 mb-6">
                                <Package className="w-5 h-5 text-accent" />
                                <h2 className="text-xl font-semibold text-foreground">
                                    {t.partsOrder.partsSection}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        {t.partsOrder.partsDescription} *
                                    </label>
                                    <textarea
                                        name="partsNeeded"
                                        value={formData.partsNeeded}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder={t.partsOrder.partsPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        {t.partsOrder.urgency}
                                    </label>
                                    <select
                                        name="urgency"
                                        value={formData.urgency}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                                    >
                                        <option value="normal">{t.partsOrder.urgencyNormal}</option>
                                        <option value="urgent">{t.partsOrder.urgencyUrgent}</option>
                                        <option value="express">{t.partsOrder.urgencyExpress}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="p-6 md:p-8 rounded-3xl border border-glass-border bg-background-secondary">
                            <div className="flex items-center gap-3 mb-6">
                                <User className="w-5 h-5 text-accent" />
                                <h2 className="text-xl font-semibold text-foreground">
                                    {t.partsOrder.contactSection}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        <span className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            {t.partsOrder.name} *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.partsOrder.namePlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        <span className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            {t.partsOrder.phone} *
                                        </span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.partsOrder.phonePlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        <span className="flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            {t.partsOrder.email} *
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.partsOrder.emailPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                                        <span className="flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4" />
                                            {t.partsOrder.message}
                                        </span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder={t.partsOrder.messagePlaceholder}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-glass-border text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-background font-semibold rounded-full transition-colors text-lg"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                        {t.partsOrder.submitting}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        {t.partsOrder.submit}
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>

                    {/* Info */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center text-foreground-subtle text-sm mt-8"
                    >
                        {t.partsOrder.info}
                    </motion.p>
                </div>
            </main>
        </>
    );
}
