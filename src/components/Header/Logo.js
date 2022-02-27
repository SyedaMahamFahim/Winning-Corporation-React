import {Link} from "react-router-dom";
import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="logo-area" >
                <Link to="/" className="logo">
                Winning
                </Link>
            </div>
        );
    }
}

export default Logo;