import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Info from './Info/Info'

const HomePage:React.FC = () => {
    return (
      <div className='homePage'>
        <Header />
        <Banner />
        <Info />
      </div>
    )
  }

export default HomePage
