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
import { GameMode1Page } from './containers/GameMode1Page'
import { PartyPage } from './containers/PartyPage'
import { QuizPage } from './containers/QuizPage'
import { DailyChallengePage } from './containers/DailyChallengePage'
import { Nav, Button } from 'react-bootstrap'

const App = () => {
  useAuthCheck()
  const auth = useAuth()
    
  const navigate = useNavigate()
  /* CRA: app hooks */
  
  // @ts-ignore
    return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src="https://user-images.githubusercontent.com/46609460/220524085-2e913612-03a5-431e-a326-013cd66d10bf.png" alt="" width="60" height="40" />
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href='/'>Home</a>
              </li>
              <li className="nav-item">
                { auth.isAuthenticated && <a className="nav-link active" href="/account">Account</a> }
                { !auth.isAuthenticated && <a className="nav-link active" href="/login">Login/Sign-Up</a> }
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ margin: '0 auto', maxWidth: '800px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameSelectPage />} />
            <Route path="/repos" element={<RepoSelectPage />} />
            <Route path="/game-1" element={<GameMode1Page />} />
            <Route path="/party" element={<PartyPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/daily-challenge" element={<DailyChallengePage />} />
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
