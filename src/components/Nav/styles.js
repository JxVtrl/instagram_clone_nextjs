import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #fff;
   

    // posicionar no footer


    
    width: 100%;
    height: 71px;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 0;
    margin: 10px 0 0 0;
    width: 100%;

    li {
        list-style: none;
        margin: 0;
        cursor: pointer;
        height: fit-content;
    }
`
