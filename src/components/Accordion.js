import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    zIndex: '99',
    borderRadius: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="primary" className={classes.heading}>
            Više informacija
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ovde ce biti vise informacija o apartmanu Ovde ce biti vise
            informacija o apartmanu Ovde ce biti vise informacija o apartmanu
            Ovde ce biti vise informacija o apartmanu Ovde ce biti vise
            informacija o apartmanu Ovde ce biti vise informacija o apartmanu
            Ovde ce biti vise informacija o apartmanu
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
