import { StyledHeader } from "./styled";
import Clock from "../Clock";

const Header = ({ title }) => (
    <StyledHeader>
        <Clock />
        {title}
    </StyledHeader>
);

export default Header;