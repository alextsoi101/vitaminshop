import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const NavDropdownMobile = (props) => {

  return (
    <div className="navdropdownmobile">
      <Accordion
          disableGutters 
          elevation={0}
          square
          sx={{
            boxShadow: 'none',
          }}
        >
        <AccordionSummary
          aria-controls="panel1a-content"
          expandIcon={<ExpandMoreIcon />}
          sx={{
            boxShadow: 'none', 
            minHeight: '36px',
            height: '36px',
            padding: '0px',
            marginTop: '0px',
          }}
          
        >
          <li className="navdropdownmobile-toggle">
            {props.title}
          </li>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            padding: '0px',
          }}
        >
          <ul className="navdropdownmobile-menu">
            {props.items.map((item, index) => 
              <Link to={item.link} key={index}>
                <li 
                  key={index}
                  className="navdropdownmobile-menu-item"
                  onClick={props.closeNavBarModal}
                >
                  {item.text}
                </li>
              </Link>
            )}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default NavDropdownMobile;