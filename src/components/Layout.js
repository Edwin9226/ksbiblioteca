import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  const containerStyle = {
    width: "90%",
    margin: "100px auto",
  };
  return (
    <div >
        <Navbar/>
        <div style={containerStyle} >{children}</div>
    </div>
  )
}

export default Layout