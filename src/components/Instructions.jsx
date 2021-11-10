import React from 'react';
import PropTypes from 'prop-types';

export default function Instructions({ instructions }) {
  return (
    <div data-testid="instructions">
      <h4>Instruções</h4>
      { instructions }
    </div>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};
