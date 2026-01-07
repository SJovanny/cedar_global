import type { Translations } from './types';

// English translations
export const en: Translations = {
    // Navbar
    nav: {
        services: 'Our Services',
        orderParts: 'Order Parts',
        conciergerie: 'Concierge',
        stock: 'Stock',
        pieces: 'Parts',
        about: 'About Us',
        myProject: 'My Project',
    },

    // Hero Section
    hero: {
        eyebrow: 'Premium Import • Europe → Caribbean',
        headline1: 'Europe within your reach.',
        headline2: 'The dream in your garage.',
        subtitle: 'Bespoke import of European vehicles and spare parts to the Caribbean. Exceptional service, absolute trust.',
        ctaPrimary: 'Find my vehicle',
        ctaSecondary: 'Discover the stock',
        scrollLabel: 'Discover',
    },

    // Brand Ticker
    brandTicker: {
        label: 'The brands we import',
    },

    // Trust Bar
    trustBar: {
        items: {
            payment: {
                title: 'Secure Payment',
                description: '100% secure and guaranteed transactions',
            },
            logistics: {
                title: 'Complete Logistics',
                description: 'From European port to your door',
            },
            network: {
                title: 'Certified Network',
                description: 'Partner garages in the Caribbean',
            },
        },
    },

    // Services Grid
    services: {
        eyebrow: 'Our Services',
        title: 'Complete expertise',
        subtitle: 'From search to delivery, we support you through every step of your automotive project.',
        import: {
            title: 'Vehicle Import',
            description: 'Carefully selected premium European vehicles. BMW, Mercedes, Audi, Porsche and much more.',
        },
        export: {
            title: 'Vehicle Export',
            description: 'Export your vehicle from the Caribbean to Europe or other destinations.',
        },
        parts: {
            title: 'Spare Parts',
            description: 'Original and high-quality parts for ALL types of vehicles. European, Japanese, American - we find what you need.',
        },
        search: {
            title: 'Vehicle Search',
            description: 'A bespoke service to find the vehicle of your dreams. We search, you choose.',
        },
    },

    // Showcase Gallery
    showcase: {
        eyebrow: 'Digital Showroom',
        title: 'Our expertise, your inspiration',
        subtitle: "Explore our universes to find inspiration. We don't sell what we have, we find what you want.",
        tabVehicles: 'Our Vehicle Ranges',
        tabParts: 'Parts Expertise',
        searchCta: 'Start a search',
        quoteCta: 'Request a quote',
        customSearchCta: 'Configure my custom search',
        customSearchPrompt: '',
        partsInfo: '💡 All our parts are sourced directly from authorized European suppliers.',
        partsGuarantee: 'OEM or high-quality equivalent • Warranty included',
        expertise: 'Expertise',
        vehicles: {
            offroad: {
                title: 'Island Off-Road',
                subtitle: 'Adventure & Terrain',
                description: 'Robust pickups and legendary 4x4s to explore every corner of the island.',
                examples: 'Defender, G-Class, Raptor, Hilux',
            },
            prestige: {
                title: 'Prestige & Sport',
                subtitle: 'Performance & Elegance',
                description: 'Coupés and convertibles for driving enthusiasts seeking thrills.',
                examples: 'Porsche 911, AMG GT, Audi RS, BMW M',
            },
            family: {
                title: 'Daily Car',
                subtitle: 'Comfort & Versatility',
                description: 'Spacious sedans and SUVs for daily driving, family or business.',
                examples: 'Toyota C-HR, Hyundai i10, Nissan Qashqai, Kia Sportage',
            },
        },
        parts: {
            engine: {
                title: 'Complete Engines',
                subtitle: 'Blocks & Transmissions',
                description: 'Reconditioned or new engines, gearboxes, powertrains.',
            },
            body: {
                title: 'Body Kits',
                subtitle: 'Style & Aerodynamics',
                description: 'Bumpers, spoilers, widebody kits, original body parts.',
            },
            brakes: {
                title: 'Performance Brakes',
                subtitle: 'Safety & Power',
                description: 'Ceramic discs, high-performance calipers, complete Big Brake kits.',
            },
            electronics: {
                title: 'Electronics',
                subtitle: 'Technology & Comfort',
                description: 'ECUs, displays, multimedia systems, comfort modules.',
            },
        },
    },

    // Conciergerie Form
    form: {
        eyebrow: 'Concierge Service',
        title: 'Find your ideal vehicle',
        subtitle: 'Answer a few questions and receive a personalized selection of vehicles matching your criteria.',
        step1: {
            title: 'What type of vehicle are you looking for?',
            subtitle: 'Select the category that matches your needs',
        },
        step2: {
            title: 'What is your estimated budget?',
            subtitle: 'Vehicle price excluding import fees',
        },
        step3: {
            title: 'Your contact details',
            subtitle: 'To receive your personalized selection',
        },
        vehicleTypes: {
            suv: { label: 'SUV', description: 'Family & Versatile' },
            sport: { label: 'Sports Car', description: 'Performance & Pleasure' },
            berline: { label: 'Sedan', description: 'Elegance & Comfort' },
        },
        budgetRanges: {
            '20-40k': { label: '€10,000 - €40,000', description: 'Premium entry level' },
            '40-60k': { label: '€40,000 - €60,000', description: 'Mid-range' },
            '60-100k': { label: '€60,000 - €100,000', description: 'High-end' },
            '100k+': { label: '€100,000+', description: 'Prestige & Collection' },
        },
        fields: {
            name: 'Full name',
            namePlaceholder: 'John Smith',
            email: 'Email',
            emailPlaceholder: 'john@example.com',
            phone: 'Phone',
            phonePlaceholder: '+596 6 12 34 56 78',
        },
        buttons: {
            continue: 'Continue',
            back: 'Back',
            submit: 'Receive my selection',
        },
        success: {
            title: 'Request sent!',
            message: 'Our team will prepare a personalized selection and contact you within 24 hours.',
        },
    },

    // Footer
    footer: {
        cta: {
            eyebrow: 'Ready to start?',
            title: 'Your dream vehicle awaits',
            subtitle: 'Contact us today and discover how we can support you in your import project.',
            primary: 'Start my project',
            secondary: 'Call us',
        },
        brand: {
            description: 'Premium import of European vehicles and spare parts to the Caribbean since 2020.',
        },
        links: {
            services: 'Our Services',
            stock: 'Vehicle Stock',
            conciergerie: 'Concierge Service',
            parts: 'Spare Parts',
            garages: 'Our Garages',
            info: 'Information',
            legal: 'Legal Notice',
            privacy: 'Privacy Policy',
            terms: 'Terms & Conditions',
            contact: 'Contact',
        },
        copyright: '© {year} Cedar Global. All rights reserved.',
        tagline: 'Made with passion for the Caribbean 🌴',
    },
    partsOrder: {
        pageTitle: 'Order My Parts',
        pageSubtitle: 'Fill out the form and receive your quote within 24-48h',
        back: 'Back',
        vehicleSection: 'Vehicle Information',
        brand: 'Brand',
        brandPlaceholder: 'Ex: BMW, Mercedes, Toyota...',
        model: 'Model',
        modelPlaceholder: 'Ex: X5, E-Class, Corolla...',
        year: 'Year',
        yearPlaceholder: 'Ex: 2020',
        vin: 'VIN Number (optional)',
        vinPlaceholder: '17 characters',
        partsSection: 'Parts Needed',
        partsDescription: 'Describe the parts you need',
        partsPlaceholder: 'Ex: Front brake discs, pads, right caliper...',
        urgency: 'Urgency',
        urgencyNormal: 'Normal (2-3 weeks)',
        urgencyUrgent: 'Urgent (1 week)',
        urgencyExpress: 'Express (3-5 days)',
        contactSection: 'Your Contact Details',
        name: 'Full Name',
        namePlaceholder: 'Your name',
        phone: 'Phone',
        phonePlaceholder: '+1 ...',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Additional Message',
        messagePlaceholder: 'Additional information...',
        submit: 'Send My Request',
        submitting: 'Sending...',
        info: '💡 We will respond within 24-48h with a detailed quote. Secure payment upon order.',
        successTitle: 'Request Sent!',
        successMessage: 'We have received your spare parts request. Our team will contact you within 24-48h with a personalized quote.',
        backToHome: 'Back to Home',
    },
};
