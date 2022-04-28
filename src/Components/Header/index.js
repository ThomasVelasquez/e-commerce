import React from "react";
import Image from 'react-bootstrap/Image'
import HeaderImg from '../../Assets/img/logo.png'

const Header = () => {
    return(
        <div className="header">
            <Image src={HeaderImg} />
        </div>
    );
}

export default Header