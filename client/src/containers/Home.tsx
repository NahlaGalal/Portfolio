import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const onChangeSecHandler = (section: string) => {

  }

  return (
    <>
      <Sidebar onClick={onChangeSecHandler}/>
    </>
  )
}

export default Home