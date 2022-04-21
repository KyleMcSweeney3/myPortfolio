import { createGlobalStyle } from 'styled-components';
import { colours } from './config';

const GlobalStyle = createGlobalStyle`
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: ${colours.blue};
      font-family: 'SFMono';
      font-size: clamp(16px, 3vw, 20px);
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: ${colours.lightestNavy};
      
      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  ul { margin: 0; padding: 0; }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${colours.lightestSlate};
    line-height: 1.1;
  }
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  p {
    color: ${colours.slate};
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    & > a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: ${colours.blue};
        &:hover,
        &:focus,

        &:active {
            color: ${colours.blue};
            outline: 0;
            &:after {
                width: 100%;
            }
            & > * {
                color: ${colours.blue} !important;
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
        }
        &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: ${colours.blue};
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0.5;
        }
    }
    & > code {
      background-color: ${colours.lightNavy};
      color: ${colours.white};
      font-size: 14px;
      border-radius: 4px;
      padding: 0.3em 0.5em;
    }
  }

  img,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      color: ${colours.blue}
    }
    &.inline-link {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: ${colours.blue};
        &:hover,
        &:focus,
        &:active {
            color: ${colours.blue};
            outline: 0;
            &:after {
                width: 100%;
            }
            & > * {
                color: ${colours.blue} !important;
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
        }
        &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: ${colours.blue};
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0.5;
        }
    }
  }

`;
 
export default GlobalStyle;