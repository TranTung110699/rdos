import React from 'react';
import { Container, Row, Col } from "reactstrap";

//Import scss
import '../../assets/scss/custom/components/customer/rdos.scss';

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer className="footer rdos-customer-footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>
                            <div className="text-sm-left d-none d-sm-block">{new Date().getFullYear()} © RDOS.</div>
                        </Col>
                        <Col md={6}>
                            <div align="center" className="text-sm-right">
                                Powered by <b>SWP490_G49</b>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default Footer;