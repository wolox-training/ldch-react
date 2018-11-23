import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actionCreators from '~redux/History/actions';

import style from './styles.scss';

class Square extends Component {
  handleClick = () => this.props.handleClick({ ...this.props });
  render() {
    return (
      <button className={style.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  handleClick: newstate => dispatch(actionCreators.handleClick(newstate))
});

Square.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
