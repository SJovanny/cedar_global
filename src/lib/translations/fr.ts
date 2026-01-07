import type { Translations } from './types';

// French translations - Source language
export const fr: Translations = {
    // Navbar
    nav: {
        services: 'Nos Services',
        orderParts: 'Commander Pièces',
        conciergerie: 'Conciergerie',
        stock: 'Stock',
        pieces: 'Pièces',
        about: 'À Propos',
        myProject: 'Mon Projet',
    },

    // Hero Section
    hero: {
        eyebrow: 'Importation Premium • Europe → Caraïbes',
        headline1: "L'Europe à portée de main.",
        headline2: 'Le rêve dans votre garage.',
        subtitle: "Importation sur-mesure de véhicules et pièces détachées européennes vers les Caraïbes. Un service d'exception, une confiance absolue.",
        ctaPrimary: 'Trouver mon véhicule',
        ctaSecondary: 'Découvrir le stock',
        scrollLabel: 'Découvrir',
    },

    // Brand Ticker
    brandTicker: {
        label: 'Les marques que nous importons',
    },

    // Trust Bar
    trustBar: {
        items: {
            payment: {
                title: 'Paiement Sécurisé',
                description: 'Transactions 100% sécurisées et garanties',
            },
            logistics: {
                title: 'Logistique Complète',
                description: 'Du port européen à votre porte',
            },
            network: {
                title: 'Réseau Certifié',
                description: 'Garages partenaires aux Caraïbes',
            },
        },
    },

    // Services Grid
    services: {
        eyebrow: 'Nos Services',
        title: 'Une expertise complète',
        subtitle: 'De la recherche à la livraison, nous vous accompagnons dans toutes les étapes de votre projet automobile.',
        import: {
            title: 'Import Véhicule',
            description: 'Des véhicules européens premium sélectionnés avec soin. BMW, Mercedes, Audi, Porsche et bien plus.',
        },
        export: {
            title: 'Export Véhicule',
            description: 'Exportez votre véhicule depuis les Caraïbes vers l\'Europe ou d\'autres destinations.',
        },
        parts: {
            title: 'Pièces Détachées',
            description: "Pièces d'origine et de haute qualité pour TOUS types de véhicules. Européens, japonais, américains - nous trouvons ce qu'il vous faut.",
        },
        search: {
            title: 'Recherche Véhicule',
            description: 'Un service sur-mesure pour trouver le véhicule de vos rêves. Nous cherchons, vous choisissez.',
        },
    },

    // Showcase Gallery
    showcase: {
        eyebrow: 'Showroom Digital',
        title: 'Notre expertise, votre inspiration',
        subtitle: "Explorez nos univers pour trouver l'inspiration. On ne vend pas ce qu'on a, on trouve ce que vous voulez.",
        tabVehicles: 'Nos Gammes Véhicules',
        tabParts: 'Expertise Pièces',
        searchCta: 'Lancer une recherche',
        quoteCta: 'Demander un devis',
        customSearchCta: 'Configurer ma recherche personnalisée',
        customSearchPrompt: '',
        partsInfo: '💡 Toutes nos pièces sont sourcées directement auprès de fournisseurs européens agréés.',
        partsGuarantee: 'Origine constructeur ou équivalent haute qualité • Garantie incluse',
        expertise: 'Expertise',
        vehicles: {
            offroad: {
                title: 'Island Off-Road',
                subtitle: 'Aventure & Terrain',
                description: "Pickups robustes et 4x4 légendaires pour explorer chaque recoin de l'île.",
                examples: 'Defender, Classe G, Raptor, Hilux',
            },
            prestige: {
                title: 'Prestige & Sport',
                subtitle: 'Performance & Élégance',
                description: 'Coupés et cabriolets pour les passionnés de conduite et de sensations.',
                examples: 'Porsche 911, AMG GT, Audi RS, BMW M',
            },
            family: {
                title: 'Daily Car',
                subtitle: 'Confort & Polyvalence',
                description: 'Berlines et SUV spacieux pour le quotidien, la famille ou les affaires.',
                examples: 'Toyota C-HR, Hyundai i10, Nissan Qashqai, Kia Sportage',
            },
        },
        parts: {
            engine: {
                title: 'Moteurs Complets',
                subtitle: 'Blocs & Transmissions',
                description: 'Moteurs reconditionnés ou neufs, boîtes de vitesses, groupes propulseurs.',
            },
            body: {
                title: 'Kits Carrosserie',
                subtitle: 'Style & Aérodynamique',
                description: "Pare-chocs, ailerons, kits élargisseurs, pièces de carrosserie d'origine.",
            },
            brakes: {
                title: 'Freinage Performance',
                subtitle: 'Sécurité & Puissance',
                description: 'Disques céramique, étriers haute performance, kits complets Big Brake.',
            },
            electronics: {
                title: 'Électronique',
                subtitle: 'Technologie & Confort',
                description: 'Calculateurs, écrans, systèmes multimédia, modules de confort.',
            },
        },
        partsCard: {
            title: 'Toutes vos pièces détachées',
            description: 'Nous importons TOUTES les pièces détachées pour TOUS les types de véhicules : européens, japonais, américains.',
            categories: ['Moteurs', 'Transmissions', 'Freins', 'Carrosserie', 'Électronique', 'Suspension', 'Échappement', 'Climatisation'],
            orderCta: 'Commander mes pièces',
        },
    },

    // Conciergerie Form
    form: {
        eyebrow: 'La Conciergerie',
        title: 'Trouvez votre véhicule idéal',
        subtitle: 'Répondez à quelques questions et recevez une sélection personnalisée de véhicules correspondant à vos critères.',
        step1: {
            title: 'Quel type de véhicule cherchez-vous ?',
            subtitle: 'Sélectionnez la catégorie qui correspond à vos besoins',
        },
        step2: {
            title: 'Quel est votre budget estimé ?',
            subtitle: "Prix du véhicule hors frais d'importation",
        },
        step3: {
            title: 'Vos coordonnées',
            subtitle: 'Pour recevoir votre sélection personnalisée',
        },
        vehicleTypes: {
            suv: { label: 'SUV', description: 'Familial & Polyvalent' },
            sport: { label: 'Sportive', description: 'Performance & Plaisir' },
            berline: { label: 'Berline', description: 'Élégance & Confort' },
        },
        budgetRanges: {
            '20-40k': { label: '10 000€ - 40 000€', description: 'Entrée de gamme premium' },
            '40-60k': { label: '40 000€ - 60 000€', description: 'Milieu de gamme' },
            '60-100k': { label: '60 000€ - 100 000€', description: 'Haut de gamme' },
            '100k+': { label: '100 000€+', description: 'Prestige & Collection' },
        },
        fields: {
            name: 'Nom complet',
            namePlaceholder: 'Jean Dupont',
            email: 'Email',
            emailPlaceholder: 'jean@exemple.com',
            phone: 'Téléphone',
            phonePlaceholder: '+596 6 12 34 56 78',
        },
        buttons: {
            continue: 'Continuer',
            back: 'Retour',
            submit: 'Recevoir ma sélection',
        },
        success: {
            title: 'Demande envoyée !',
            message: 'Notre équipe va préparer une sélection personnalisée et vous contacter sous 24h.',
        },
    },

    // Footer
    footer: {
        cta: {
            eyebrow: 'Prêt à démarrer ?',
            title: 'Votre véhicule de rêve vous attend',
            subtitle: "Contactez-nous dès aujourd'hui et découvrez comment nous pouvons vous accompagner dans votre projet d'importation.",
            primary: 'Démarrer mon projet',
            secondary: 'Nous appeler',
        },
        brand: {
            description: 'Importation premium de véhicules et pièces détachées européennes vers les Caraïbes depuis 2020.',
        },
        links: {
            services: 'Nos Services',
            stock: 'Stock Véhicules',
            conciergerie: 'La Conciergerie',
            parts: 'Pièces Détachées',
            garages: 'Nos Garages',
            info: 'Informations',
            legal: 'Mentions Légales',
            privacy: 'Politique de Confidentialité',
            terms: 'CGV',
            contact: 'Contact',
        },
        copyright: '© {year} Cedar Global. Tous droits réservés.',
        tagline: 'Fait avec passion pour les Caraïbes 🌴',
    },
    partsOrder: {
        pageTitle: 'Commander mes pièces',
        pageSubtitle: 'Remplissez le formulaire et recevez votre devis sous 24-48h',
        back: 'Retour',
        vehicleSection: 'Informations véhicule',
        brand: 'Marque',
        brandPlaceholder: 'Ex: BMW, Mercedes, Toyota...',
        model: 'Modèle',
        modelPlaceholder: 'Ex: X5, Classe E, Corolla...',
        year: 'Année',
        yearPlaceholder: 'Ex: 2020',
        vin: 'Numéro VIN (optionnel)',
        vinPlaceholder: '17 caractères',
        partsSection: 'Pièces recherchées',
        partsDescription: 'Décrivez les pièces dont vous avez besoin',
        partsPlaceholder: 'Ex: Disques de frein avant, plaquettes, étrier droit...',
        urgency: 'Urgence',
        urgencyNormal: 'Normal (2-3 semaines)',
        urgencyUrgent: 'Urgent (1 semaine)',
        urgencyExpress: 'Express (3-5 jours)',
        contactSection: 'Vos coordonnées',
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        phone: 'Téléphone',
        phonePlaceholder: '+596 ...',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        message: 'Message complémentaire',
        messagePlaceholder: 'Informations supplémentaires...',
        submit: 'Envoyer ma demande',
        submitting: 'Envoi en cours...',
        info: '💡 Nous vous répondrons sous 24-48h avec un devis détaillé. Paiement sécurisé à la commande.',
        successTitle: 'Demande envoyée !',
        successMessage: 'Nous avons bien reçu votre demande de pièces détachées. Notre équipe vous contactera sous 24-48h avec un devis personnalisé.',
        backToHome: "Retour à l'accueil",
    },
};
