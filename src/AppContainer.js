import { connect } from 'react-redux';
import App from './App';
import {addSubmission } from './reducers/MainReducer';

const mapStateToProps = (state) => {
  return {
    submission: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitSubmission: (concept, randomconcepts) => {
      dispatch(addSubmission(concept, randomconcepts))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;