import "./style.css";
import Clock from "../Clock";

const Header = ({ title }) => (
    <header className="header">
        <Clock />
        {title}
    </header>
);

export default Header;