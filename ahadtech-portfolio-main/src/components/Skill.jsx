import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaMarker } from 'react-icons/fa';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const Skill = () => {
  return (
    <ScrollRevealWrapper>
      <div className='flex justify-center reveal'>
        <h2 className='font-bold text-3xl border rounded-b-full p-6 hover:text-gray-500'>Skills</h2>
      </div>

      <div className='flex justify-start m-4 gap-6 font-bold text-2xl mb-6 reveal'>
        <FaCircleInfo />
        <p className='border-b p-2 -mt-3'>Core Competence</p>
      </div>

      <div className='reveal'>
        <ul>
          <li className='flex flex-row gap-4 -mt-2'>
            <p className="border rounded-full p-2 font-bold text-xl m-4 mb-6">UX/UI:</p>
          </li>
          <li className='flex ml-8 border-b lg:grid-col-2'>
            <p>
              Carrying out user research, wireframe design, prototype development, 
              and high-fidelity design emphasizing usability 
              and accessibility.
            </p>
          </li>
        </ul>
      </div>

      <div className='reveal'>
        <ul className=''>
          <li className='flex flex-row gap-4'>
            <p className="border rounded-full p-2 font-bold text-xl mb-2 mt-4 m-4 mb-6">FRONTEND DEV:</p>
          </li>
          <li className='ml-8 border-b'>
            <p className='mb-3'>
              Creating clear, effective, well-documented code maintaining 
              smooth interactions, quick loading times, and cross-browser 
              compatibility.
            </p>
          </li>
        </ul>
      </div>

      <div className='reveal'>
        <ul>
          <li className='flex flex-row gap-4'>
            <p className="border rounded-full p-2 font-bold text-xl mb-3 m-4 mb-6">DESIGN SYSTEMS:</p>
          </li>
          <li className='ml-8 border-b'>
            <p className='mb-3'>
              Developing and maintaining scalable design systems 
              ensuring uniformity across brands and products.
            </p>
          </li>
        </ul>
      </div>

      <div className='flex items-start m-4 gap-6 font-bold text-2xl mb-10 mt-32 reveal'>
        <FaCircleInfo />
        <p className='border-b p-2 -mt-3'>Capability</p>
      </div>

      <div className='flex items-start m-6 text-center reveal'>
        <p className='mb-3 text-center'>
          <pre className='flex row gap-2'>
            <FaMarker className='mt-2'/> 
            Programming languages: JavaScript (ES6+), HTML5, CSS3.
          </pre>
          <pre className='flex row gap-2'>
            <FaMarker className='mt-2'/> 
            Frontend frameworks: ReactJs.        
          </pre>
          <pre className='flex row gap-2'>
            <FaMarker className='mt-2'/> 
            UI/UX design tools: Sketch & Figma.
          </pre>
          <pre className='flex row gap-2'>
            <FaMarker className='mt-2'/> 
            Version control: Git.
          </pre>
        </p>
      </div>
    </ScrollRevealWrapper>
  );
};

export default Skill;
