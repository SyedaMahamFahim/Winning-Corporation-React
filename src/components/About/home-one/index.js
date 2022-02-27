import React, {useState} from 'react';
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import Thumbnail from "../../UI/Thumbnail";
import Content from "../../UI/Content";

import aboutData from '../../../data/About/home-one'

const About = () => {

    const [about] = useState(aboutData);

    return (
        <div className="about-area-wrapper sm-top">
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-md-6 col-lg-5">
                        <Thumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + about.thumb)}/>
                    </div>

                    <div className="col-md-6 col-lg-7">
                        <Content classes="about-content">
                            <h6>{about.title}</h6>
                            <h2>{parse(about.heading)}</h2>
                            <span className="about-since">{about.since}</span>
                            <p>{parse(about.text)}</p>
                            <Link to={`${process.env.PUBLIC_URL + about.btnLink}`}
                                  className="btn-about">{about.btnText} <i
                                className="fa fa-angle-double-right"/></Link>
                        </Content>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;