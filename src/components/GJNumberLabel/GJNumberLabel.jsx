import React from 'react';
import './GJNumberLabel.scss'

function GJNumberLabel({ children, onClick }) {
  return (
    <label className="number__label" onClick={onClick}>
        {children}
    </label>
  )
}

export default GJNumberLabel