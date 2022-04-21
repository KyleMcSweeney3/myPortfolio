import React from 'react'
import styled from 'styled-components';
import { colours } from '../../config';

import kyle from '../../images/kyle.jpg'

const StyledAboutSection = styled.section`
    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;
        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledText = styled.div`
    ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: 'SFMono';
      font-size: 14px;
      color: ${colours.slate};

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colours.blue};
        font-size: 14px;
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: ${colours.blue};
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: -30px;
        left: 20px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: ${colours.navy};
      mix-blend-mode: screen;
    }
    &:after {
      border-top: 8px solid ${colours.blue};
      border-right: 8px solid ${colours.blue};
      top: -20px;
      left: 10px;
      z-index: -1;
    }
  }
`;


const About = () => {
    return (
        <StyledAboutSection id="about">
            <h2 className="numbered-heading">About Me</h2>
            <div className='inner'>
                <StyledText>
                    <div>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </StyledText>
                <StyledPic>
                    <div className="wrapper">
                        <img
                        className="img"
                        src={kyle}
                        width={500}
                        quality={95}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    )
}

export default About;
