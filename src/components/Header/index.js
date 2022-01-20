import React from 'react'
import {Nav, NavbarContainer, NavLogo,NavMenu, NavItem} from './styled';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import { WhatsappOutlined } from '@mui/icons-material';

const Header = () => {
    return (
        <Nav>
        <NavbarContainer>
            <NavLogo>Fruit Store</NavLogo>
            <NavMenu>
                <NavItem>
                    <Input style={{width:400, color:'#fff', }}
                    placeholder='Digite o que você procura'
                    /><SearchIcon style={{color:'#fff', marginTop:8}}/>
                </NavItem>
                <NavItem style={{width:200, color:'#fff', marginTop:8}}>
                    <WhatsappOutlined style={{color:'#fff'}}/>(11) 9999-9999
                </NavItem>
            </NavMenu>
        </NavbarContainer>

    </Nav>

    
    )
}

export default Header
