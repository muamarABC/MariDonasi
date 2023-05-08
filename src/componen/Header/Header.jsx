import React from "react";
import {Container, Row} from "reactstrap";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/images/user-icon.png";
import './header.css';

const nav_link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'donasi',
        display: 'Donasi'
    },{
        path: 'galangDonasi',
        display: 'Galang Donasi'
    },
    {
        path: 'history',
        display: 'History'
    }
]

const Header = () => {
    return (
    <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        {/* <img src={logo} alt="logo"/> */}
                        <div>
                            <h1>MariDonasi</h1>
                        </div>
                    </div>
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_link.map((item, index)=>(
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path} className={(navClasss)=>navClasss.isActive ? 'nav_active':''}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav_icons">
                        <span><img src={UserIcon} alt="logo"/></span>
                    </div>
                    <div className="mobile_menu">
                        <span><i class="ri-menu-line"></i></span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
    )
}

export default Header