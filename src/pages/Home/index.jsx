import React from 'react'
import Navbar from '../../components/Navbar'
import bannerImg from '../../assets/bannerImg1.svg'

function Home () {
  return (
    <>
      <Navbar />
      <div className=" first container-fluid mt-3 p-5" >
      <h3> Find the film that fits your mood.</h3>
      <label>
        Smart picks. Perfect vibes. Endless stories — matched just for you.
      </label>
      </div>
    </>
  );
}

export default Home