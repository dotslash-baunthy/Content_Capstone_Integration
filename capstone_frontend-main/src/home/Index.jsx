import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
                <div className='row'>
                   
                    <div className='col-md-12'>
                        <h1 className='text-center'>Prediction Form</h1>
                        <div className='selectOptons'>
                            <form action="">
                            <div className="form-group">
                                <label >Select list:</label>
                                <select className="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                </div>

                                <div className="form-group">
                                    <label >Select list:</label>
                                    <select className="form-control" id="sel2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>

                                <button type="submit" className='btn-info button'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        
    );
}

export { Home };