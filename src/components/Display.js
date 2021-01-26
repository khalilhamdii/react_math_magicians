import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  let { result } = props;
  let { log } = props;
  result = result === null ? 0 : result;
  log = log === null ? '' : log;
  return (
    <div
      style={{
        height: '150px',
        background: '#858694',
        color: 'white',
        textAlign: 'right',
      }}
    >
      <div
        style={{
          height: '50px',
          padding: '5px',
          fontSize: '25px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
        {log}
      </div>
      <div
        style={{
          height: '100px',
          padding: '10px',
          fontSize: '45px',
          borderStyle: 'none',
        }}
      >
        {result}
      </div>
    </div>
  );
}
Display.propTypes = {
  result: PropTypes.string,
  log: PropTypes.string,
};
Display.defaultProps = { result: '0', log: '' };

export default Display;
