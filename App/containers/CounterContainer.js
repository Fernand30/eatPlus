import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Root from '../components/router.js';

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
  add: () => { dispatch({ type: 'ADD' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)