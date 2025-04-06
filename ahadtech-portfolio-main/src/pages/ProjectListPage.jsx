import React from 'react';

const ProjectListPage = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <li>
            <a href="https://backendfrontflip.github.io/rest-countries/" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/rest-countries.jpg"} alt="Rest Countries API" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Rest Countries API</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/spacecadetio/advice-generator-app-main/index.html" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/advice-generator.jpg"} alt="Advice Generator" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Advice Generator</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/spacecadetio/contact-form/contactform.html" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/contact-form.jpg"} alt="Contact Form" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Contact Form</p>
            </a>
          </li>    

          <li>
            <a href="https://backendfrontflip.github.io/spacecadetio/news-homepage/newshome.html" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/news-homepage.jpg"} alt="News Hompage" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">News Hompage</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/spacecadetio/mortgage-calculator/mortgagecalc.html" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/mortgage-calculator.jpg"} alt="Mortgage Calculator" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Mortgage Calculator</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/expense-chart/" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/expense-chart.jpg"} alt="Expense Chart" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Expense Chart</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/space-tourism-website/" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/space-tourism.jpg"} alt="Space Tourism" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Space Tourism</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/conference-ticket-generator-app/" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/conference-ticket.jpg"} alt="Conference Ticket Generator" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Conference Ticket Generator</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/e-commerce-app/" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/e-commerce.jpg"} alt="E-commerce Website" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">E-commerce Website</p>
            </a>
          </li>

          <li>
            <a href="https://backendfrontflip.github.io/sign-up-form/" className="block text-center">
              <img src={import.meta.env.BASE_URL + "images/sign-up.jpg"} alt="Sign Up Form" className="w-full h-32 object-cover rounded-lg shadow-lg" />
              <p className="mt-2 font-semibold">Sign Up Form</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectListPage;
