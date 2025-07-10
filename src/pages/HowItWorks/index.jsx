import React from 'react';
import Navbar from '../../components/Navbar';

function HowItWorks() {
  const fullPageStyle = {
    padding: '6rem 4rem 3rem', // Extra top padding for fixed navbar
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.7',
    color: '#222',
  
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2.5rem',
  };

  const stepTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '2rem',
    marginBottom: '0.5rem',
  };

  const listItemStyle = {
    marginTop: '1rem',
    fontSize: '1rem',
  };

  const footerNoteStyle = {
    marginTop: '3rem',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#dc3545',
  };

  return (
    <div>
      <Navbar />
      <div style={fullPageStyle}>
        <h2 style={headingStyle}>How It Works</h2>

        <p>
          Finding your next favorite movie doesn’t have to be a guessing game. At <strong>CineMatch</strong>, we make movie discovery
          simple, fast, and personal. Here’s how it works:
        </p>

        <p style={stepTitleStyle}>🎯 Step 1: Tell Us What You Like</p>
        <p>
          Start by sharing your preferences — genres, moods, favorite actors, or even a movie you recently loved. You can simple Answer the questions
           and let our smart system understand your taste.
        </p>

        <p style={stepTitleStyle}>🧠 Step 2: Let AI Do the Magic</p>
        <p>
          Our intelligent recommendation engine uses <strong>AI and machine learning</strong> to analyze your input and match it with
          movies that align with your interests, mood, and viewing history.
        </p>

        <p style={stepTitleStyle}>🎬 Step 3: Browse Curated Suggestions</p>
        <p>
          Get a list of personalized movie recommendations — complete with posters, trailers, overviews, and ratings. No endless scrolling
          or guesswork.
        </p>

        <p style={stepTitleStyle}>🗂 Step 4: Explore & Save</p>
        <p>
          Dive deeper into each movie or save it for later. Whether you want something light for the evening or a deep cinematic experience,
          CineMatch helps you plan the perfect watchlist.
        </p>

        <p style={stepTitleStyle}>🔁 Step 5: Watch, Rate, Repeat</p>
        <p>
          Watched a movie? Great! Rate it or give feedback. The more you use CineMatch, the better it understands your style — and the
          smarter your recommendations get.
        </p>

        <h4 style={{ ...stepTitleStyle, marginTop: '3rem' }}>Why It Works</h4>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={listItemStyle}>✅ Powered by TMDB’s rich movie database</li>
          <li style={listItemStyle}>✅ Enhanced with AI for smart, human-like suggestions</li>
          <li style={listItemStyle}>✅ Built with React for a fast and smooth user experience</li>
          <li style={listItemStyle}>✅ Designed for movie lovers, by movie lovers</li>
        </ul>

        <p style={footerNoteStyle}>
          Ready to discover something amazing?<br />
          Start exploring with CineMatch today.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
