import React from 'react'
import styled from 'styled-components'
import { colours, github } from '../config';
import IconGitHub from './icons/Github';
import IconLinkedin from './icons/LinkedIn';
import IconInstagram from './icons/Instagram'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
`

const StyledSocialLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: ${colours.lightSlate}
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: ${colours.lightSlate};
  font-family: 'SFMono';
  font-size: 13px;
  line-height: 1;
  a {
    padding: 10px;
    div {
        &:hover {
            color: ${colours.blue};
        }
    }   
  }

`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledSocialLinks>
                <ul>
                    <li>
                        <a href = "/">
                            <IconGitHub />
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <IconLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <IconInstagram />
                        </a>
                    </li>
                </ul>
            </StyledSocialLinks>
            <StyledCredit>
                <a href = { github }>
                    <div>
                        Developed by Kyle McSweeney 2022.
                    </div>
                </a>
                <br></br>
                <a href = "https://brittanychiang.com/">
                    <div>
                        Design by Brittany Chieng.
                    </div>
                </a>
            </StyledCredit>
        </StyledFooter>
    )
}

export default Footer
