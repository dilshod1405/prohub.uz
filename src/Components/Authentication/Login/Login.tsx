import React, { useState} from 'react'
import { initializeCSRF } from '../../Contexts/csrf_utils'
import { Box, Container } from '@mui/material'
import TextField from '@mui/material/TextField';
import './login.scss'
import buttons from '../../Constants/Buttons/Buttons';
import { Link } from 'react-router-dom';
import API from '../../Contexts/API';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/Auth';
import CircularProgress from '@mui/material/CircularProgress';


interface User {
  access: string;
  data: {
    id: number;
    is_staff: boolean;
  }
  refresh: string;
}

const Login:React.FC = () => {
  const [loader, setLoader] = React.useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  initializeCSRF();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    setError('');
    try {
      const response = await API.post<User>('/profile/login/', { username, password });
      const { access, data, refresh } = response.data;
      login(access, data.is_staff, data.id, refresh);
      if (data.is_staff){
        navigate('/admin-dashboard');
      } else if (!data.is_staff){
        navigate('/client-dashboard');
      }
    } catch (error) {
      console.error(error);
      setError('login yoki parol xato !');
    }
    setLoader(false);
  };
  
    return (
      <div className='login'>
          <Container maxWidth='xl'>
              <Box className='content'>
                <div className="left">
                  <h2>Shaxsiy kabinet</h2>
                  <Box onSubmit={handleLogin}
                  className='form'
                  component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField className='ask' id="standard-basic" label="username" variant="standard" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <TextField className='ask' id="standard-password-input" label="parol" type="password" autoComplete="current-password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  {error && <p className='error'>{error}</p>}
                  <p className='button'>{loader ? <CircularProgress style={{color: "#00D2D3"}} /> : buttons.enter}</p>
                  <div className="links">
                    <Link className='link' to='/register'>Ro'yxatdan o'tish</Link>
                    <Link className='link' to='/reset-password'>Parolni unutdim</Link>
                    <Link className='link' to='/'>Bosh sahifa</Link>
                  </div>
                </Box>
                </div>
                <div className="right animate__animated animate__fadeIn" />
              </Box>
          </Container>
      </div>
    )
  }

export default Login
