"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Truck, Zap, ChevronRight, ChevronLeft, Check, User, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTranslation } from "@/contexts/LanguageContext";

type VehicleType = "suv" | "sport" | "berline" | null;
type BudgetRange = "20-40k" | "40-60k" | "60-100k" | "100k+" | null;

interface StepProps {
    onNext: () => void;
    onPrev?: () => void;
}

const vehicleTypeIcons = {
    suv: Truck,
    sport: Zap,
    berline: Car,
} as const;

const budgetRangeIds = ["20-40k", "40-60k", "60-100k", "100k+"] as const;

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
    return (
        <div className="flex items-center justify-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        index === currentStep
                            ? "w-8 bg-accent"
                            : index < currentStep
                                ? "w-2 bg-accent/50"
                                : "w-2 bg-foreground-subtle/30"
                    )}
                />
            ))}
        </div>
    );
}

function Step1VehicleType({
    selected,
    onSelect,
    onNext,
}: StepProps & { selected: VehicleType; onSelect: (type: VehicleType) => void }) {
    const { t } = useTranslation();
    const vehicleTypes = ["suv", "sport", "berline"] as const;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t.form.step1.title}
                </h3>
                <p className="text-foreground-muted">
                    {t.form.step1.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {vehicleTypes.map((typeId) => {
                    const Icon = vehicleTypeIcons[typeId];
                    const isSelected = selected === typeId;
                    const typeData = t.form.vehicleTypes[typeId];
                    return (
                        <button
                            key={typeId}
                            onClick={() => onSelect(typeId)}
                            className={cn(
                                "p-6 rounded-2xl border transition-all duration-300 text-left group",
                                isSelected
                                    ? "border-accent bg-accent/10"
                                    : "border-glass-border bg-background-secondary hover:border-foreground-subtle/50"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                                    isSelected ? "bg-accent/20" : "bg-background-tertiary group-hover:bg-accent/10"
                                )}
                            >
                                <Icon
                                    className={cn(
                                        "w-6 h-6 transition-colors",
                                        isSelected ? "text-accent" : "text-foreground-muted group-hover:text-accent"
                                    )}
                                />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-1">{typeData.label}</h4>
                            <p className="text-sm text-foreground-muted">{typeData.description}</p>
                        </button>
                    );
                })}
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    disabled={!selected}
                    className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300",
                        selected
                            ? "bg-accent hover:bg-accent-hover text-background"
                            : "bg-foreground-subtle/20 text-foreground-subtle cursor-not-allowed"
                    )}
                >
                    {t.form.buttons.continue}
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function Step2Budget({
    selected,
    onSelect,
    onNext,
    onPrev,
}: StepProps & { selected: BudgetRange; onSelect: (budget: BudgetRange) => void }) {
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t.form.step2.title}
                </h3>
                <p className="text-foreground-muted">
                    {t.form.step2.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {budgetRangeIds.map((budgetId) => {
                    const isSelected = selected === budgetId;
                    const budgetData = t.form.budgetRanges[budgetId];
                    return (
                        <button
                            key={budgetId}
                            onClick={() => onSelect(budgetId)}
                            className={cn(
                                "p-5 rounded-2xl border transition-all duration-300 text-left",
                                isSelected
                                    ? "border-accent bg-accent/10"
                                    : "border-glass-border bg-background-secondary hover:border-foreground-subtle/50"
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">{budgetData.label}</h4>
                                    <p className="text-sm text-foreground-muted">{budgetData.description}</p>
                                </div>
                                {isSelected && (
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                        <Check className="w-4 h-4 text-background" />
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onPrev}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-glass-border hover:border-foreground-subtle/50 text-foreground transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                    {t.form.buttons.back}
                </button>
                <button
                    onClick={onNext}
                    disabled={!selected}
                    className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300",
                        selected
                            ? "bg-accent hover:bg-accent-hover text-background"
                            : "bg-foreground-subtle/20 text-foreground-subtle cursor-not-allowed"
                    )}
                >
                    {t.form.buttons.continue}
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function Step3Contact({ onPrev }: StepProps) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t.form.success.title}</h3>
                <p className="text-foreground-muted max-w-md mx-auto">
                    {t.form.success.message}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t.form.step3.title}
                </h3>
                <p className="text-foreground-muted">
                    {t.form.step3.subtitle}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-muted flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {t.form.fields.name}
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-glass-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-foreground transition-colors"
                        placeholder={t.form.fields.namePlaceholder}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-muted flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {t.form.fields.email}
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-glass-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-foreground transition-colors"
                        placeholder={t.form.fields.emailPlaceholder}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground-muted flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {t.form.fields.phone}
                    </label>
                    <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-glass-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-foreground transition-colors"
                        placeholder={t.form.fields.phonePlaceholder}
                    />
                </div>

                <div className="flex justify-between pt-4">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-glass-border hover:border-foreground-subtle/50 text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        {t.form.buttons.back}
                    </button>
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-accent hover:bg-accent-hover text-background transition-colors"
                    >
                        {t.form.buttons.submit}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default function ConciergerieForm() {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [vehicleType, setVehicleType] = useState<VehicleType>(null);
    const [budget, setBudget] = useState<BudgetRange>(null);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 2));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    return (
        <section id="conciergerie" className="py-24 md:py-32 px-6 bg-background-secondary/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                        {t.form.eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        {t.form.title}
                    </h2>
                    <p className="text-foreground-muted max-w-2xl mx-auto">
                        {t.form.subtitle}
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-strong rounded-3xl p-6 md:p-10"
                >
                    <StepIndicator currentStep={currentStep} totalSteps={3} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentStep === 0 && (
                                <Step1VehicleType
                                    selected={vehicleType}
                                    onSelect={setVehicleType}
                                    onNext={nextStep}
                                />
                            )}
                            {currentStep === 1 && (
                                <Step2Budget
                                    selected={budget}
                                    onSelect={setBudget}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            )}
                            {currentStep === 2 && <Step3Contact onNext={() => { }} onPrev={prevStep} />}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
