import React, { useState } from 'react'
import styled from 'styled-components'
import { colours } from '../../config';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const StyledExperienceSection = styled.section`
    max-width: 900px;
    height: 600px;

    .inner {
        display: flex;
        color: ${colours.lightSlate};

        @media (max-width: 600px) {
            display: block;
        }
        @media (min-width: 700px) {
            min-height: 340px;
        }
    }
`;

const StyledList = styled.div`
    ul.skills-list {
      display: grid;
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
        content: '•';
        position: absolute;
        margin-top: 4px;
        left: 0;
        color: ${colours.blue};
        font-size: 14px;
        line-height: 12px;
        }
      }
    }
`

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Experience = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <StyledExperienceSection id="experience">
            <h2 className="numbered-heading">Skills & Experience</h2>
            <div className="inner">
                <Box>
                    <Tabs variant="scrollable" onChange={handleChange} value={value}>
                        <Tab label="Programming Languages" {...a11yProps(0)} style={{color: `${colours.lightSlate}`, textTransform: 'capitalize'}} className='tab'></Tab>
                        <Tab label="Libraries and Frameworks" {...a11yProps(1)} style={{color: `${colours.lightSlate}`, textTransform: 'capitalize'}}></Tab>
                        <Tab label="Tools and Platforms" {...a11yProps(2)} style={{color: `${colours.lightSlate}`, textTransform: 'capitalize'}}></Tab>
                    </Tabs>
                    <TabPanel value={value} index={0} style={{padding: '0 !important'}}>
                        <StyledList>
                            <ul className="skills-list">
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>GraphQL</li>
                                <li>SQL</li>
                            </ul>
                        </StyledList>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <StyledList>
                            <ul className="skills-list">
                                <li>React/React Native</li>
                                <li>Node.js</li>
                                <li>Discord.js</li>
                                <li>Commerce.js</li>
                                <li>Stripe.js</li>
                                <li>Jest</li>
                                <li>Express</li>
                                <li>Numpy</li>
                                <li>Beautiful Soup</li>
                                <li>Flask</li>
                            </ul>
                        </StyledList>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <StyledList>
                            <ul className="skills-list">
                                <li>Git/Github</li>
                                <li>AWS [S3, Route53, Amplify]</li>
                                <li>Commerce.js</li>
                                <li>MySQL</li>
                                <li>Shopify</li>
                                <li>Wordpress</li>
                                <li>Netlify</li>
                                <li>Unreal Engine 4 and 5</li>
                            </ul>
                        </StyledList>
                    </TabPanel>
                </Box>
            </div>
        </StyledExperienceSection>
    )
}

export default Experience;
