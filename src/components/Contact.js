import React from 'react';

const Contact = () => (
    <main className="container my-5">
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" id="message" name="message"></textarea>
                </div>
                <a href="#contact" className="btn btn-info">Jump To Top</a>
                <button type="submit" className="btn btn-dark">Send</button>
            </form>
        </section>
    </main>
);

export default Contact;
