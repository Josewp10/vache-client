
import React from "react";


import {  CardTitle, Container } from "reactstrap";

const Header = () => {
    return (
        <>
            <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                    >
                        text here
                        </CardTitle>
                </Container>
            </div>
        </>
    );
};

export default Header;