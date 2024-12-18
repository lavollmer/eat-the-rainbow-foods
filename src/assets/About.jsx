import React from 'react'
import Header from "./Header";
import Footer from "./Footer"

const About = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <h1>Our Story</h1>
            <p>This is our story.</p>
        </div>
        <div>
            <h1>Meet the Creator</h1>
            <p>Bio</p>
        </div>
        <div>
            <h1>Our Mission</h1>
            <p>Mission</p>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default About