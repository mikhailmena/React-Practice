
import React from 'react';
import NavDiv from './Navigation';
import App from './App';

function MainDiv() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <NavDiv/>
                </div>
                <div class="col-sm">
                    <App/>
                </div>
                
            </div>
        </div>
    )
}
export default MainDiv