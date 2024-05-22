import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ALink from '../features/custom-link';
import CartMenu from './partial/cart-menu';
import MainMenu from './partial/main-menu';
import SearchForm from './partial/Search-box';
import { headerBorderRemoveList } from './data/menu';
import logo from './images/logo.png'
import LoginModal from '../login/login-modal'
function Header() {
    const { home } = useParams();

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            if (headerBorderRemoveList.includes(home) && header.classList.contains('header-border')) {
                header.classList.remove('header-border');
            } else if (!headerBorderRemoveList.includes(home)) {
                header.classList.add('header-border');
            }
        }
    }, [home]);

    const showMobileMenu = () => {
        document.querySelector('body').classList.add('mmenu-active');
    };
    return (
        <div>
            <header className="header header-border">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p className="welcome-msg">Welcome to Riode store message or remove it!</p>
                        </div>
                        <div className="header-right">
                            <div className="dropdown">
                                <ALink href="#">USD</ALink>
                                <ul className="dropdown-box">
                                    <li><ALink href="#">USD</ALink></li>
                                    <li><ALink href="#">EUR</ALink></li>
                                </ul>
                            </div>

                            <div className="dropdown ml-5">
                                <ALink href="#">ENG</ALink>
                                <ul className="dropdown-box">
                                    <li><ALink href="#">ENG</ALink></li>
                                    <li><ALink href="#">FRH</ALink></li>
                                </ul>
                            </div>

                            <span className="divider"></span>
                            <ALink href="/contact" className="contact d-lg-show"><i class="fa-solid fa-location-dot"></i>Contact</ALink>
                            <ALink href="#" className="help d-lg-show"><i class="fa-solid fa-circle-exclamation"></i> Need Help</ALink>
                            <LoginModal />
                        </div>
                    </div>
                </div>

                <div className="header-middle sticky-header fix-top sticky-content">
                    <div className="container">
                        <div className="header-left">
                            <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                                <i className="d-icon-bars2"></i>
                            </ALink>

                            <ALink href="/" className="logo">
                                <img src={logo} alt="logo" width="153" height="44" />
                            </ALink> 

                            <SearchForm />
                        </div>

                        <div className="header-right">
                            <ALink href="tel:#" className="icon-box icon-box-side">
                                <div className="icon-box-icon mr-0 mr-lg-2">
                                <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="icon-box-content d-lg-show">
                                    <h4 className="icon-box-title">Call Us Now:</h4>
                                    <p>0(800) 123-456</p>
                                </div>
                            </ALink>
                            <span className="divider"></span>
                            <ALink href="/pages/wishlist" className="wishlist">
                            <i class="fa-regular fa-heart"></i>
                            </ALink>
                            <span className="divider"></span>

                            <CartMenu />
                        </div>
                    </div>
                </div>

                <div className="header-bottom d-lg-show">
                    <div className="container">
                        <div className="header-left">
                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <ALink href="#">
                            <i class="fa-solid fa-tag"></i>Special Offers</ALink>
                            <a href="https://d-themes.com/buynow/riodereact" className="ml-6">Buy Riode!</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header
