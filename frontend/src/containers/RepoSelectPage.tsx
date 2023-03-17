import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export const RepoSelectPage = () => {
    const navigate = useNavigate();
    /* 
        This will eventually be a dynamic creation of cards, rows will auto wrap. Will need a way
        to get repository data, parse, and a way to store the state of which repository was selected.
    */
    return (
        <div>
            <div className='mb-4 mt-4'>
                <h1>Select a Repository</h1>
            </div>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    <div className='col'>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Repository A</h4>
                                <p className="card-text">A brief description of the repository</p>
                                <a href="#" className="card-link">Repo Link</a>
                                <br />
                                <br />
                                <Button variant='success' onClick={() => navigate('/games')}>Select</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Repository B</h4>
                                <p className="card-text">A brief description of the repository</p>
                                <a href="#" className="card-link">Repo Link</a>
                                <br />
                                <br />
                                <Button variant='success' onClick={() => navigate('/games')}>Select</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Repository C</h4>
                                <p className="card-text">A brief description of the repository</p>
                                <a href="#" className="card-link">Repo Link</a>
                                <br />
                                <br />
                                <Button variant='success' onClick={() => navigate('/games')}>Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}