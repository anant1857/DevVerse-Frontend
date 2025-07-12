import React from 'react'
import Section_1 from './Section_1.jsx'
import Section_2 from './Section_2.jsx'
import Section_3 from './Section_3.jsx'
import Section_4 from './Section_4.jsx'
import Seo from '../Seo/Seo.jsx'

const Home = () => {
  return (
    
    <>
     <Seo
        title="DevVerse"
        description="DevVerse Description"
        keywords="DevGuadian, AI"
      />
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
    </>
  )
}

export default Home
