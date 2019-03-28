import * as Types from '../constatns/app';

const initialState = {
  list: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_DUST_API_SUCCESS: {
      return {
        ...state,
        list: payload.list
      }
    }
    default:
      return state;
  }
}

export default reducer;