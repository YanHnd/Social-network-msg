import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import dashboard from './Components/dashboard/dashboard'
import filActualite from './Components/filActualite/filActualite'
import iterfaceUser from './Components/interfaceUser/interfaceUser'
import messagerie from './Components/messagerie/messagerie'
import profilUser from './Components/profilUser/profilUser'

function App() {
    return (
        <Router>
            <div>
                <p className='text-red-500'>Réseau Social</p>

                <Switch>
                    <Route path='/' exact component={dashboard} />
                    <Route path='/filActualite' component={filActualite} />
                    <Route path='/iterfaceUser' component={iterfaceUser} />
                    <Route path='/messagerie' component={messagerie} />
                    <Route path='/profilUser' component={profilUser} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
