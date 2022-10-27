import React from "react";
import Image from 'react-bootstrap/Image'


function Header (){
    return (
        <div>
            <img src="./title.png" className="img-responsive" alt="image" style={{width: '58%'}}></img>
            <img src="./flag.png" className="img-responsive" alt="Image" style={{width: '42%'}} ></img>
        </div>
    )
}
export default Header;