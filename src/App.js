import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FontSizeAdjuster from './components/FontSizeAdjuster';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import HelloWorld from './helloworld'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; 

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <FontSizeAdjuster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/hello" element={<HelloWorld />} /> {/* Add new route */}
                </Routes>
                <footer className="bg-dark text-white text-center py-2">
                    <p>&copy; 2024 ScreenBytes Website</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
