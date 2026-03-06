import ReactMarkdown from "react-markdown";
import MenuHeader from "./MenuHeader";
import type { MenuSection, Menu, Lang } from "../types";
import MenuItemBox from "./MenuItemBox";
import AllergenFooter from "./AllergenFooter";

type Props = {
    section: MenuSection;
    menu: Menu;
    lang: Lang;
};

export default function StaffFavouritesPage({ section, menu, lang }: Props) {
    const labels = menu.labels;

    return (
        <div className="page">
            <MenuHeader />

            <div style={{ marginBottom: "12px" }}>
                <div className="vegan-note-text">
                    <ReactMarkdown>
                        {menu.veganNote[lang]}
                    </ReactMarkdown>
                </div>
            </div>

            <div style={{ marginBottom: "12px" }}>
                {section.buildYourOwnNote && (
                    <div className="staff-note">
                        <ReactMarkdown>
                            {section.buildYourOwnNote[lang]}
                        </ReactMarkdown>
                    </div>
                )}
            </div>

            <div className="price-header" style={{ textAlign: "right" }}>
                {labels.priceHeader[lang]}
            </div>
            <div className="flex flex-col gap-1">
                {section.items.map((item) => (
                    <MenuItemBox
                        key={item.id}
                        item={item}
                        lang={lang}
                    />
                ))}
            </div>

            <AllergenFooter menu={menu} lang={lang} />
        </div>
    );
}
