import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onPrevClick,
  onNextClick,
  nextBtnDisabled,
  prevBtnDisabled,
}) => {
  return (
    <section className={styles.sectionBtn}>
      <button
        className={styles.button}
        onClick={onPrevClick}
        type="button"
        disabled={!prevBtnDisabled}
      >
        <span>Назад</span>
      </button>
      <button
        className={styles.button}
        onClick={onNextClick}
        type="button"
        disabled={!nextBtnDisabled}
      >
        <span>Вперед</span>
      </button>
    </section>
  );
};
Controls.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
};
export default Controls;
