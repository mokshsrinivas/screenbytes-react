import React from 'react';

const Reviews = () => (
    <main className="container my-5">
        <section className="reviews mb-5">
            <h2>Movie Reviews</h2>
            <input type="text" className="form-control mb-3" placeholder="Search..." />
            <div className="filters mb-3">
                <span className="mr-2">Filters:</span>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="Rating">Rating:</label>
                            <select className="form-control" id="rating">
                                <option value="">All</option>
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="ReleaseDate">Release Date:</label>
                            <select className="form-control" id="releaseDate">
                                <option value="">All</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="Genre">Genre:</label>
                            <select className="form-control" id="genre">
                                <option value="">All</option>
                                <option value="action">Action</option>
                                <option value="sci-fi">Sci-Fi</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
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
        <section className="social-media-links">
            <a href="https://facebook.com" className="btn btn-primary">Facebook</a>
            <a href="https://twitter.com" className="btn btn-info">X</a>
            <a href="https://instagram.com" className="btn btn-danger">Instagram</a>
        </section>
    </main>
);

export default Reviews;
