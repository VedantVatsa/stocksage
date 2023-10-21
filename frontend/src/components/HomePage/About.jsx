import React from "react";

const About = () => {
  return (
    <div className="about-container bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-16">
      <section className="about-hero text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-300">
            Welcome to the Metaverse
          </h1>
          <p className="text-lg">
            Unleash the future of digital experiences.
          </p>
        </div>
      </section>

      <section className="about-description py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
            Who We Are in the Metaverse
          </h2>
          <p className="text-gray-300">
            We are pioneers in the Metaverse, combining innovation and technology to redefine how people interact and connect in virtual worlds. Our commitment to excellence drives us to create immersive experiences that push the boundaries of what's possible in the digital realm.
          </p>
        </div>
      </section>

      <section className="about-values py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
            Our Metaverse Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-900 bg-opacity-90 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-yellow-300">
                Innovation
              </h3>
              <p className="text-gray-300">
                We push the boundaries of the Metaverse, embracing cutting-edge technologies and creative solutions to create immersive experiences that transport users to new dimensions.
              </p>
            </div>
            <div className="p-6 bg-purple-900 bg-opacity-90 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-yellow-300">
                Quality
              </h3>
              <p className="text-gray-300">
                Our commitment to quality ensures that every interaction in the Metaverse is exceptional. We take pride in delivering high-quality, glitch-free experiences that captivate users.
              </p>
            </div>
            <div className="p-6 bg-purple-900 bg-opacity-90 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-yellow-300">
                Community Focus
              </h3>
              <p className="text-gray-300">
                We understand that the Metaverse thrives on its community. We prioritize fostering an inclusive and engaging environment, where our users contribute to our evolving digital universe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
