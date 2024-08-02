import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <main className="container my-5">
        <section className="featured-reviews mb-5">
            <h2>Featured Reviews</h2>
            <div className="row">
                {/* Repeat this card structure for each movie */}
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" className="card-img-top" alt="The Avengers poster" />
                        <div className="card-body">
                            <h5 className="card-title">The Avengers</h5>
                            <p className="card-text">A team of superheroes work together to save the world from a powerful threat.</p>
                            <a href="https://www.imdb.com/title/tt0848228/" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                {/* Additional movie cards... */}
            </div>
        </section>
        <section className="popular-genres">
            <h2>Popular Genres</h2>
            <div className="row">
                <div className="col-md-4">
                    <Link to="/reviews" className="btn btn-secondary btn-block">Action</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/reviews" className="btn btn-secondary btn-block">Sci-Fi</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/reviews" className="btn btn-secondary btn-block">Comedy</Link>
                </div>
            </div>
        </section>
    </main>
);

export default Home;
