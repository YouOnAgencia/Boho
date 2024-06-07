import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { useState } from 'react';
import LOGO from '../img/logo-boho.png'

export default function Header() {

    function isSocialBarVisible() {
        let socialBar = document.querySelector(".header-social");
        let socialBarRect = socialBar.getBoundingClientRect();
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return socialBarRect.top >= 0 && socialBarRect.bottom <= windowHeight;
    }

    function adjustNavPosition() {
        let nav = document.querySelector("header");

        if (isSocialBarVisible()) {
            if (window.matchMedia("(max-width: 690px)").matches) {
                nav.style.top = "70px";
            } else {
                nav.style.top = "30px";
            }
        } else {
            nav.style.top = "0";
        }
    }

    window.addEventListener("scroll", adjustNavPosition);
    window.addEventListener("resize", adjustNavPosition);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <header className='header-nav'>
                <div className='maxWidth'>
                    <div className='nav-menu'>
                    <img href="/" className='logo-boho' src={LOGO} alt=""/>
                        <nav className="menu-mobile">
                            <i onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></i>
                            <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`}>
                                <Link to='LinkMain' smooth={true} spy={true} offset={-60} duration={500} onClick={closeMenu}>
                                    <li><span href="">Home</span></li>
                                </Link>
                                <Link to='LinkSobre' smooth={true} spy={true} offset={-90} duration={500} onClick={closeMenu}>
                                    <li><span href="">Sobre nós</span></li>
                                </Link>
                                <Link to='LinkServ' smooth={true} spy={true} offset={-100} duration={500} onClick={closeMenu}>
                                    <li><span href="">Serviços</span></li>
                                </Link>
                                <Link to='LinkProf' smooth={true} spy={true} offset={-120} duration={500} onClick={closeMenu}>
                                    <li><span href="">Profissionais</span></li>
                                </Link>
                                <Link to='LinkForm' smooth={true} spy={true} offset={-200} duration={500} onClick={closeMenu}>
                                    <li><span href="">Contato</span></li>
                                </Link>
                            </ul>
                        </nav>
                        <nav className='menu-desktop'>
                            <ul>
                                <Link to='LinkMain' smooth={true} spy={true} offset={-60} duration={500}>
                                    <li><span href="">Home</span></li>
                                </Link>
                                <Link to='LinkSobre' smooth={true} spy={true} offset={-90} duration={500}>
                                    <li><span href="">Sobre nós</span></li>
                                </Link>
                                <Link to='LinkServ' smooth={true} spy={true} offset={-100} duration={500}>
                                    <li><span href="">Serviços</span></li>
                                </Link>
                                <Link to='LinkProf' smooth={true} spy={true} offset={-120} duration={500}>
                                    <li><span href="">Profissionais</span></li>
                                </Link>
                                <Link to='LinkForm' smooth={true} spy={true} offset={-200} duration={500}>
                                    <li><span href="">Contato</span></li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}



