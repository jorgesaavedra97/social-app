import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { Spinner } from '@/components/Spinner';
import { fetchPosts } from '../services'
import { messages } from '@/messages'
import { Post } from './Post'

export function Posts() {
  const [tag, setTag] = useState();
  const lang = useSelector(state => state.currentLanguage);
  const { data: posts, error, isError, isLoading } = useQuery(['posts', tag], () => fetchPosts(tag))
 
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }

  function handleSeeAllTags(event) {
    event.preventDefault()
    setTag(null);
  }
 
  return (
    <div className="container">
      <a className="link-filter" href="" onClick={handleSeeAllTags}>{messages[lang].FILTER_ALL}</a>
      {posts?.data?.map((post, id) => (
        <Post key={post.id} post={post} setTag={setTag} />
      ))}
    </div>
  )
}

export default Posts
