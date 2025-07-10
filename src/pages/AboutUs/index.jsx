import React from 'react';
import Navbar from '../../components/Navbar';



function AboutUs() {


  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '6rem 2rem 2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const subHeadingStyle = {
    marginTop: '2rem',
    marginBottom: '0.5rem',
  };

  const centerTextStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '2rem',
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <h3 style={headingStyle}>About Us</h3>
        <p>
          Welcome to <strong>CineMatch</strong> – your go-to destination for smarter movie recommendations.
        </p>

        <p>
          CineMatch was born out of a simple idea: helping people spend less time searching and more time enjoying great
          films. With thousands of movies released every year, finding something that truly fits your taste can feel
          overwhelming. That’s where we come in.
        </p>

        <p>
          We combine a love for storytelling with modern technology to create a personalized movie discovery experience.
          By integrating AI and leveraging the power of TMDB’s rich database, we aim to bring a human touch to automated
          recommendations — offering suggestions that actually make sense for you.
        </p>

        <h3 style={subHeadingStyle}>Our Mission</h3>
        <p>To make movie discovery feel effortless, intuitive, and tailored to each viewer.</p>

        <h3 style={subHeadingStyle}>Our Vision</h3>
        <p>A world where no one has to say, “I don’t know what to watch tonight.”</p>

        <h4 style={centerTextStyle}>Built with Passion</h4>
        <p>
          Whether you’re a film buff, a casual viewer, or just someone looking for a good movie night, CineMatch is here
          to guide your next great watch.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
