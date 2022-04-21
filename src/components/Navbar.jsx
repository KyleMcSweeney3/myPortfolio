import React from 'react'
import styled from 'styled-components'
import { colours } from '../config'
import Menu from './Menu';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: 100px;
    backdrop-filter: blur(10px);

    @media (max-width: 1080px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 25px;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 12;
    color: ${ colours.navy };

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            color: ${colours.blue};
            width: 42px;
            height: 42px;

            svg {
                fill: none;
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
            }

            h1 {
                color: ${colours.blue};
                font-size: 48px;
                margin-top: 5px;
                font-family: 'Calibre';
            }
        }   
    }
`;

const StyledLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }

    ol {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
        line-height: 11.7px;
        font-family: 'SFMono';

        li {
            margin: 0 5px;
            position: relative;
            counter-increment: item 1;
            font-size: 13px;
            a {
                padding: 10px;
                &:before {
                    content: '0' counter(item) '.';
                    margin-right: 5px;
                    color: ${colours.blue};
                    font-size: 12px;
                    text-align: right;
                }
            }
        }
    } 
    .resume-button {
        color: ${colours.blue};
        background-color: transparent;
        border: 1px solid ${colours.blue};
        border-radius: 4px;
        padding: 0.75rem 1rem;
        font-size: 14px;
        font-family: 'SFMono';
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover,
        &:focus,
        &:active {
            background-color: ${colours.greenTint};
            outline: none;
        }

        &:after {
           display: none !important;
        }
        margin-left: 15px;
        font-size: 14px;
    }
`;

const Navbar = () => {

    const Logo = (
        <div className="logo" tabIndex="-1">
            <a href="/" aria-label="home">
              {/* <IconLogo /> */}
              <h1>KM</h1>
            </a>
        </div>
    );

    const ResumeLink = (
        <a className="resume-button" href="https://docs.google.com/document/d/1EYKz4MXVChuZJ2wK7UPmos60_zgKPpQIh3znKieEgH4/edit" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      );

    return (
        <StyledHeader>
            <StyledNav>
                { Logo }
                <StyledLinks>
                    <ol>
                        <li>
                            <a href = '/#about'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href = '/#experience'>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href = '/#projects'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href = '/#contact'>
                                Contact
                            </a>
                        </li>
                        
                    </ol>
                    {/* <div>{ResumeLink}</div> */}
                </StyledLinks>
                <Menu />
            </StyledNav>
        </StyledHeader>
    )
}

export default Navbar;
