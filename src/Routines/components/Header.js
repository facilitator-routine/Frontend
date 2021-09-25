import React from "react";
import PropTypes from "prop-types"
import {Container, Section} from "react-bulma-components";

const Header = ({title}) =>{
    return (
        <Section>
            <Container>
                <h2 className="title has-text-centered">{title}</h2>
            </Container>
        </Section>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};
export default Header