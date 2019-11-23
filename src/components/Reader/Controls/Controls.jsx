import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Controls = ({
  handleIncrement,
  handleDecrement,
  disabledPage,
  disabledPageLast,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={handleDecrement}
      disabled={disabledPage}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={handleIncrement}
      disabled={disabledPageLast}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  disabledPage: PropTypes.bool.isRequired,
  disabledPageLast: PropTypes.bool.isRequired,
};

export default Controls;
