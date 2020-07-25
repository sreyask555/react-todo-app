import React, { Component } from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
             <Link to="/">HOME</Link>
             <Link to="/about">ABOUT</Link>
            </header>
        )
    }
}
