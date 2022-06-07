import React from 'react'
import styled from 'styled-components';
import { colours, email } from '../../config';

const StyledContactSection = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;

    @media (max-width: 768px) {
        margin: 0 auto 50px;
    }

    .overline {
    display: block;
    margin-bottom: 20px;
    color: ${colours.blue};
    font-family: 'SFMono';
    font-size: 16px;
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: 14px;
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
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
`

const Contact = () => {
    return (
        <StyledContactSection id='contact'>
            <h2 className="numbered-heading overline">Let's have a chat!</h2>
            <h2 className="title">Get In Touch</h2>

            <p>
              Whether you're just up for a chat, have any questions, or want to talk about a new opportunity, my email is always open. Feel free to 
              send across an email and I'll be sure to get back to you!
            </p>
            <a className="email-link" href={`mailto:${email}`}>
                Say Hello! 👋  
            </a>
        </StyledContactSection>
    )
}

export default Contact;
