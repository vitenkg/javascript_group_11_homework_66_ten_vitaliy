import React from 'react';
import './Backdrop.css';

const Backdrop = ({show, onClick}) => {
  return show ? <div className="Backdrop" onClick={onClick}/> : null;
};

export default Backdrop;