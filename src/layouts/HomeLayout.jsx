import { useSelector, useDispatch } from 'react-redux';
import { currentLanguageAction } from '@/redux/actions/currentLanguageAction';
import { messages } from '@/messages';
import './HomeLayout.styles.css';

export function HomeLayout({ children }) {
  const currentUser = useSelector(state => state.currentUser)
  const lang = useSelector(state => state.currentLanguage)
  const dispatch = useDispatch()

  function handleLang(lang) {
    return (event) => {
      event.preventDefault()
      dispatch(currentLanguageAction(lang))
    }
  }

  return (
    <div className="home-layout">
      <nav className="home-layout__navbar">
        <div className="home-layout__user-container">
          <div className="home-layout__user-image">
            <div className="home-layout__user-image-circle"
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${currentUser.picture})`
              }}
            ></div>
          </div>
          <div className="home-layout__user-name">
            <div>{messages[lang].HELLO} {currentUser.name}</div>
            <div>
              Lang: <a href="" onClick={handleLang('en')}>En</a> | <a href="" onClick={handleLang('es')}>Es</a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout
