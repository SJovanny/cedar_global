# 📂 CEDAR GLOBAL - PROJECT REQUIREMENTS & ROADMAP

**Mission :** Créer une plateforme web premium pour l'import-export de véhicules et pièces détachées (Europe → Caraïbes).
**Objectif Visuel :** "Cinématique", "Dark Mode", "Confiance", "Sur-mesure" (éviter le look template IA générique).
**Objectif UX :** Guider l'utilisateur vers le service de conciergerie (Lead Generation) et inspirer via un showroom virtuel.

---

## 🛠️ 1. TECH STACK (LE MOTEUR)

* **Framework :** Next.js 16 (App Router)
* **Langage :** TypeScript
* **Styling :** Tailwind CSS
* **Animations :** Framer Motion (pour les transitions fluides)
* **Icônes :** Lucide React
* **Composants UI (Base) :** Shadcn/UI (optionnel, pour les inputs/selects propres)
* **CMS (Gestion Contenu) :** Sanity.io (pour gérer les gammes de véhicules/pièces sans coder)
* **Déploiement :** Vercel

---

## 🎨 2. DESIGN SYSTEM (GUIDELINES)

* **Palette de Couleurs :**
    * `Background` : #0a0a0a (Anthracite très profond, pas noir pur)
    * `Surface` : #171717 (Gris sombre pour les cartes)
    * `Accent` : #f59e0b (Ambre/Or) ou #3b82f6 (Bleu électrique) - *À définir selon le logo*
    * `Text` : #fafafa (Blanc cassé) & #a1a1aa (Gris neutre)
* **Typographie :** Sans-serif moderne et suisse (ex: `Inter`, `Geist` ou `Satoshi`).
* **Vibe :** Espaces aérés, bordures fines (1px), effets de verre (glassmorphism), photos haute définition.

---

## 📅 3. WALKTHROUGH & ÉTAPES DE DÉVELOPPEMENT

Coche les cases au fur et à mesure (`[x]`).

### PHASE 1 : Initialisation
- [x] **Setup Next.js** : `npx create-next-app@latest cedar_global --typescript --tailwind --eslint` (App Router).
- [x] **Installation Libs** : `npm install framer-motion lucide-react clsx tailwind-merge`.
- [x] **Config Tailwind** : Couleurs personnalisées configurées via `globals.css`.
- [x] **Font Setup** : Police configurée dans `layout.tsx`.

### PHASE 2 : Structure & Navigation
- [x] **Composant Navbar** : Sticky, flou (backdrop-blur), Logo à gauche, Liens centrés, CTA + sélecteur de langue.
- [x] **Composant Footer** : Liens légaux, colonnes de navigation, rappel de la confiance.

### PHASE 3 : Page d'Accueil (L'Effet Wow)
- [x] **Hero Section** : Background avec overlay, Titre H1 impactant, Double CTA.
- [ ] **Trust Bar** : Bandeau sous le hero avec 3 arguments (Paiement sécurisé, Logistique, Réseau Garages).
- [x] **Brand Ticker** : Défilement infini horizontal des logos constructeurs avec animation.

### PHASE 4 : Services & Showroom (Le Cœur)
- [x] **Bento Grid Services** : Grille asymétrique (CSS Grid) présentant les 4 piliers :
    1. Import Véhicules (Grande carte)
    2. Conciergerie (Carte moyenne)
    3. Pièces Détachées (Petite carte)
    4. Réseau Partenaires (Petite carte)
- [x] **Showcase Gallery (Showroom)** : Section avec système d'onglets (Tabs).
    * *Tab 1 (Véhicules)* : Cartes "Lookbook" par usage (Off-road, Prestige, Famille).
    * *Tab 2 (Pièces)* : Carrousel de catégories techniques (Moteurs, Carrosserie, Freinage, Électronique).
    * [ ] **TODO** : Ajouter des images au carrousel "Expertise Pièces".

### PHASE 5 : Conversion (Conciergerie)
- [x] **Wizard Form** : Formulaire interactif étape par étape (pas un long formulaire statique).
    * Step 1: Type de besoin (Véhicule ou Pièce ?)
    * Step 2: Budget & Préférences
    * Step 3: Coordonnées
- [ ] **Call to Action Final** : Section immersive en bas de page avant le footer.

### BONUS : Fonctionnalités ajoutées
- [x] **Internationalisation (i18n)** : Support FR/EN avec `LanguageContext` et `LanguageSelector`.

---

## 🤖 4. PROMPTS REPOSITORY (COPIER/COLLER DANS GEMINI)

Utilise ces prompts pour générer le code et les idées visuelles.

### 💻 PROMPTS POUR LE CODE (GÉNÉRATION)

**Prompt : Setup & Design System**
> "Agis comme un expert UI/UX et dev Next.js 16. Aide-moi à configurer le `tailwind.config.ts` pour un site automobile de luxe 'Dark Mode'. Je veux des nuances de gris profonds (slate-900 à 950) et une couleur d'accent Or/Ambre. Configure aussi la typographie de base."

**Prompt : Hero Section**
> "Crée un composant `HeroSection.tsx` responsive. Background vidéo full-screen avec overlay sombre. Titre centré 'L'Excellence Automobile, de l'Europe aux Caraïbes'. Utilise Framer Motion pour faire apparaître le texte doucement. Boutons modernes avec effets de hover."

**Prompt : Bento Grid (Services)**
> "Génère une section `ServicesGrid.tsx` utilisant CSS Grid et Tailwind. Je veux un layout style 'Bento' (Apple style). Une grande case à gauche 'Import', une case moyenne à droite 'Conciergerie', et deux petites en dessous 'Pièces' et 'Garages'. Ajoute des effets de survol (scale up léger, bordure qui brille)."

**Prompt : Showcase Gallery (Showroom)**
> "Crée un composant `ShowroomTabs.tsx`. Il doit avoir deux onglets en haut : 'Nos Univers Véhicules' et 'Expertise Pièces'. Le contenu change sans rechargement de page (State React).
> - Dans 'Véhicules', affiche une grille de cartes inspirantes (SUV, Sport, 4x4) avec un bouton 'Configurer' au survol.
> - Dans 'Pièces', affiche une liste horizontale de catégories techniques."

**Prompt : Formulaire Conciergerie**
> "Crée un composant `ConciergeWizard.tsx`. C'est un formulaire multi-étapes (Step 1, 2, 3). Design propre, pas de bordures par défaut, juste des lignes en bas (underline inputs) ou des champs gris très sombre. Barre de progression en haut."

### 📸 PROMPTS POUR LES VISUELS (MIDJOURNEY / DALL-E)

**Hero Background :**
> "Cinematic wide shot of a luxury SUV being loaded into a shipping container at a European port at sunset. Industrial but clean atmosphere. 8k, moody lighting."

**Showroom - SUV Category :**
> "Three luxury SUVs (Range Rover, Audi Q8, BMW X5) parked in a modern dark concrete studio. Rim lighting, reflections on the floor. Premium automotive brochure style."

**Showroom - Sport Category :**
> "A Porsche 911 driving fast on a tropical coastal road with palm trees. Motion blur. Sunny, vibrant, luxury lifestyle."

**Showroom - Pièces (Knolling) :**
> "Knolling photography of high performance car parts: turbo, ceramic brakes, piston. Laid out neatly on a dark matte table. Technical, clean, engineering aesthetic."