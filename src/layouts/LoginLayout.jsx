import './LoginLayout.styles.css';

export function LoginLayout({ children }) {

  return (
    <div className="login-layout">
      <div>
        {children}
      </div>
    </div>
  )
}

export default LoginLayout
