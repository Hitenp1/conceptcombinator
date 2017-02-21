const ADD = 'ADD';

export const addSubmission = (concept, randomconcepts) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD,
      submission: {date: new Date().toGMTString().slice(0, -4),
                   concept : concept,
                   randomconcepts: randomconcepts.toString() }
    })
    const newState = getState()
    localStorage.submission = JSON.stringify(newState)
  }
};

export default function conceptReducer (state = [], action) {
  switch (action.type) {
    case ADD:
      return [action.submission, ...state];
    default:
      return state;
  }
};

///add submission action creation