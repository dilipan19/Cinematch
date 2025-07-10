import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

function QuestionPage() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    genre: '',
    mood: '',
    language: '',
    duration: '',
    release: '',
    platform: '',
  });

  const genres = [
    { value: '', label: 'Select Genre' },
    { value: 'action', label: 'Action' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'romance', label: 'Romance' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'horror', label: 'Horror' },
    { value: 'animation', label: 'Animation' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'fantasy', label: 'Fantasy' },
  ];

  const moods = [
    { value: '', label: 'Select Mood' },
    { value: 'uplifting', label: 'Uplifting' },
    { value: 'exciting', label: 'Exciting' },
    { value: 'romantic', label: 'Romantic' },
    { value: 'thought-provoking', label: 'Thought-Provoking' },
    { value: 'funny', label: 'Funny' },
    { value: 'dark', label: 'Dark' },
    { value: 'inspiring', label: 'Inspiring' },
    { value: 'chill', label: 'Chill' },
    { value: 'adventurous', label: 'Adventurous' },
  ];

  const languages = [
    { value: '', label: 'Select Language' },
    { value: 'hi', label: 'Hindi' },
    { value: 'ta', label: 'Tamil' },
    { value: 'te', label: 'Telugu' },
    { value: 'ml', label: 'Malayalam' },
    { value: 'kn', label: 'Kannada' },
    { value: 'mr', label: 'Marathi' },
    { value: 'bn', label: 'Bengali' },
    { value: 'pa', label: 'Punjabi' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'or', label: 'Odia' },
    { value: 'other', label: 'Other' },
  ];

  const durations = [
    { value: '', label: 'Select Duration' },
    { value: 'short', label: 'Less than 90 min' },
    { value: 'medium', label: '90-120 min' },
    { value: 'long', label: 'Over 120 min' },
  ];

  const releases = [
    { value: '', label: 'Select Release Period' },
    { value: 'latest', label: 'Last 2 Years' },
    { value: '2010s', label: '2010-2019' },
    { value: '2000s', label: '2000-2009' },
    { value: '90s', label: '1990-1999' },
    { value: 'classic', label: 'Before 1990' },
    { value: 'any', label: 'Any' },
  ];

  const platforms = [
    { value: '', label: 'Select Platform' },
    { value: 'netflix', label: 'Netflix' },
    { value: 'prime', label: 'Amazon Prime' },
    { value: 'disney', label: 'Disney+' },
    { value: 'hulu', label: 'Hulu' },
    { value: 'hbo', label: 'HBO Max' },
    { value: 'apple', label: 'Apple TV+' },
    { value: 'other', label: 'Other/Any' },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/recommendation-page', { state: form });
  };

  // Full page style
  const fullPageStyle = {
    minHeight: '100vh',
    width: '100vw',
    background: '#f7f7fa',
    paddingTop: '5.5rem', // for fixed navbar
    display: 'flex',
    flexDirection: 'column',
  };

  const centerFormWrapper = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const formCardStyle = {
    width: '100%',
    maxWidth: 480,
    padding: '2.5rem 2rem',
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 2px 16px #0002',
  };

  return (
    <div style={fullPageStyle}>
      <Navbar />
      <div style={centerFormWrapper}>
        <div style={formCardStyle}>
          <h3 className="mb-4 text-center">What kind of movie are you in the mood for?</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="genre" className="form-label fw-bold">Genre</label>
              <select className="form-select" id="genre" name="genre" value={form.genre} onChange={handleChange} required>
                {genres.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="mood" className="form-label fw-bold">Mood</label>
              <select className="form-select" id="mood" name="mood" value={form.mood} onChange={handleChange} required>
                {moods.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="language" className="form-label fw-bold">Language</label>
              <select className="form-select" id="language" name="language" value={form.language} onChange={handleChange} required>
                {languages.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label fw-bold">Movie Length</label>
              <select className="form-select" id="duration" name="duration" value={form.duration} onChange={handleChange} required>
                {durations.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="release" className="form-label fw-bold">Release Date</label>
              <select className="form-select" id="release" name="release" value={form.release} onChange={handleChange} required>
                {releases.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="platform" className="form-label fw-bold">Streaming Platform</label>
              <select className="form-select" id="platform" name="platform" value={form.platform} onChange={handleChange} required>
                {platforms.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="d-grid">
              <button className="btn btn-danger btn-lg" type="submit" >Find Movie</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;