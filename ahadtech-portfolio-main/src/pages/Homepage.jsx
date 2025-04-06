import { React, } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaInstagram, FaGithub, FaGreaterThan} from 'react-icons/fa';

const Homepage = () => {

  return (
    <>
      <main className="w-full max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto px-4">
        <section className="reveal">
          <div>
            <h1 className='font-bold text-2xl text-center m-6 p-6 bg-white text-black border rounded-3xl'>
              Hello!, <br /> I'm <span>Abdulahad.</span> <br /> Web Developer and Designer.
            </h1>
          </div>

          

          <div className='flex items-center justify-center reveal'>
            <img
              src={import.meta.env.BASE_URL + "/images/ahadpic12.jpg"}
              alt="Ahad"
              className='w-60 h-full border rounded-full'
            />
          </div>
        </section>

        <div>
        <Link to="/contact" className='flex justify-center mb-4 m-6 font-bold text-3xl hover:text-gray-500'>Contact</Link>
        </div>

        <div className='flex items-start flex-grid gap-4 mt-6 mb-8 m-6 justify-center reveal'>
          <a href="https://youtube.com/@codespacecadet?si=UdFs1SyHptNvrUwk" className='hover:text-gray-500'><FaYoutube /></a>
          <a href="https://github.com/backendfrontflip" className='hover:text-gray-500'><FaGithub /></a>
          <a href="https://www.instagram.com/codespacecadet?igsh=MXE0ZWlybjQ5amxm&utm_source=qr" className='hover:text-gray-500'><FaInstagram /></a>
          <a href="https://www.facebook.com/share/16EvinmePg/?mibextid=wwXIfr" className='hover:text-gray-500'><FaFacebook /></a>
        </div>

        <article className='flex justify-center mt-16'>
          <Link
            to="/about"
            className="w-40 h-40 flex items-center justify-center rounded-full bg-white text-gray-800 uppercase font-bold text-4xl lg:text-4xl animate-pulse"
          >
            <FaGreaterThan />
          </Link>
        </article>
      </main>
    </>
  );
};

export default Homepage;
