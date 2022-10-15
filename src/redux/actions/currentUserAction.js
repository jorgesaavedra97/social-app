export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function currentUserAction(newUser) {
  return {
    type: SET_CURRENT_USER,
    payload: {
      currentUser: newUser
    }
  }
}
