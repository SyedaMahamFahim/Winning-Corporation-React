import Logo from './Logo'
import Navbar from './Navbar/Navbar'
import HeaderConfig from './HeaderConfig'
import React, {useEffect, useState} from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const sticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', sticky);

        return () => {
            window.removeEventListener('scroll', sticky);
        }
    }, []);

    return (
        <header className={`header-area ${isSticky ? 'sticky' : 'not-sticky'}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5 col-lg-2">
                        <Logo/>
                    </div>

                    <div className="col-lg-7 d-none d-lg-block">
                        <div className="navigation-area mt-lg-3">
                            <Navbar/>
                        </div>
                    </div>

                    <div className="col-7 col-lg-3">
                        <HeaderConfig/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;