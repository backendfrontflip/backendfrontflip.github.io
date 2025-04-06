import React from 'react'
import { Link } from 'react-router-dom'
import ScrollRevealWrapper from './ScrollRevealWrapper'

const Projects = () => {
  return (
    <>
    <ScrollRevealWrapper>
    <section>
    <div className='flex justify-center reveal'>
        <h2 className='font-bold text-3xl border rounded-b-full p-6 hover:text-gray-500'>Projects</h2>
      </div>

      <div className='border reveal rounded-2xl bg-white text-black p-4 m-6 text-center'>
        <p>
         On this page, we'll explore together and hopefully it was worth your while <br />
        </p>

        <p className='mt-4'>
        As a detail-driven frontend developer, 
        i've worked on a few interesting UX/UI design.
        </p>
      </div>

      <div className='border reveal rounded-2xl bg-white text-black p-4 m-6 text-center'>
        <p>
          With passion for delivering exceptional frontend designs, click on the button below
        </p>
      </div>

      <article className='flex justify-center reveal'>
          <Link
            to="/projectlistpage"
            className="w-52 h-52 flex items-center justify-center rounded-full bg-white text-gray-800 uppercase font-bold text-4xl lg:text-4xl animate-pulse"
          >
            EXPLORE
          </Link>
        </article>
    </section>
    </ScrollRevealWrapper>
    </>
  )
}

export default Projects