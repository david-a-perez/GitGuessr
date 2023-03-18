import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export const GameMode2Page = () => {
    const [time, setTime] = useState(5000)
    const [start, setStart] = useState(true)
    const [score, setScore] = useState(0)
    const [snippetIndex, setSnippetIndex] = useState(0)

    return (
        <div>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    <div>
                        <h3>Match the File</h3>
                    </div>
                    <div className="col-xl">
                        <h5>SCORE: {score}</h5>
                    </div>
                    <div className="col-xl">
                        <h5>TIME: {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10) % 100)).slice(-2)}</h5>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <div className="card border-dark mb-3 h-100 w-100">
                            <div className="card-header bg-transparent border-dark">CODE SNIPPET: {snippetIndex + 1}</div>
                            <div className="card-body text-success">
                                <pre>
                                    <code>
                                        This is an example of some code I could put 
                                        for(let i=0; i!=10; i++)
                                            func(i);
                                    </code>
                                </pre>
                            </div>
                            <div className="card-footer bg-transparent border-dark">
                                <div className="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-secondary" onClick={() => snippetIndex > 0 ? setSnippetIndex(snippetIndex - 1) : setSnippetIndex(0) }>prev</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => snippetIndex < 3 ? setSnippetIndex(snippetIndex + 1) : setSnippetIndex(3) }>next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div className="card border-dark mb-3 h-100 w-100">
                            <div className="card-header bg-transparent border-dark">Match the code to the file</div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="mcRadios" id="mcRadiosA" value="optionA" />
                                    <label className="form-check-label">{/* need a for tag to capture input maybe*/}
                                        File A
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="mcRadios" id="mcRadiosB" value="optionB" />
                                    <label className="form-check-label">
                                        File B
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="mcRadios" id="mcRadiosC" value="optionC" />
                                    <label className="form-check-label">
                                        File C
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="mcRadios" id="mcRadiosD" value="optionD" />
                                    <label className="form-check-label">
                                        File D
                                    </label>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent border-dark">
                                <Button className='mb-3 btn-sm' variant='success' onClick={() => console.log("click")}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}