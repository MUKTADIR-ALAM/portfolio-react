import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import ProjectsCards from '../components/ProjectsCards'

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <ProjectsCards/>
    </div>
  )
}
