import ReactMarkdown from "react-markdown";
import MenuHeader from "./MenuHeader";
import type { Menu, Lang } from "../types";

type Props = {
    menu: Menu;
};

export default function IntroPage({ menu }: Props) {
    const allergenLine = (lang: Lang) => {
        const prefix = `* ${menu.labels.allergenPrefix[lang]}`;
        const items = menu.allergens
            .map((a) => `${a.id}. ${a.name[lang]}`)
            .join(" ");
        return `${prefix}, ${items}`;
    };

    return (
        <div className="page">
            <MenuHeader />

            <div style={{ marginTop: "36px", textAlign: "center" }}>
                <p className="intro-welcome">
                    {menu.introduction.bg.split("\n\n")[0].replace(/\*\*/g, "")}
                </p>
                <div className="intro-text" style={{ padding: "0 40px", maxWidth: "560px", margin: "0 auto" }}>
                    <ReactMarkdown>
                        {menu.introduction.bg
                            .replace(/^\*\*.*?\*\*\n\n/, "")
                            .replace(/\n\n\*\*.*?\*\*$/, "")}
                    </ReactMarkdown>
                </div>
                <p className="intro-closing" style={{ marginTop: "24px" }}>
                    {menu.introduction.bg.split("\n\n").pop()?.replace(/\*\*/g, "")}
                </p>
            </div>

            <hr className="intro-divider" />

            <div style={{ textAlign: "center" }}>
                <p className="intro-welcome">
                    {menu.introduction.en.split("\n\n")[0].replace(/\*\*/g, "")}
                </p>
                <div className="intro-text" style={{ padding: "0 40px", maxWidth: "560px", margin: "0 auto" }}>
                    <ReactMarkdown>
                        {menu.introduction.en
                            .replace(/^\*\*.*?\*\*\n\n/, "")
                            .replace(/\n\n\*\*.*?\*\*$/, "")}
                    </ReactMarkdown>
                </div>
                <p className="intro-closing" style={{ marginTop: "24px" }}>
                    {menu.introduction.en.split("\n\n").pop()?.replace(/\*\*/g, "")}
                </p>
            </div>

            <div className="allergen-footer">
                <p>{menu.labels.serviceNote.bg}</p>
                <p>{allergenLine("bg")}</p>
                <br />
                <p>{menu.labels.serviceNote.en}</p>
                <p>{allergenLine("en")}</p>
            </div>
        </div>
    );
}
