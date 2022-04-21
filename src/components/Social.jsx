import React from 'react'
import styled from 'styled-components'
import { colours, github, linkedIn, instagram } from '../config'
import IconGitHub from './icons/Github'
import IconInstagram from './icons/Instagram'
import IconLinkedin from './icons/LinkedIn'
import Side from './Side'

const StyledSocialList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none; 
    
    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: ${colours.lightSlate};
    }
    li {
        &:last-of-type {
            margin-bottom: 20px;
        }
        a {
            padding: 10px;
            &:hover,
            &:focus {
                transform: translateY(-3px);
            }
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`

const Social = () => {
    return (
        <Side orientation="left">
            <StyledSocialList>
                <li>
                    <a href={github} target="_blank" rel="noreferrer">
                        <IconGitHub />
                    </a>
                </li>
                <li>
                    <a href={linkedIn} target="_blank" rel="noreferrer">
                        <IconLinkedin />
                    </a>
                </li>
                <li>
                    <a href={instagram} target="_blank" rel="noreferrer">
                        <IconInstagram />
                    </a>
                </li>
            </StyledSocialList>
        </Side>
    )
}

export default Social
