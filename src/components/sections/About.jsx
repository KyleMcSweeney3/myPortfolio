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
        content: '»';
        position: absolute;
        margin-top: 2px;
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

const JobTitle = styled.a`
    color: ${colours.blue};
    text-decoration: none;
    text-decoration-skip-ink: auto;
    &:hover, &:focus {
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:after {
         width: 100%;
        }
    }
`


const About = () => {
    return (
        <StyledAboutSection id="about">
            <h2 className="numbered-heading">About Me</h2>
            <div className='inner'>
                <StyledText>
                    <div>
                        <p>
                            Hey there! My name's Kyle and I'm a Software/Solutions Engineer currently based in Sydney, Australia.
                        </p>
                        <p>
                            I started programming as I began my Computer Science degree at University, and since then I've been hooked on designing and building software products 
                            from simple games to fully functional ecommerce websites.
                        </p>
                        <p>
                            I currently have the privilege of working at <JobTitle href = "https://www.commbank.com.au/" target="_blank">Commonwealth Bank</JobTitle>, helping businesses leverage payment orchestration, anti-fraud tools, and ecommerce technology 
                            to offer seamless payments to theirs millions of customers across the globe. Each day I work with multiple internal and external teams to design, 
                            build, and deliver tailored best-fit solutions to our partners.
                        </p>
                        <p>Take a look at some of the languages and tools i've been using recently: </p>
                    </div>
                    <ul className="skills-list">
                      <li>Javascript</li>
                      <li>React</li>
                      <li>Node.js</li>
                      <li>Unreal Engine 5</li>
                      <li>Python</li>
                      <li>Discord.js</li>
                    </ul>
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
