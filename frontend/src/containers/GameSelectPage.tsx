import React from 'react';
import { Card, Button } from 'react-bootstrap'
import reactLogo from '../images/logo.svg'
import rustLogo from '../images/logo2.svg'
import plus from '../images/plus.svg'

export const GameSelectPage = () => {
    return (
        <div>
            <div className='mb-4 mt-4'>
                <h1>Select a Game To Play</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Card>
                            <Card.Img variant='top' src={reactLogo}/>
                            <Card.Body>
                                <Card.Title>Game Mode 1</Card.Title>
                                <Card.Text>This is placeholder text for game mode 1.</Card.Text>
                                <Button variant='success'>Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant='top' src={plus} />
                            <Card.Body>
                                <Card.Title>Game Mode 2</Card.Title>
                                <Card.Text>This is placeholder text for game mode 2.</Card.Text>
                                <Button variant='success'>Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant='top' src={rustLogo} />
                            <Card.Body>
                                <Card.Title>Game Mode 3</Card.Title>
                                <Card.Text>This is placeholder text for game mode 3.</Card.Text>
                                <Button variant='success'>Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}