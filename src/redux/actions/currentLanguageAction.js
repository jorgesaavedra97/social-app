export const SET_LANGUAGE = 'SET_LANGUAGE';

export function currentLanguageAction(newLanguage) {
  return {
    type: SET_LANGUAGE,
    payload: {
      currentLanguage: newLanguage
    }
  }
}
