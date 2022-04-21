import React from 'react'
import styled from 'styled-components'
import { colours } from '../config'
import PropTypes from 'prop-types'

const StyledSideElement = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
    z-index: 10;
    color: ${colours.lightSlate};

    @media (max-width: 1080px) {
        left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
        right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const Side = ({orientation, children}) => {
    return (
        <StyledSideElement orientation={orientation}>
            <>{children}</>
        </StyledSideElement>
    )
}

Side.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string,
};

export default Side
