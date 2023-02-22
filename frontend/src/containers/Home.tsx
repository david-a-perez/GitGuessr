import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../images/logo.svg'

export const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if(!auth.isAuthenticated)
  {
    return (
      <div>
        <h1>GITGUESSR</h1>
        <br />
        <h2>Login or Sign Up to Play!</h2>
      </div>
    )
  }

  return (
    <div>
      <h1 className='mb-5 mt-4'>GitGuessr</h1>
      <div className='menu' style={{textAlign: 'left'}}>
        <div className='outer-container'>
          <div className='row'>
            <div className='col'>
              <div className='inner-container'>
                <div className='row'>
                  <div className='column'>
                    <Button className='mb-3 btn-lg' variant='light' onClick={() => navigate('/repos')}>Play</Button>
                  </div>
                  <div className='column'></div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <Button className='mb-3 btn-lg' variant='light'>Party</Button>
                  </div>
                  <div className='column'></div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <Button className='mb-3 btn-lg' variant='light'>Quiz</Button>
                  </div>
                  <div className='column'></div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <Button className='mb-3 btn-lg' variant='light'>Daily Challenge</Button>
                  </div>
                  <div className='column'></div>
                </div>
              </div>
            </div>
            <div className='col'>
              <img src='https://user-images.githubusercontent.com/46609460/220524085-2e913612-03a5-431e-a326-013cd66d10bf.png' alt='logo' width='400' height='300'/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
