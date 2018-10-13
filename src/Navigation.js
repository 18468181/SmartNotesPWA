import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter } from "react-router-dom";
import ListVenue from './ListVenue';
import ListDevice from './ListDevice';


class Navigation extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a class="navbar-brand" href="#">Navbar</a>

                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/ListVenue">List Venues</NavLink></a>

                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/ListDevice">List Devices</NavLink></a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </HashRouter>
        );
    }
}

export default Navigation;

