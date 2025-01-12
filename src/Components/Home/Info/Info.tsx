import { Container } from '@mui/material'
import React from 'react'
import './info.scss'
import TabList from './TabList'



const Info:React.FC = () => {

    return (
      <div className='info'>
        <Container maxWidth='xl'>
            <h1 className='title'><span>Prohub</span> platformasi kimlar uchun ?</h1>
            <div className="content" data-aos="fade-up" data-aos-duration="1500">
                <TabList/>
            </div>
        </Container>
      </div>
    )
  }

export default Info
