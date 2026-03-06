import logoSvg from "../assets/logo_no_text.svg";
import wifiSvg from "../assets/wifi.svg";

export default function MenuHeader() {
    return (
        <div className="menu-header">
            <img src={logoSvg} alt="Izzy's Logo" className="logo" />
            <h1 className="restaurant-name">Izzy's Coffee and Brunch</h1>
            <div className="wifi-info">
                <img src={wifiSvg} alt="WiFi" className="wifi-icon" />
                <div>IzzysCoffeeAndBrunch</div>
                <div>Password: 100%Izzys</div>
            </div>
        </div>
    );
}
