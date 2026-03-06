import type { Menu, Lang } from "../types";

type Props = {
    menu: Menu;
    lang: Lang;
};

export default function AllergenFooter({ menu, lang }: Props) {
    const { allergens, labels } = menu;

    const allergenList = allergens
        .map((a) => `${a.id} - ${a.name[lang]}`)
        .join(", ");

    return (
        <div className="allergen-footer">
            <div className="allergen-list">
                <strong>{labels.allergenPrefix[lang]}:</strong> {allergenList}
            </div>
        </div>
    );
}
