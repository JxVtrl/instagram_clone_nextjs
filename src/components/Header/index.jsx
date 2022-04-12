import {
    AddIcon,
    HeartIcon,
    LogoIcon,
    MessengerIcon
} from "../../assets";

import { HeaderContainer } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoIcon />
            <div>
                <AddIcon />
                <HeartIcon />
                <MessengerIcon />
            </div>
        </HeaderContainer>
    );
}
    
export default Header;