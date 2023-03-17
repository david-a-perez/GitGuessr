import { Card, Button } from 'react-bootstrap'
import reactLogo from '../images/logo.svg'
import rustLogo from '../images/logo2.svg'
import plus from '../images/plus.svg'
import { useNavigate } from 'react-router-dom'

export const GameSelectPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='mb-4 mt-4'>
                <h1>Select a Game To Play</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className="card h-100">
                            <img src={reactLogo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Game Mode 1</h5>
                                <p className="card-text">This is placeholder text for game mode 1.</p>
                                <Button variant='success' onClick={() => navigate('/game-1')}>Select</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card h-100">
                            <img src={plus} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Game Mode 2</h5>
                                <p className="card-text">This is placeholder text for game mode 2.</p>
                                <Button variant='success' onClick={() => navigate('/game-1')}>Select</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card h-100">
                            <img src={rustLogo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Game Mode 3</h5>
                                <p className="card-text">This is placeholder text for game mode 3.</p>
                                <Button variant='success' onClick={() => navigate('/game-1')}>Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}