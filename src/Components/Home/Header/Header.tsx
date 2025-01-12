import React, { useState, useEffect } from 'react'
import './header.scss'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid2';
import logo from '../../Constants/Logo'
import { Link } from 'react-router-dom';
import API from '../../Contexts/API';
import Avatar from '@mui/material/Avatar';
import buttons from '../../Constants/Buttons/Buttons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const links = [
  {
    text: 'Bosh sahifa',
    link: '/'
  },
  {
    text: 'Kurslarimiz',
    link: '/courses'
  },
  {
    text: 'Imtihonlar',
    link: '/exams'
  },
  {
    text: "Bog'lanish",
    link: '/contact'
  }
]

const Header:React.FC = () => {
  const [user, setUser] = useState<{ is_staff: boolean; first_name: string, last_name: string, photo: string} | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = localStorage.getItem("access");
      const id = localStorage.getItem("id");
      const is_staff = localStorage.getItem("is_staff");

      try {
        const response = await API.get(`/profile/control/${id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        
        setUser(response.data);
        if (is_staff !== null) {
            setUser({ is_staff: JSON.parse(is_staff) , first_name: response.data.first_name, last_name: response.data.last_name, photo: response.data.photo});
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);


    return (
      <div className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Container maxWidth="xl">
         <Grid container spacing={2}>
          <Grid size={4}>
            <Box className='logoBox'>
              <Link to='/'><img className='logo' src={logo.src} alt={logo.alt} /></Link>
            </Box>
          </Grid>
          <Grid size={8}>
            <Box className='menu'>
              {links.map((link, index) => (
                <Link key={index} to={link.link} className='link'><p>{link.text}</p></Link>
              ))}
              {user?.is_staff === true && <Link className='linker animate__animated animate__fadeInLeft' to="/admin-dashboard">{user.first_name} {user.last_name}</Link>}
              {user?.is_staff === false && <Link className='linker animate__animated animate__fadeInLeft' to="/client-dashboard">{user.first_name} {user.last_name}</Link>}
              {!user && <div style={{display: "flex", alignItems: "center"}}><Link className='linker animate__animated animate__zoomIn' to="/login">{buttons.login}</Link></div>}
              {(user?.photo == null && user) && <AccountCircleIcon style={{width: "50px", height: "50px", marginLeft: "10px",color: "hsla(245, 82%, 67%, 1)"}}/>}
              {user?.photo != null && <Avatar src={user?.photo} style={{width: "50px", height: "50px", marginLeft: "10px"}}/>}
            </Box>
          </Grid>
         </Grid>
        </Container>
      </div>
    )
  }
  
  export default Header
