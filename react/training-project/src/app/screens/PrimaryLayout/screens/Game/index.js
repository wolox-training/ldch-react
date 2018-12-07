import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* eslint-disable import/order */
import Button from '~components/Button';
import actionCreators from '~redux/History/actions';
import { calculateWinner } from '~utils/gameUtils';

import GameDumb from './layout';

class Game extends Component {
  render() {
    const history = this.props.history.slice();
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move.toString()}>
          <Button handleClick={this.props.jumpTo} move={move}>
            {desc}
          </Button>
        </li>
      );
    });

    return <GameDumb current={current} winner={winner} xIsNext={this.props.xIsNext} moves={moves} />;
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
  stepNumber: PropTypes.number.isRequired,
  jumpTo: PropTypes.func.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  history: state.history.history,
  stepNumber: state.history.stepNumber,
  xIsNext: state.history.xIsNext
});

const mapDispatchToProps = dispatch => ({
  jumpTo: step => dispatch(actionCreators.setJumTo(step)),
  handleClick: newState => dispatch(actionCreators.handleClick(newState))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
