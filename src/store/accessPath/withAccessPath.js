import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAccessPath } from './index'

const mapStateToProps = (state) => ({
  accessPath: state.accessPath,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setAccessPath }, dispatch)
);

export default function() {
  return compose(
    connect(mapStateToProps, mapDispatchToProps),
  )
}
