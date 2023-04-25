import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <FooterLink href="https://github.com/skullkid4200">My Github</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="https://www.linkedin.com/in/jack-einhorn-41175777/">My LinkedIn</FooterLink>  
                    </Column>
                    <Column>
                        <FooterLink href="https://www.jackeinhorn.net">My Personal Work</FooterLink>  
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;