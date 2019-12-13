import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ title, text }) => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.textContent}>{text}</p>
    </article>
  );
};
Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Publication;
