import allKeyGroups from './translations.json';

type TranslationValue = string | { [lang: string]: string };
type TranslationObject = { [key: string]: TranslationValue | TranslationObject };

// Helper function to recursively get translations for a given locale.
function getTranslatedObject(obj: TranslationObject, lang: string): any {
    const newObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                if (
                    Object.prototype.hasOwnProperty.call(value, lang) ||
                    Object.prototype.hasOwnProperty.call(value, 'de')
                ) {
                    newObj[key] = (value as { [lang: string]: string })[lang] || (value as { [lang: string]: string })['de'];
                } else {
                    newObj[key] = getTranslatedObject(value as TranslationObject, lang);
                }
            }
        }
    }
    return newObj;
}

export const i18nUtils = {
    /**
     * Builds a nested dictionary of translated strings for a specific language.
     * @param locale - The language code (e.g., 'en' or 'de').
     * @returns A nested dictionary of translated strings.
     */
    getTranslations(locale: string): any {
        const lang = locale || 'de';
        return getTranslatedObject(allKeyGroups as TranslationObject, lang);
    },
};