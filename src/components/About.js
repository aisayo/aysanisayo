import img from '../assets/me.png';
function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-rose-400">
            Hey! I'm Aysan
            <br className="hidden lg:inline-block" />I enjoy building dynamic
            full stack web applications!
          </h1>
          <p className="mb-8 leading-relaxed">
            Need to replace with a self summary
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-900 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-900 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded hover:outline outline-offset-2 outline-pink-500"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
