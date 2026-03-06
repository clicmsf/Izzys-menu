import ReactMarkdown from "react-markdown";
import type { MenuItem as MenuItemType, Lang } from "../types";
import { formatPrice } from "../types";

type Props = {
    item: MenuItemType;
    lang: Lang;
};

export default function MenuItemBox({ item, lang }: Props) {
    const nameText = item.weight
        ? `${item.name[lang]} (${item.weight})`
        : item.name[lang];

    const tags = item.tags
        ? item.tags
            .map((t) => {
                if (lang === "bg") {
                    if (t === "vegan") return "веган";
                    if (t === "gluten-free") return "без глутен";
                    return t;
                }
                return t
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ");
            })
            .join(", ")
        : "";

    const fullName = tags ? `${nameText} (${tags})` : nameText;

    const allergenText =
        item.allergenIds && item.allergenIds.length > 0
            ? `*${item.allergenIds.join(", ")}`
            : "";

    return (
        <div className="menu-item-box">
            <div className="item-header">
                <span className="item-name">{fullName}</span>
                <span className="item-price">{formatPrice(item.priceEur)}</span>
            </div>

            {item.description && item.description[lang] && (
                <div className="item-description">
                    <ReactMarkdown>{item.description[lang]}</ReactMarkdown>
                    {allergenText && (
                        <span className="item-allergens"> {allergenText}</span>
                    )}
                </div>
            )}

            {!item.description?.[lang] && allergenText && (
                <div className="item-allergens">{allergenText}</div>
            )}

            {item.addons?.map((addon, i) => (
                <div key={i} className="item-addon">
                    <strong>+ {addon.name[lang].replace("+ ", "")}</strong>{" "}
                    {addon.priceEur.toFixed(2)} EUR
                </div>
            ))}
        </div>
    );
}
