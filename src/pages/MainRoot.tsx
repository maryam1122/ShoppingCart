import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import Container from '@mui/material/Container'
import Footer from '../components/footer/footer'

const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Container maxWidth="xl" sx={{py:1}}>
            <Outlet/>
        </Container>
        <Footer/>
    </div>
  )
}

export default MainRoot