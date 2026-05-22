import React from 'react';

function HowItWorks() {
  return (
    <div className="page-content">
      <h2 className="page-heading">How It Works</h2>

      <p>
        Finding your next favorite movie doesn’t have to be a guessing game. At{' '}
        <strong className="page-accent">CineMatch</strong>, we make movie discovery
        simple, fast, and personal. Here’s how it works:
      </p>

      <p className="page-subheading">🎯 Step 1: Tell Us What You Like</p>
      <p>
        Start by sharing your preferences — genres, moods, favorite actors, or even a movie you recently loved. You can simple Answer the questions
        and let our smart system understand your taste.
      </p>

      <p className="page-subheading">🧠 Step 2: Let AI Do the Magic</p>
      <p>
        Our intelligent recommendation engine uses <strong>AI and machine learning</strong> to analyze your input and match it with
        movies that align with your interests, mood, and viewing history.
      </p>

      <p className="page-subheading">🎬 Step 3: Browse Curated Suggestions</p>
      <p>
        Get a list of personalized movie recommendations — complete with posters, trailers, overviews, and ratings. No endless scrolling
        or guesswork.
      </p>

      <p className="page-subheading">🗂 Step 4: Explore & Save</p>
      <p>
        Dive deeper into each movie or save it for later. Whether you want something light for the evening or a deep cinematic experience,
        CineMatch helps you plan the perfect watchlist.
      </p>

      <p className="page-subheading">🔁 Step 5: Watch, Rate, Repeat</p>
      <p>
        Watched a movie? Great! Rate it or give feedback. The more you use CineMatch, the better it understands your style — and the
        smarter your recommendations get.
      </p>

      <h4 className="page-subheading" style={{ marginTop: '3rem' }}>Why It Works</h4>
      <ul className="page-list">
        <li>✅ Powered by TMDB’s rich movie database</li>
        <li>✅ Enhanced with AI for smart, human-like suggestions</li>
        <li>✅ Built with React for a fast and smooth user experience</li>
        <li>✅ Designed for movie lovers, by movie lovers</li>
      </ul>

      <p className="page-footer-note">
        Ready to discover something amazing?<br />
        Start exploring with CineMatch today.
      </p>
    </div>
  );
}

export default HowItWorks;
