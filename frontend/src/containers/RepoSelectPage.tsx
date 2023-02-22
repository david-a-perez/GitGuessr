import React from 'react';
import { Card, Button } from 'react-bootstrap';
import reactLogo from '../images/logo.svg'
import rustLogo from '../images/logo2.svg'
import plus from '../images/plus.svg'
import { useNavigate } from 'react-router-dom'

export const RepoSelectPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='mb-4 mt-4'>
                <h1>Select a Repository</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Card>
                            <Card.Img variant='top' src={reactLogo}/>
                            <Card.Body>
                                <Card.Title>Repository 1</Card.Title>
                                <Card.Text>This is placeholder text for repository 1.</Card.Text>
                                <Button variant='success' onClick={() => {navigate('/games')}}>Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant='top' src={plus} />
                            <Card.Body>
                                <Card.Title>Repository 2</Card.Title>
                                <Card.Text>This is placeholder text for repository 2.</Card.Text>
                                <Button variant='success' onClick={() => {navigate('/games')}}>Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant='top' src={rustLogo} />
                            <Card.Body>
                                <Card.Title>Repository 3</Card.Title>
                                <Card.Text>This is placeholder text for repository 3.</Card.Text>
                                <Button variant='success' onClick={() => {navigate('/games')}}>Select</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}