import kek from '../../images/bike.gif';
import css from './SeniorCodingExamples.module.css';
import { useState } from 'react';

const Kek = () => {
  const [state, setState] = useState({
    display: 'none',
    text: 'See scheme how this code works',
  });

  return (
    <>
      <button
        className={css.btn}
        onClick={() => {
          if (state.display === 'block') {
            setState({
              display: 'none',
              text: 'See scheme how this code works',
            });
          } else {
            setState({
              display: 'block',
              text: 'Hide this masterpiece',
            });
          }
        }}
      >
        {state.text}
      </button>
      <img
        src={kek}
        alt="kek"
        style={state}
        width="420px"
        className={css.gif}
      />
    </>
  );
};

export default Kek;
