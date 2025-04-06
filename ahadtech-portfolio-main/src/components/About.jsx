import React from 'react'
import { Link } from 'react-router-dom'
import ScrollRevealWrapper from './ScrollRevealWrapper';


const About = () => {
  return (
    <>
    <ScrollRevealWrapper>
    <div>
      <section>
      <div className='flex justify-center -mt-10  mb-4 reveal'>
          <a className='font-bold text-3xl border rounded-full p-4 hover:text-gray-500 duration-700'><Link to="/about">About</Link></a>
        </div>

        <div className='flex justify-center reveal'>
          <img src={import.meta.env.BASE_URL + "/images/ahadpic11.jpg"} alt="" className='w-60 h-full border rounded-3xl'/>
        </div>

        <div className='flex justify-center mt-2 reveal'>
        <p className='font-bold text-xl'>I'm</p>
        </div>

        <div className='flex justify-center mt-2 reveal'>
          <p className='font-bold text-xl'><span>Abdulahad alias AHADTECH</span></p>
        </div>

        <div className='flex justify-center mt-2 border reveal rounded-xl p-4 border-8 rounded-full border-black bg-white text-black grid grid-col-3'>
          <p className=''>A passionate and detail-driven frontend developer with a strong foundation in building responsive, intuitive, and engaging user interfaces.
            With a solid grasp of HTML5, CSS, and JavaScript, I've been able to bring my creative visions to life. My expertise extends to ReactJS, where I've honed my skills in crafting reusable UI components, managing state changes, and optimizing application performance.
          </p>

          <p className='mt-4'>
          As a curious and dedicated learner, I'm always eager to explore new technologies, 
          best practices, and design trends. I'm excited to collaborate with others, 
          learn from their experiences, and contribute my skills to deliver exceptional
          digital products.  
          </p>

          <p className='mt-6'>
           Let's connect and create something amazing together!
          </p>
        </div>

      </section>
    </div>
    </ScrollRevealWrapper>
    </>
  )
}

export default About