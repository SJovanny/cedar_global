// Translation types - Separate from implementation to avoid circular imports

export type Language = 'fr' | 'es' | 'en';

// Define the translation structure as an interface
export interface Translations {
    nav: {
        stock: string;
        conciergerie: string;
        pieces: string;
        about: string;
        myProject: string;
    };
    hero: {
        eyebrow: string;
        headline1: string;
        headline2: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
        scrollLabel: string;
    };
    brandTicker: {
        label: string;
    };
    services: {
        eyebrow: string;
        title: string;
        subtitle: string;
        import: { title: string; description: string };
        conciergerie: { title: string; description: string };
        parts: { title: string; description: string };
        network: { title: string; description: string };
    };
    showcase: {
        eyebrow: string;
        title: string;
        subtitle: string;
        tabVehicles: string;
        tabParts: string;
        searchCta: string;
        quoteCta: string;
        customSearchCta: string;
        customSearchPrompt: string;
        partsInfo: string;
        partsGuarantee: string;
        expertise: string;
        vehicles: {
            offroad: { title: string; subtitle: string; description: string; examples: string };
            prestige: { title: string; subtitle: string; description: string; examples: string };
            family: { title: string; subtitle: string; description: string; examples: string };
        };
        parts: {
            engine: { title: string; subtitle: string; description: string };
            body: { title: string; subtitle: string; description: string };
            brakes: { title: string; subtitle: string; description: string };
            electronics: { title: string; subtitle: string; description: string };
        };
    };
    form: {
        eyebrow: string;
        title: string;
        subtitle: string;
        step1: { title: string; subtitle: string };
        step2: { title: string; subtitle: string };
        step3: { title: string; subtitle: string };
        vehicleTypes: {
            suv: { label: string; description: string };
            sport: { label: string; description: string };
            berline: { label: string; description: string };
        };
        budgetRanges: {
            '20-40k': { label: string; description: string };
            '40-60k': { label: string; description: string };
            '60-100k': { label: string; description: string };
            '100k+': { label: string; description: string };
        };
        fields: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            phone: string;
            phonePlaceholder: string;
        };
        buttons: {
            continue: string;
            back: string;
            submit: string;
        };
        success: {
            title: string;
            message: string;
        };
    };
    footer: {
        cta: {
            eyebrow: string;
            title: string;
            subtitle: string;
            primary: string;
            secondary: string;
        };
        brand: {
            description: string;
        };
        links: {
            services: string;
            stock: string;
            conciergerie: string;
            parts: string;
            garages: string;
            info: string;
            legal: string;
            privacy: string;
            terms: string;
            contact: string;
        };
        copyright: string;
        tagline: string;
    };
}
