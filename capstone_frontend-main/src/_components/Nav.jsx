import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';

function Nav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return (
        // <div>
        //     <nav className="navbar navbar-inverse">
        //         <div className="container-fluid">
                // <ul className="nav navbar-nav">
                //     <li><NavLink exact to="/">Home</NavLink></li>
                //     {user.role === Role.Admin &&
                //         <li><NavLink to="/program">Program</NavLink></li>
                //     }
                //     <li><NavLink to="/profile">Profile</NavLink></li>
                //     {user.role === Role.Admin &&
                //         <li><NavLink to="/admin">Admin</NavLink></li>
                //     }                   
                // </ul>
                // <ul className="nav navbar-nav navbar-right">
                //     <li><a href="onClick={accountService.logout}"><span className="glyphicon glyphicon-user"></span> Logout</a></li>
                // </ul>
        //         </div>
        //     </nav>
        //     <Route path="/admin" component={AdminNav} />
        // </div>
        <div>
            <nav className="navbar navbar-inverse navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav container-fluid">
                <ul className="nav navbar-nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    {user.role === Role.Admin &&
                        <li><NavLink to="/program">Program</NavLink></li>
                    }
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    {user.role === Role.Admin &&
                        <li><NavLink to="/admin">Admin</NavLink></li>
                    }                   
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {/* <li><a href="onClick={accountService.logout}"><span className="glyphicon glyphicon-user"></span> Logout</a></li> */}
                    <li><a onClick={accountService.logout} className="glyphicon glyphicon-user justify-content-end">Logout</a></li>
                </ul>
                    {/* <a onClick={accountService.logout} className="nav-item nav-link">Logout</a> */}
                </div>
            </nav>
            <Route path="/admin" component={AdminNav} />
        </div>

    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav className="admin-nav navbar navbar-expand navbar-light">
            <div className="navbar-nav">
                <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>


    );
}

export { Nav }; 