import MenuHeader from "./MenuHeader";
import MenuItemBox from "./MenuItemBox";
import AllergenFooter from "./AllergenFooter";
import type { MenuSection, Menu, Lang } from "../types";

type Props = {
    sandwichesSection: MenuSection;
    snacksSection: MenuSection;
    sweetsSection: MenuSection;
    menu: Menu;
    lang: Lang;
};

export default function SandwichesPage({
    sandwichesSection,
    snacksSection,
    sweetsSection,
    menu,
    lang,
}: Props) {
    const labels = menu.labels;
    return (
        <div className="page">
            <MenuHeader />

            <div className="grid grid-cols-10 gap-x-8" style={{ marginTop: "16px" }}>
                <div className="col-span-6 flex flex-col">
                    <h2 className="section-title">{sandwichesSection.label[lang]}</h2>
                    <div className="price-header">{labels.priceHeader[lang]}</div>

                    <div className="flex flex-col flex-1 justify-between">
                        {sandwichesSection.items.map((item) => (
                            <MenuItemBox
                                key={item.id}
                                item={item}
                                lang={lang}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-span-4 flex flex-col">
                    <h2 className="section-title">{snacksSection.label[lang]}</h2>
                    <div className="price-header" style={{ textAlign: "right" }}>
                        {labels.priceHeader[lang]}
                    </div>

                    <div className="flex flex-col gap-0">
                        {snacksSection.items.map((item) => (
                            <MenuItemBox key={item.id} item={item} lang={lang} />
                        ))}
                    </div>

                    <div className="mt-auto" style={{ paddingTop: "12px" }}>
                        <h2 className="section-title">{sweetsSection.label[lang]}</h2>
                        <div className="price-header" style={{ textAlign: "right" }}>
                            {labels.priceHeader[lang]}
                        </div>

                        <div className="flex flex-col gap-0">
                            {sweetsSection.items.map((item) => (
                                <MenuItemBox
                                    key={item.id}
                                    item={item}
                                    lang={lang}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AllergenFooter menu={menu} lang={lang} />
        </div>
    );
}
