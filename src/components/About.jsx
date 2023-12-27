import React  from 'react';
import Hero from "./Hero";


const About = () => {
    return (
        <>
            <div className='mt-5 pt-5 about pb-4'>
                <h1 className="text-white pt-5">Who we are</h1>
                <p className="pb-5 pt-3 px-5">FilmSpot is an internet TV service. What sets FilmSpot apart is a unique combination of hit African content, first and exclusive international series, movies, the best kids’ shows, and live sport. FilmSpot was born in 2015. The service is available throughout sub-Saharan Africa and to selected diaspora markets worldwide.
                </p>
                <Hero/>
            </div>
        </>
    )


}



export default About;
