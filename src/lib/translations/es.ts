import type { Translations } from './types';

// Spanish translations
export const es: Translations = {
    // Navbar
    nav: {
        stock: 'Stock',
        conciergerie: 'La Conserjería',
        pieces: 'Piezas',
        about: 'Nosotros',
        myProject: 'Mi Proyecto',
    },

    // Hero Section
    hero: {
        eyebrow: 'Importación Premium • Europa → Caribe',
        headline1: 'Europa al alcance de tu mano.',
        headline2: 'El sueño en tu garaje.',
        subtitle: 'Importación personalizada de vehículos y repuestos europeos hacia el Caribe. Un servicio excepcional, una confianza absoluta.',
        ctaPrimary: 'Encontrar mi vehículo',
        ctaSecondary: 'Descubrir el stock',
        scrollLabel: 'Descubrir',
    },

    // Brand Ticker
    brandTicker: {
        label: 'Las marcas que importamos',
    },

    // Services Grid
    services: {
        eyebrow: 'Nuestros Servicios',
        title: 'Una experiencia completa',
        subtitle: 'Desde la búsqueda hasta la entrega, te acompañamos en cada etapa de tu proyecto automotriz.',
        import: {
            title: 'Importación de Vehículos',
            description: 'Vehículos europeos premium seleccionados con cuidado. BMW, Mercedes, Audi, Porsche y mucho más.',
        },
        conciergerie: {
            title: 'La Conserjería',
            description: 'Un servicio personalizado para encontrar el vehículo de tus sueños. Nosotros buscamos, tú eliges.',
        },
        parts: {
            title: 'Repuestos',
            description: 'Piezas originales y de alta calidad importadas directamente de Europa.',
        },
        network: {
            title: 'Red de Talleres',
            description: 'Socios de confianza para el mantenimiento y reparación de tu vehículo.',
        },
    },

    // Showcase Gallery
    showcase: {
        eyebrow: 'Showroom Digital',
        title: 'Nuestra experiencia, tu inspiración',
        subtitle: 'Explora nuestros universos para encontrar inspiración. No vendemos lo que tenemos, encontramos lo que quieres.',
        tabVehicles: 'Nuestras Gamas de Vehículos',
        tabParts: 'Experiencia en Repuestos',
        searchCta: 'Iniciar una búsqueda',
        quoteCta: 'Solicitar un presupuesto',
        customSearchCta: 'Configurar mi búsqueda personalizada',
        customSearchPrompt: '¿Tienes un modelo específico en mente?',
        partsInfo: '💡 Todas nuestras piezas provienen directamente de proveedores europeos autorizados.',
        partsGuarantee: 'Origen fabricante o equivalente de alta calidad • Garantía incluida',
        expertise: 'Experiencia',
        vehicles: {
            offroad: {
                title: 'Island Off-Road',
                subtitle: 'Aventura & Terreno',
                description: 'Pickups robustos y 4x4 legendarios para explorar cada rincón de la isla.',
                examples: 'Defender, Clase G, Raptor, Hilux',
            },
            prestige: {
                title: 'Prestigio & Deporte',
                subtitle: 'Rendimiento & Elegancia',
                description: 'Coupés y convertibles para los apasionados de la conducción y las sensaciones.',
                examples: 'Porsche 911, AMG GT, Audi RS, BMW M',
            },
            family: {
                title: 'Familia & Negocios',
                subtitle: 'Confort & Versatilidad',
                description: 'SUV de alta gama espaciosos para la familia o los negocios.',
                examples: 'Range Rover, BMW X5, Audi Q8, GLE',
            },
        },
        parts: {
            engine: {
                title: 'Motores Completos',
                subtitle: 'Bloques & Transmisiones',
                description: 'Motores reacondicionados o nuevos, cajas de cambios, grupos propulsores.',
            },
            body: {
                title: 'Kits de Carrocería',
                subtitle: 'Estilo & Aerodinámica',
                description: 'Parachoques, alerones, kits de ensanche, piezas de carrocería originales.',
            },
            brakes: {
                title: 'Frenos de Alto Rendimiento',
                subtitle: 'Seguridad & Potencia',
                description: 'Discos cerámicos, pinzas de alto rendimiento, kits completos Big Brake.',
            },
            electronics: {
                title: 'Electrónica',
                subtitle: 'Tecnología & Confort',
                description: 'Calculadores, pantallas, sistemas multimedia, módulos de confort.',
            },
        },
    },

    // Conciergerie Form
    form: {
        eyebrow: 'La Conserjería',
        title: 'Encuentra tu vehículo ideal',
        subtitle: 'Responde algunas preguntas y recibe una selección personalizada de vehículos que coincidan con tus criterios.',
        step1: {
            title: '¿Qué tipo de vehículo buscas?',
            subtitle: 'Selecciona la categoría que corresponda a tus necesidades',
        },
        step2: {
            title: '¿Cuál es tu presupuesto estimado?',
            subtitle: 'Precio del vehículo sin costos de importación',
        },
        step3: {
            title: 'Tus datos de contacto',
            subtitle: 'Para recibir tu selección personalizada',
        },
        vehicleTypes: {
            suv: { label: 'SUV', description: 'Familiar y Versátil' },
            sport: { label: 'Deportivo', description: 'Rendimiento y Placer' },
            berline: { label: 'Sedán', description: 'Elegancia y Confort' },
        },
        budgetRanges: {
            '20-40k': { label: '20.000€ - 40.000€', description: 'Gama de entrada premium' },
            '40-60k': { label: '40.000€ - 60.000€', description: 'Gama media' },
            '60-100k': { label: '60.000€ - 100.000€', description: 'Gama alta' },
            '100k+': { label: '100.000€+', description: 'Prestigio y Colección' },
        },
        fields: {
            name: 'Nombre completo',
            namePlaceholder: 'Juan García',
            email: 'Correo electrónico',
            emailPlaceholder: 'juan@ejemplo.com',
            phone: 'Teléfono',
            phonePlaceholder: '+596 6 12 34 56 78',
        },
        buttons: {
            continue: 'Continuar',
            back: 'Volver',
            submit: 'Recibir mi selección',
        },
        success: {
            title: '¡Solicitud enviada!',
            message: 'Nuestro equipo preparará una selección personalizada y te contactará en 24h.',
        },
    },

    // Footer
    footer: {
        cta: {
            eyebrow: '¿Listo para empezar?',
            title: 'Tu vehículo soñado te espera',
            subtitle: 'Contáctanos hoy y descubre cómo podemos acompañarte en tu proyecto de importación.',
            primary: 'Comenzar mi proyecto',
            secondary: 'Llamarnos',
        },
        brand: {
            description: 'Importación premium de vehículos y repuestos europeos hacia el Caribe desde 2020.',
        },
        links: {
            services: 'Nuestros Servicios',
            stock: 'Stock de Vehículos',
            conciergerie: 'La Conserjería',
            parts: 'Repuestos',
            garages: 'Nuestros Talleres',
            info: 'Información',
            legal: 'Aviso Legal',
            privacy: 'Política de Privacidad',
            terms: 'Términos y Condiciones',
            contact: 'Contacto',
        },
        copyright: '© {year} Cedar Global. Todos los derechos reservados.',
        tagline: 'Hecho con pasión para el Caribe 🌴',
    },
};
