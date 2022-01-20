import styled from "styled-components";

export const Nav = styled.nav` 
width: 100%;
background: #0F6E3F;
height:60px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
overflow:hidden;
`;

export const NavbarContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: ;
    height: 80px;
    width:100vw;
    padding: 0 24px; 
`;

export const NavLogo= styled.div`
    width: 150px;
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-left: 30px;
    font-weight: bold;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center; 
    list-style: none;
    text-align: center;

    @media screen and (max-width:900px) {
    display: none;
}
    
`;

export const NavItem = styled.li`
    display: flex;
    margin-right: 16px;
    cursor: pointer;
    padding-left: 200px;
`;

