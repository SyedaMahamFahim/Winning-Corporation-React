import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                            <Link to="/" className="logo" style={{color:"black"}}>
                Winning
                </Link>

                                <Text>
                                    During the summer my wife and I got to go on an amazing road trip in Vancouver.
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} Winning Ltd. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/"}`}>Careers</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="/" target={'_blank'}>Dribbble</Link></LI>
                                <LI><Link to="/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                                2005 Stokes Isle Apartment. 896, Washington 10010, USA <br/>
                                https://example.com <br/>
                                (+68) 120034509
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;