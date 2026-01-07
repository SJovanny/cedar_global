// Translation exports - Single source of truth (DRY)
import { fr } from './fr';
import { es } from './es';
import { en } from './en';
import type { Language, Translations } from './types';

export type { Language, Translations };
export type TranslationKeys = Translations;

export const translations: Record<Language, Translations> = {
    fr,
    es,
    en,
};

export const languageNames: Record<Language, string> = {
    fr: 'Français',
    es: 'Español',
    en: 'English',
};

export const languageFlags: Record<Language, string> = {
    fr: '🇫🇷',
    es: '🇪🇸',
    en: '🇬🇧',
};

export { fr, es, en };
