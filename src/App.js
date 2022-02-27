import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/
import HomeOne from './pages/HomeOne'
import Service from './pages/Service'
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={HomeOne}/>

                    <Route exact path={`${process.env.PUBLIC_URL + '/services'}`} component={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + '/service/:serviceID'}`} component={ServiceDetails}/>
                   
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog"}`}
                           component={BlogGridWithoutSidebar}/>
                   
                    <Route path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`} component={BlogDetailsPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team-member/:teamID"}`} component={TeamDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact}/>
                   
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;