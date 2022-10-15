import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Spinner } from '@/components/Spinner';
import { fetchUser } from '../services'
import { formatDate } from '../utils'
import { currentDetailUserAction } from '../redux/actions/currentDetailUserAction';
import './User.styles.css'

export function User({ id }) {
  const { data: user, error, isError, isLoading } = useQuery('user', () => {
    return fetchUser(id)
  })
  const dispatch = useDispatch();
 
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }
  
  return (
    <div className="user">
      <div className="user__card">
        <div className="user__info">
        <div className="user__user-image">
            <div className="user__user-image-circle"
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${user.picture})`
              }}
            ></div>
          </div>
          <h1 className="user__user-name">{user?.title?.toUpperCase()} {user.firstName} {user.lastName}</h1>
          <h5 className="user__title">Email: {user.email}</h5>
          <p className="user__info-content">Gender: {user.gender}</p>
          <p className="user__info-content">Date of Birth: {formatDate(user.dateOfBirth)}</p>
          <p className="user__info-content">Phone: {user.phone}</p>
          <p className="user__info-content">
            Location: {user.location.street},
              {user.location.city},
              {user.location.state},
              {user.location.country},
              {user.location.timezone}
          </p>
          <p className="user__info-content">Register date: {formatDate(user.registerDate)}</p>
          <p className="user__info-content">Update date: {formatDate(user.updatedDate)}</p>
          <a href="#" onClick={() => dispatch(currentDetailUserAction(null))} className="user__info-content">Close</a>
        </div>
      </div>
    </div>
  )
}

export default User
