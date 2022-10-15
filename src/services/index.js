import axios from 'axios';
import { BASE_URL, DUMMY_APP_ID } from '@/constants'

const HEADERS = {
  headers: { 'app-id': DUMMY_APP_ID }
};

export async function fetchPosts(tag) {
  let url = `${BASE_URL}/post`;
  if (tag) {
    url = `${BASE_URL}/tag/${tag}/post`
  }

  const { data } = await axios.get(url, HEADERS)
  return data
}

export async function fetchUser(id) {
  const { data } = await axios.get(`${BASE_URL}/user/${id}`, HEADERS)
  return data
}

export function fetchComments(id) {
  return async () => {
    const { data } = await axios.get(`${BASE_URL}/post/${id}/comment`, HEADERS)
    return data
  }
}
