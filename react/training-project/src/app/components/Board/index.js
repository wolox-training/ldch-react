import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import style from './styles.scss';

class Board extends Component {
  renderSquare = i => <Square value={this.props.squares[i]} key={i} onClick={() => this.props.onClick(i)} />;
  render() {
    const NUMBER_OF_COLUMNS = 3;
    return (
      <React.Fragment>
        <div className={style.boardRow}>
          {Array.from(Array(NUMBER_OF_COLUMNS).keys()).map(i => this.renderSquare(i))}
        </div>
        <div className={style.boardRow}>
          {Array.from(Array(NUMBER_OF_COLUMNS).keys()).map(i => this.renderSquare(i + 3))}
        </div>
        <div className={style.boardRow}>
          {Array.from(Array(NUMBER_OF_COLUMNS).keys()).map(i => this.renderSquare(i + 6))}
        </div>
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};

export default Board;
