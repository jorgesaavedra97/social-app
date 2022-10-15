import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Posts } from '@/components/Posts'
import { User } from '@/components/User'
import { HomeLayout } from '@/layouts/HomeLayout'

export function Feed() {
  const currentDetailUser = useSelector(state => state.currentDetailUser)

  return (
    <HomeLayout>
      <Modal isOpen={currentDetailUser !== null}>
        <User id={currentDetailUser} />
      </Modal>
      <Posts />
    </HomeLayout>
  )
}

export default Feed
