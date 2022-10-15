export const SET_DETAIL_USER = 'SET_DETAIL_USER';

export function currentDetailUserAction(newUser) {
  return {
    type: SET_DETAIL_USER,
    payload: {
      currentDetailUser: newUser
    }
  }
}
