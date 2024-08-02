import React from 'react';

const About = () => (
    <main className="container my-5">
        <section className="about-us">
            <h2>About Us</h2>
            <p>Welcome to ScreenBytes, your go-to source for the latest movie reviews, ratings, and news. Our team of passionate movie enthusiasts is dedicated to providing you with in-depth reviews and insights into the world of cinema.</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="file:///Users/Moksh/Desktop/images.jpg" className="card-img-top" alt="Moksh" />
                        <div className="card-body">
                            <h5 className="card-title">Moksh</h5>
                            <p className="card-text">Hi, I am Moksh from Singapore and I love movies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default About;
