import React, { useState, useEffect } from 'react'
import { colours } from '../config'
import Helmet from 'react-helmet';
import IconLoader from './icons/Loader';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${colours.navy};
    z-index: 99;

    .logo-wrapper {
        width: max-content;
        max-width: 100px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: ${props => (props.isMounted ? 1 : 0)};
        svg {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            fill: none;
            user-select: none;
            #B {
                opacity: 0;
            }
        }
    }
`

const Loader = () => {
    return (
        <StyledLoader className="loader" isMounted={isMounted}>
            <Helmet bodyAttributes={{ class: `hidden` }} />

            <div className="logo-wrapper">
                <IconLoader />
            </div>
        </StyledLoader>
    )
}

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;
