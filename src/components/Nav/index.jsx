import { Nav as NavContainer, NavList } from './styles';
import {
    HomeIcon,
    SearchIcon,
    ReelsIcon,
    ShopIcon,
    Avatar,
} from '../../assets';

export const Nav = () => {
    return (
        <NavContainer>
            <NavList>
                <li><HomeIcon/></li>
                <li><SearchIcon/></li>
                <li><ReelsIcon/></li>
                <li><ShopIcon /></li>
                <li><Avatar /></li>
            </NavList>
        </NavContainer>
    );
}