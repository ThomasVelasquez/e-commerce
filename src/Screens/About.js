import React from "react";
import { about1 } from "../Assets/img";
import { Col } from "react-bootstrap";
import DefaultWrapper from "../Wrappers/DefaultWrapper";
import Image from 'react-bootstrap/Image'
import { Row } from "react-bootstrap";
import * as img from '../Assets/img'

const dataIcon = [
    {
        name: 'icon_1',
        image: img.icon1,
        title: 'El mejor precio'
    },
    {
        name: 'icon_2',
        image: img.icon2,
        title: 'para devs'
    },
    {
        name: 'icon_3',
        image: img.icon3,
        title: 'envio gratis'
    },
    {
        name: 'icon_4',
        image: img.icon4,
        title: 'la mejor calidad'
    }
]


const About = () => {
    return(
    <DefaultWrapper>
        <h1 className="text-nav" >About US</h1>
        <Row className="spaces">
            <Col md={6}  > 
                <p className='content'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue nunc. Maecenas nec tortor sed nunc hendrerit bibendum nec quis purus. Curabitur ac sem porta nisi euismod ultricies id non ipsum. Pellentesque ut ultricies sem. Sed lorem dui, convallis et tincidunt ac, mollis a nisi. Suspendisse rutrum fermentum nibh, sed malesuada magna condimentum vitae. Praesent metus massa, euismod nec fermentum vitae, ornare vel quam. Nam vulputate arcu et volutpat accumsan. Mauris tincidunt magna et dui pellentesque euismod.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue nunc. Maecenas nec tortor sed nunc hendrerit bibendum nec quis purus. Curabitur ac sem porta nisi euismod ultricies id non ipsum. Pellentesque ut ultricies sem. Sed lorem dui, convallis et tincidunt ac, mollis a nisi. </p>
            </Col>
            <Col md={6} >
                <Image src={about1} className='img'/>
            </Col>
        </Row>
        <h2 className="text-nav">why buy with us</h2>
        <Row className="spaces" >
           {dataIcon.map((icon, index) => {
               return (
                   <Col key={index} md={3} className='flex'> {/* We can Adjust the flex with bootstrap */}
                        <Image src={icon.image}/>
                        <h3 className="text-nav"> {icon.title} </h3>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue nunc. Maecenas nec tortor sed nunc hendrerit bibendum nec quis purus. Curabitur ac sem porta nisi euismod ultricies id non ipsum.</p>
                   </Col>
               )
           })}
        </Row>
    </DefaultWrapper>
    );
}

export default About;