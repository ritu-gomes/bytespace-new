// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import CourseCardSection from './components/CourseCardSection/CourseCardSection'
import Courses from './components/Courses/Courses'
import CourseTopic from './components/CourseTopic/CourseTopic'
import CreatorCTA from './components/CreatorCTA/CreatorCTA'
import Footer from './components/Footer/Footer'
import GrowthSection from './components/GrowthSection/GrowthSection'
import Hero from './components/Hero/Hero'
import LearningPaths from './components/LearningPaths/LearningPaths'
import Navbar from './components/Navbar/Navbar'
import Partners from './components/Partners/Partners'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Partners></Partners>
      <Courses></Courses>
      <CourseTopic></CourseTopic>
      <CourseCardSection></CourseCardSection>
      <LearningPaths></LearningPaths>
      <GrowthSection></GrowthSection>
      <CreatorCTA></CreatorCTA>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  )
}

export default App
