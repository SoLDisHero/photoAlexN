import React from 'react';
import Sidebar from '../components/Sidebar';
import './home.scss';
import 'animate.css';
//for picture gallery
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import Loader from 'react-loaders';
const imageSrc = Array.from({ length: 30 }, (_, index) => index + 1);

function Home() {
  return (
    <div className="home-page">
      <div className="navbar animate__animated animate__bounceInLeft animate__delay-2s">
        <Sidebar />
      </div>
      <LightGallery speed={500} plugins={[]} className="container-home">
        {imageSrc.map((val, index) => (
          <a
            className={`image image-animate _${index}`}
            key={index}
            href={require(`../assets/images/main-gallery/pic-${val}.png`)}
          >
            <img
              src={require(`../assets/images/main-gallery/pic-${val}.png`)}
              alt={index}
            />
          </a>
        ))}
      </LightGallery>
      <Loader type='ball-spin-fade-loader'/>
    </div>
  );
}

export default Home;
