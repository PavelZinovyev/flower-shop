import React from 'react';
import classes from '../description/Description.module.css';

const Description = ({ ...props }) => {
  return <textarea {...props} className={classes.descriptionBlock}></textarea>;
};

export default Description;
