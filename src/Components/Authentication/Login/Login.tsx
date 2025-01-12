import React from 'react'
import { initializeCSRF } from '../../Contexts/csrf_utils'

const Login:React.FC = () => {

  initializeCSRF();
    return (
      <div>
        login
      </div>
    )
  }

export default Login
