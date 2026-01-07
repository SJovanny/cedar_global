import type { Translations } from './types';

// Spanish translations
export const es: Translations = {
    // Navbar
    nav: {
        services: 'Nuestros Servicios',
        orderParts: 'Pedir Repuestos',
        conciergerie: 'Conserjería',
        stock: 'Stock',
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

    // Trust Bar
    trustBar: {
        items: {
            payment: {
                title: 'Pago Seguro',
                description: 'Transacciones 100% seguras y garantizadas',
            },
            logistics: {
                title: 'Logística Completa',
                description: 'Del puerto europeo a tu puerta',
            },
            network: {
                title: 'Red Certificada',
                description: 'Talleres asociados en el Caribe',
            },
        },
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
        export: {
            title: 'Exportación de Vehículos',
            description: 'Exporta tu vehículo desde el Caribe hacia Europa u otros destinos.',
        },
        parts: {
            title: 'Repuestos',
            description: 'Piezas originales y de alta calidad para TODOS los tipos de vehículos. Europeos, japoneses, americanos - encontramos lo que necesitas.',
        },
        search: {
            title: 'Búsqueda de Vehículos',
            description: 'Un servicio personalizado para encontrar el vehículo de tus sueños. Nosotros buscamos, tú eliges.',
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
        customSearchPrompt: '',
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
                title: 'Daily Car',
                subtitle: 'Confort & Versatilidad',
                description: 'Berlinas y SUV espaciosos para el uso diario, la familia o los negocios.',
                examples: 'Toyota C-HR, Hyundai i10, Nissan Qashqai, Kia Sportage',
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
        partsCard: {
            title: 'Todos Sus Repuestos',
            description: 'Importamos TODOS los repuestos para TODOS los tipos de vehículos: europeos, japoneses, americanos.',
            categories: ['Motores', 'Transmisiones', 'Frenos', 'Carrocería', 'Electrónica', 'Suspensión', 'Escape', 'Climatización'],
            orderCta: 'Pedir Mis Repuestos',
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
            '20-40k': { label: '10.000€ - 40.000€', description: 'Gama de entrada premium' },
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
    partsOrder: {
        pageTitle: 'Pedir Mis Repuestos',
        pageSubtitle: 'Complete el formulario y reciba su presupuesto en 24-48h',
        back: 'Volver',
        vehicleSection: 'Información del Vehículo',
        brand: 'Marca',
        brandPlaceholder: 'Ej: BMW, Mercedes, Toyota...',
        model: 'Modelo',
        modelPlaceholder: 'Ej: X5, Clase E, Corolla...',
        year: 'Año',
        yearPlaceholder: 'Ej: 2020',
        vin: 'Número VIN (opcional)',
        vinPlaceholder: '17 caracteres',
        partsSection: 'Repuestos Buscados',
        partsDescription: 'Describa los repuestos que necesita',
        partsPlaceholder: 'Ej: Discos de freno delanteros, pastillas, pinza derecha...',
        urgency: 'Urgencia',
        urgencyNormal: 'Normal (2-3 semanas)',
        urgencyUrgent: 'Urgente (1 semana)',
        urgencyExpress: 'Express (3-5 días)',
        contactSection: 'Sus Datos de Contacto',
        name: 'Nombre Completo',
        namePlaceholder: 'Su nombre',
        phone: 'Teléfono',
        phonePlaceholder: '+1 ...',
        email: 'Correo Electrónico',
        emailPlaceholder: 'su@email.com',
        message: 'Mensaje Adicional',
        messagePlaceholder: 'Información adicional...',
        submit: 'Enviar Mi Solicitud',
        submitting: 'Enviando...',
        info: '💡 Responderemos en 24-48h con un presupuesto detallado. Pago seguro al realizar el pedido.',
        successTitle: '¡Solicitud Enviada!',
        successMessage: 'Hemos recibido su solicitud de repuestos. Nuestro equipo se pondrá en contacto en 24-48h con un presupuesto personalizado.',
        backToHome: 'Volver al Inicio',
    },
};
