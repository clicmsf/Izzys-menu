import ReactMarkdown from "react-markdown";
import type { MenuItem, Lang } from "../types";
import { formatPrice } from "../types";

type Props = {
    item: MenuItem;
    lang: Lang;
};

export default function ExtraItem({ item, lang }: Props) {
    const nameText = item.weight
        ? `${item.name[lang]} (${item.weight})`
        : item.name[lang];

    return (
        <div className="extra-item">
            <div className="extra-header">
                <span className="extra-name">{nameText}</span>
                <span className="extra-price">{formatPrice(item.priceEur)}</span>
            </div>
            {item.description && item.description[lang] && (
                <div className="extra-description">
                    <ReactMarkdown>{item.description[lang]}</ReactMarkdown>
                </div>
            )}
        </div>
    );
}
