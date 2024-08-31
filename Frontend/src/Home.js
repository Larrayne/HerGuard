import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from './HerGuard.png'

const HomePage = () => {
    return (
      <div className="homepage">
        <header className="homepage-header">
          <img src={logo} className="homepage-logo" alt="HerGuard Logo" />
          <h1>Welcome to HerGaurd</h1>
          <p>Your Safety companion</p>
        </header>
        <main className="homepage-content">
          <section>
            <p>
              {" "}
              place where you can feel safe with us in your pocket, let us help
              you connect with your loved ones in dire situations and let us
              help you keep you safe.In this app you will find ways to
              communicate with your loved ones when in-need, if you do not feel
              safe just connect and share your location, a loved one out there
              will be your eyes n the way.
            </p>
            <h2>features</h2>
            <ul>
              <li>Safe Route Planning</li>
              <li>Real-Time Alerts</li>
              <li>Community Reporting</li>
              <li>Safety Resources</li>
              <li>Emergency Contacts</li>
            </ul>
          </section>
          <section>
            <h2>Get Started</h2>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </section>
        </main>

        <footer className="homepage-footer">
          <p>&copy; 2024 HerGaurd. All rights reserved.</p>
        </footer>
      </div>
    );
        };

export default HomePage;

