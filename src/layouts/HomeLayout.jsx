import React from 'react';
import { NotFound, Detail, Search } from '../components'
import logo from '../logo.svg'
import { Route, Switch, Link } from 'react-router-dom'
import { HomeScreen } from '../pages';
const HomeLayout = () =>
    <div className="App">
        <header className="App-header">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Search />
        </header>
        <main className="App-main">

            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/currency/:id" component={Detail} exact />
                <Route component={NotFound} exact />
            </Switch>
        </main>
    </div>

export default HomeLayout