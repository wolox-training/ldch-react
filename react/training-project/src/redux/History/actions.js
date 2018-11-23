export const actions = {
  SET_SQUARE_CLICK: '@@HISTORY/SET_SQUARE_CLICK',
  SET_JUMP_TO: '@@HISTORY/SET_JUMP_TO'
};

const actionCreators = {
  setSquareClick: newstate => ({
    type: actions.SET_SQUARE_CLICK,
    payload: newstate
  }),

  setJumTo: newstate => ({
    type: actions.SET_JUMP_TO,
    payload: newstate
  })
};

export default actionCreators;
