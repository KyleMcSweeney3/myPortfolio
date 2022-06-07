import React from 'react'
import styled from 'styled-components'
import { colours } from '../../config';

const StyledExperienceSection = styled.section`
    /* max-width: 700px; */

    .inner {
        display: flex;
        @media (max-width: 600px) {
            display: block;
        }
        @media (min-width: 700px) {
            min-height: 340px;
        }
    }
`;

const StyledList = styled.div`
    position: relative;
    z-index: 3;
    width: max-content;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 600px) {
        display: flex;
        overflow-x: auto;
        width: calc(100% + 100px);
        padding-left: 50px;
        margin-left: -50px;
        margin-bottom: 30px;
    }
    @media (max-width: 480px) {
        width: calc(100% + 50px);
        padding-left: 25px;
        margin-left: -25px;
    }

    li {
        &:first-of-type {
        @media (max-width: 600px) {
            margin-left: 50px;
        }
        @media (max-width: 480px) {
            margin-left: 25px;
        }
        }
        &:last-of-type {
        @media (max-width: 600px) {
            padding-right: 50px;
        }
        @media (max-width: 480px) {
            padding-right: 25px;
        }
        }
    }
`;

const StyledTabButton = styled.div`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:active,
    &:focus {
      color: ${colours.blue};
      outline: 0;
    }
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0 20px 2px;
    border-left: 2px solid ${colours.lightestNavy};
    background-color: transparent;
    /* color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')}; */
    font-family: 'SFMono';
    font-size: 14px;
    text-align: left;
    white-space: nowrap;

    &:hover,
    &:focus {
        background-color: ${colours.lightNavy};
        cursor: pointer;
    }
`;

const StyledTabPanels = styled.div`
    position: relative;
    width: 100%;
    margin-left: 20px;
    @media (max-width: 600px) {
        margin-left: 0;
    }
`;

const StyledTabPanel = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 5px;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 18px;
        li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
            content: '▹';
            position: absolute;
            left: 0;
            color: ${colours.blue}
        }
        }
    }

    h3 {
        margin-bottom: 2px;
        font-size: 22px;
        font-weight: 500;
        line-height: 1.3;
        .company {
            color: ${colours.blue}
        }
    }
`

const Experience = () => {
    return (
        <StyledExperienceSection id="experience">
            <h2 className="numbered-heading">Skills & Experience</h2>
            <div className="inner">
                
            </div>
        </StyledExperienceSection>
    )
}

export default Experience;
