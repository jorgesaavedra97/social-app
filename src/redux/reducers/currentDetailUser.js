import { SET_DETAIL_USER } from '../actions/currentDetailUserAction';
const initialValue = null

export default function currentDetailUserReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_DETAIL_USER:
      return action.payload.currentDetailUser;
    default:
      return state;
  }
}
