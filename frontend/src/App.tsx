import { useAuth, useAuthCheck } from './hooks/useAuth'
import { AccountPage } from './containers/AccountPage'
import { LoginPage } from './containers/LoginPage'
import { ActivationPage } from './containers/ActivationPage'
import { RegistrationPage } from './containers/RegistrationPage'
import { RecoveryPage } from './containers/RecoveryPage'
import { ResetPage } from './containers/ResetPage'
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './containers/Home'
import { Route, useNavigate, Routes } from 'react-router-dom'
import { GameSelectPage } from './containers/GameSelectPage'
import { RepoSelectPage } from './containers/RepoSelectPage'
import { Button } from 'react-bootstrap'

const App = () => {
  useAuthCheck()
  const auth = useAuth()
    
  const navigate = useNavigate()
  /* CRA: app hooks */
  
  // @ts-ignore
    return (
    <div className="App">
      <div className="App-nav-header">
        <div style={{ display: 'flex', flex: 1 }}>
          <Button onClick={() => navigate('/')}>Home</Button>
          {/* CRA: left-aligned nav buttons */}
        </div>
        <div>
          {/* CRA: right-aligned nav buttons */}
          { auth.isAuthenticated && <Button onClick={() => navigate('/account')}>Account</Button> }
          { !auth.isAuthenticated && <Button onClick={() => navigate('/login')}>Login/Register</Button> }
        </div>
      </div>
      <div style={{ margin: '0 auto', maxWidth: '800px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameSelectPage />} />
            <Route path="/repos" element={<RepoSelectPage />} />
            {/* CRA: routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/recovery" element={<RecoveryPage />} />
            <Route path="/reset" element={<ResetPage />} />
            <Route path="/activate" element={<ActivationPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/account" element={<AccountPage />} />
    
          </Routes>
      </div>
    </div>
  )
}

export default App
