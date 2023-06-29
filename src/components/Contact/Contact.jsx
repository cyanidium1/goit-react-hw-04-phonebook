import css from './Contact.module.css';
import im from './1.png';
import del from './del.png';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const Contact = props => {
  const { name, id, tel } = props.contacts;
  const [state, changeState] = useState({
    backgroundColor: '#b2faa2',
    fontWeight: 400,
  });
  return (
    <li className={css.item}>
      <p className={css.name} style={state}>
        {name}
      </p>
      <p className={css.tel} style={state}>
        {tel}
      </p>
      <button
        onClick={e => {
          props.deleteItem(id);
        }}
        className={css.btn}
      >
        <img src={del} width="15px" alt="notadickpic" />
      </button>
      <button
        onClick={() => {
          if (state.fontWeight === 400) {
            changeState({
              backgroundColor: 'red',
              fontWeight: 700,
              color: 'white',
            });
          } else {
            changeState({
              backgroundColor: '#b2faa2',
              fontWeight: 400,
              color: 'black',
            });
          }
        }}
        className={css.btn}
      >
        <img src={im} width="15px" alt="notadickpic" />
      </button>
    </li>
  );
};

// Contact.propTypes = {
//   contacts: PropTypes.shape({
//     name: PropTypes.string,
//     tel: PropTypes.string,
//     id: PropTypes.string,
//   }),
//   deleteItem: PropTypes.func,
// };

export default Contact;
