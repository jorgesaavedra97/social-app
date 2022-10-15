import { SET_CURRENT_USER } from '@/redux/actions/currentUserAction';
const initialValue = null

export default function currentUserReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload.currentUser;
    default:
      return state;
  }
}
