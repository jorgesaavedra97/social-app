import { SET_LANGUAGE } from '../actions/currentLanguageAction';
const initialValue = 'en'

export default function currentLanguageReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.currentLanguage;
    default:
      return state;
  }
}
