export type Translation = {
    en: string;
    bg: string;
};

export type Addon = {
    name: Translation;
    priceEur: number;
};

export type MenuItem = {
    id: string;
    name: Translation;
    weight?: string;
    priceEur: number;
    description?: Translation;
    allergenIds?: number[];
    addons?: Addon[];
    tags?: string[];
};

export type MenuSection = {
    id: string;
    label: Translation;
    items: MenuItem[];
    buildYourOwnNote?: Translation;
};

export type Allergen = {
    id: number;
    name: Translation;
};

export type Menu = {
    introduction: Translation;
    veganNote: Translation;
    sections: MenuSection[];
    allergens: Allergen[];
    labels: {
        priceHeader: Translation;
        serviceNote: Translation;
        allergenPrefix: Translation;
    };
};

export type Lang = "en" | "bg";

// EUR to BGN fixed exchange rate
export const EUR_TO_BGN = 1.95583;

export function formatPrice(eur: number): string {
    const bgn = eur * EUR_TO_BGN;
    return `${eur.toFixed(2)} | ${bgn.toFixed(2)}`;
}

export function formatPriceBgn(eur: number): string {
    const bgn = eur * EUR_TO_BGN;
    return `${eur.toFixed(2)} | ${bgn.toFixed(2)}`;
}
