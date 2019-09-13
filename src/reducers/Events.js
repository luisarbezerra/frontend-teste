const initialState = {
    events:   null,
    fetching: false,
    error:    null,
}

export const events = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCHING_EVENTS':
        return { ...state, fetching: true }
    case 'FETCHED_EVENTS':
        return { ...state, events: payload, fetching: false }
    case 'FETCH_EVENTS_ERROR':
        return { ...state, error:  payload, fetching: false }
    default:
        return state;
  }
}

export default events;


