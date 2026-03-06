import "./index.css";
import menuData from "../menu.json";
import type { Menu } from "./types";
import IntroPage from "./components/IntroPage";
import MenuPage from "./components/MenuPage";
import StaffFavouritesPage from "./components/StaffFavouritesPage";
import SandwichesPage from "./components/SandwichesPage";

const menu = menuData as unknown as Menu;

function getSection(id: string) {
  return menu.sections.find((s) => s.id === id)!;
}

function App() {
  const breakfast = getSection("breakfast");
  const extras = getSection("extras");
  const staffFavourites = getSection("staff_favourites");
  const brunch = getSection("brunch");
  const sandwiches = getSection("sandwiches");
  const snacksPastries = getSection("snacks_pastries");
  const sweets = getSection("sweets");

  return (
    <div>
      <IntroPage menu={menu} />

      <MenuPage
        mainSection={breakfast}
        extrasSection={extras}
        menu={menu}
        lang="en"
      />

      <MenuPage
        mainSection={breakfast}
        extrasSection={extras}
        menu={menu}
        lang="bg"
      />

      <StaffFavouritesPage
        section={staffFavourites}
        menu={menu}
        lang="en"
      />

      <StaffFavouritesPage
        section={staffFavourites}
        menu={menu}
        lang="bg"
      />

      <MenuPage
        mainSection={brunch}
        extrasSection={extras}
        menu={menu}
        lang="en"
      />

      <MenuPage
        mainSection={brunch}
        extrasSection={extras}
        menu={menu}
        lang="bg"
      />

      <SandwichesPage
        sandwichesSection={sandwiches}
        snacksSection={snacksPastries}
        sweetsSection={sweets}
        menu={menu}
        lang="en"
      />

      <SandwichesPage
        sandwichesSection={sandwiches}
        snacksSection={snacksPastries}
        sweetsSection={sweets}
        menu={menu}
        lang="bg"
      />
    </div>
  );
}

export default App;
