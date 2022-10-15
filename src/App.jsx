import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Login } from '@/pages/Login'
import { Feed } from '@/pages/Feed'

function App() {
  const currentUser = useSelector(state => state.currentUser)
  console.log({currentUser})

  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <Feed />}
    </>
  )
}

export default App
