import * as React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PolicyUsed({data}) {
  return (
    <>
      {data.map((item, index) => (
        <Accordion>
          <AccordionSummary
            key={item.id}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}>
            Policy {index + 1}
          </AccordionSummary>
          <AccordionDetails>{item.value}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
