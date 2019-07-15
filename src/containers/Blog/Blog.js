import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Authors from "./Authors/Authors";
import About from "./About/About";
import MedCalculator from "./MedCalculator/MedCalculator";
import Notes from "./Notes/Notes";

export default class Blog extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                    <a className="navbar-brand">Med7991</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#"><NavLink to="/about">About</NavLink><span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/posts">Posts</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/authors">Authors</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/medcalculator">MedCalculator</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/notes">Notes</NavLink></a>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:id?" component={PostRender} />
                    <Route exact path="/authors" component={Authors} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/medcalculator" component={MedCalculator} />
                    <Route exact path="/notes" component={Notes} />
                    <Route exact path="/" component={MedCalculator} />
                    <Redirect from="/medcalculator" to="/" />
                </Switch>
            </div>
        );
    }
}
