import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { Link } from 'react-router-dom';
import './buttons.scss'

const buttons = {
    login: <Link to='/login'><Button variant="contained" id='login'><LoginIcon className='icon'/> Kirish</Button></Link>,
    register: <Link to='/register'><Button variant="contained" id='register'><HowToRegIcon className='icon'/> Ro'yxatdan o'tish</Button></Link>,
    start: <Link to='/register'><Button variant="contained" id='register'><NotStartedIcon className='icon'/> Qadamni boshlash</Button></Link>,
    courses: <Link to='/courses'><Button variant="contained" id='courses'><SmartDisplayIcon className='icon'/> Kurslarimiz</Button></Link>,
}

export default buttons;