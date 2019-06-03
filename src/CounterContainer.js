import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
   <button id="add" onClick={() => dispatch({ type: 'ADD' })}>+1</button>
   <button id="remove" onClick={() => dispatch({ type: 'REMOVE' })}>-1</button>
   <button id="addTen" onClick={() => dispatch({ type: 'ADDTEN' })}>+10</button>
   <button id="removeTen" onClick={() => dispatch({ type: 'REMOVETEN' })}>-10</button>
   <button id="reset" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterComponent);