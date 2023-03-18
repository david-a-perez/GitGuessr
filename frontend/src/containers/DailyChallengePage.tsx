import { Button } from 'react-bootstrap'

export const DailyChallengePage = () => {
    return (
        <div>
            <br />
            <br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <div className="card text-center h-100 w-100">
                            <div className="card-header">
                                DAILY CHALLENGE
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Game Mode A</h5>
                                <p className="card-text">Complete todays challenge to earn a place on the leaderboard!</p>
                                <a href="#" className="btn btn-success">Play</a>
                            </div>
                            <div className="card-footer text-muted">
                                03/18/2023
                            </div>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div className="card text-left h-100 w-100">
                            <div className="card-header">
                                Leaderboard
                            </div>
                            <div className="card-body text-left">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}