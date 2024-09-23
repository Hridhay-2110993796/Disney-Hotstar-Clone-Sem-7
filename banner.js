import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    db.collection("movies").doc("bannerMovie").get().then((doc) => {
      setBannerMovie(doc.data());
    });
  }, []);

  return (
    <header className="banner" style={{ backgroundImage: `url(${bannerMovie?.imageUrl})` }}>
      <div className="banner__content">
        <h1>{bannerMovie?.title}</h1>
        <p>{bannerMovie?.description}</p>
      </div>
    </header>
  );
};

export default Banner;