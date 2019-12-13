import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleNextPage = () => {
    this.setState(prevState => {
      return { publicationIndex: prevState.publicationIndex + 1 };
    });
  };

  handlePrevPage = () => {
    this.setState(prevState => {
      return { publicationIndex: prevState.publicationIndex - 1 };
    });
  };

  disableButton = target => {
    target.setAttribute('disabled', '');
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    const { id, title, text } = publication;
    return (
      <div className={styles.reader}>
        <Controls
          onPrevClick={this.handlePrevPage}
          onNextClick={this.handleNextPage}
          nextBtnDisabled={publicationIndex < items.length - 1}
          prevBtnDisabled={publicationIndex > 0}
        />
        <Publication key={id} title={title} text={text} />
        <Progress
          currentPage={publicationIndex + 1}
          totalPages={items.length}
        />
        <Controls
          onPrevClick={this.handlePrevPage}
          onNextClick={this.handleNextPage}
          nextBtnDisabled={publicationIndex < items.length - 1}
          prevBtnDisabled={publicationIndex > 0}
        />
      </div>
    );
  }
}

export default Reader;
