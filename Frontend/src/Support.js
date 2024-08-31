import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css'; 

function Support() {
  const [showBookmark, setShowBookmark] = useState(false);
  const [showArticles, setShowArticles] = useState(false);

  const handleContactSupportClick = () => {
    setShowBookmark(!showBookmark);
  };

  const handleSafetyResourcesClick = () => {
    setShowArticles(!showArticles);
  };

  return (
    <div className='help-support-bg'>
      <Link to="/" className='custom-link'>Back</Link>
      <h1 className='help-support-heading'>Hey Girl Pal, How can we help you?</h1>
      <div className='help-support-buttons'>
        <div className='help-support-button' onClick={handleContactSupportClick}>
          <i className="fas fa-headset contact-support-icon"></i>
          <span>Contact Support</span>
        </div>
        <div className='help-support-button' onClick={handleSafetyResourcesClick}>
          <i className="fas fa-shield-alt safety-resources-icon"></i>
          <span>Safety Resources</span>
        </div>
        <div className='help-support-button'>
          <i className="fas fa-lock privacy-security-tips-icon"></i>
          <span>Privacy, Security and Tips</span>
        </div>
      </div>
      {showBookmark && (
        <div className='bookmark-container'>
          <div className='bookmark-shape'>
            <p className='bookmark-text'>
              You Still Have A Question?<br />
              Email us @ her@gmail.com<br />
              or call @ 001 00200
            </p>
          </div>
        </div>
      )}
      {showArticles && (
        <div className='articles-container'>
          <div className='article-tile'>
            <p className='article-text'><a href='https://www.nomadicmatt.com/travel-blogs/how-to-stay-safe-in-south-africa/'>How to Stay Safe in South Africa</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://www.secura.co.za/womens-day-2021-6-tips-that-promote-safety-for-women-in-south-africa/'>Tips That Promote Safety For Women In South Africa</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://www.bridgesdvc.org/five-safety-tips-for-victims-of-domestic-violence/'>Safety Tips for Victims of Domestic Violence</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://thewarriorproject.org.za/helplines/'>Abuse Emergency Contacts</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://www.desotosheriff.com/community/tips_for_women_on_staying_safe!.php'>Tips for Women on Staying Safe</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://paladinsecurity.com/safety-tips/for-women/'>Top Five Safety Tips for Women</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://www.instructables.com/Basic-Street-Safety-for-Women/'>Basic Street Safety for Women</a></p>
          </div>
          <div className='article-tile'>
            <p className='article-text'><a href='https://www.placer.ca.gov/8848/Violence-against-women-general-safety-ti'>Violence Against Women</a></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Support;
