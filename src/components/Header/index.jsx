import {
    AddIcon,
    HeartIcon,
    LogoIcon,
    MessengerIcon
} from "../../assets";

import { HeaderContainer } from "./styles";

export const Header = () => {
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
    