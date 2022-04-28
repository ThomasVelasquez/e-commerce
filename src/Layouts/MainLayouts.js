import react from "react";
import {Container} from 'react-bootstrap'

const MainLayout = ({ children }) => {
    return(
        <Container className="main">
            {children}
        </Container>
    );
}

export default MainLayout;