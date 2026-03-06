import MenuHeader from "./MenuHeader";
import MenuItemBox from "./MenuItemBox";
import ExtraItem from "./ExtraItem";
import AllergenFooter from "./AllergenFooter";
import type { MenuSection, Menu, Lang } from "../types";

type Props = {
    mainSection: MenuSection;
    extrasSection: MenuSection;
    menu: Menu;
    lang: Lang;
};

export default function MenuPage({
    mainSection,
    extrasSection,
    menu,
    lang,
}: Props) {
    const labels = menu.labels;
    return (
        <div className="page">
            <MenuHeader />

            <div className="grid grid-cols-10 gap-8">
                <div className="col-span-6">
                    <h2 className="section-title">{mainSection.label[lang]}</h2>
                    <div className="price-header">{labels.priceHeader[lang]}</div>

                    <div className="flex flex-col gap-0">
                        {mainSection.items.map((item) => (
                            <MenuItemBox
                                key={item.id}
                                item={item}
                                lang={lang}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-span-4">
                    <h2 className="section-title">{extrasSection.label[lang]}</h2>
                    <div className="price-header" style={{ textAlign: "right" }}>
                        {labels.priceHeader[lang]}
                    </div>

                    <div className="flex flex-col gap-0">
                        {extrasSection.items.map((item) => (
                            <ExtraItem key={item.id} item={item} lang={lang} />
                        ))}
                    </div>
                </div>
            </div>

            <AllergenFooter menu={menu} lang={lang} />
        </div>
    );
}
