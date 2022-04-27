import React from 'react';
import styled from 'styled-components';
import { colours, github } from '../../config'

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: 100vh;
    padding: 0px;

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }

    h1 {
        margin: 0 0 30px 4px;
        color: ${colours.blue};
        font-weight: 400;
        font-size: clamp(14px, 5vw, 16px);
        font-family: SFMono;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        color: ${colours.lightestSlate};
    }

    h3 {
        margin-top: 10px;
        color: ${colours.slate};
        line-height: 0.9;
    }
    p {
        margin: 20px 0 0;
        max-width: 540px;
        color: ${colours.slate}
    }

    .email-link {
        color: ${colours.blue};
        background-color: transparent;
        border: 1px solid ${colours.blue};
        border-radius: 4px;
        padding: 1.25rem 1.75rem;
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
        margin-top: 50px;
    }
`;

const Hero = () => {

    const one = <h1>Hey There! I'm</h1>;
    const two = <h2 className="big-heading">Kyle McSweeney.</h2>;
    const three = <h3 className="big-heading">I love to build software!</h3>;
    const four = (
        <>
        <p>
            I’m a software engineer specializing in Full 
            stack Development. I enjoy solving problems with clean, scalable solutions.
            I love designing and developing games, primarily using Unreal Engine 5.
        </p>
        </>
    );
    const five = (
        <a
        className="email-link"
        href={github}
        target="_blank"
        rel="noreferrer">
        Check out my github!
        </a>
    );

    const items = [one, two, three, four, five]

    return (
        <StyledHeroSection>
            <>
                {items.map((item, i) => (
                    <div key = {i}>{item}</div>
                ))}
            </>
        </StyledHeroSection>
    )
}

export default Hero
