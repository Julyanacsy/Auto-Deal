import React from 'react';
import Button from '../components/Button';
import './About.css';
import julieImg from '../../pictures/julie.jpg';
import janNicoleImg from '../../pictures/janicole.jpg';
import sheerImg from '../../pictures/sheer.jpg';

const About = ({ onPageChange }) => {
  const teamMembers = [
    {
      name: "Julianne Magcuha",
      position: "CEO & Founder",
      image: julieImg,
      description: "10 years in the automotive industry"
    },
    {
      name: "Jan Nicole Magtibay",
      position: "Sales Director",
      image: janNicoleImg,
      description: "Expert in customer relations"
    },
    {
      name: "Sheer Ashly Montoya",
      position: "Technical Manager",
      image: sheerImg,
      description: "Certified automotive technician"
    }
  ];

  const stats = [
    { number: "300+", label: "Cars Sold" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="about-page">
      <div className="container">
    
        <section className="about-hero">
          <h1>About Auto Deal</h1>
          <p className="hero-subtitle">
            Your trusted partner in finding the perfect vehicle for your needs
          </p>
        </section>

        <section className="company-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Auto Deal has been serving customers with integrity and excellence for over 5 years. 
              We started as a small family business with a simple mission: to help people find their dream cars 
              at fair prices with exceptional service.
            </p>
            <p>
              Today, we've grown into one of the most trusted automotive dealerships in the region, but we've never 
              lost sight of our core values. Every car we sell undergoes rigorous inspection, and every customer 
              receives personalized attention from our experienced team.
            </p>
            <div className="story-buttons">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => onPageChange('carlistings')}
              >
                Browse Our Cars
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => onPageChange('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" 
              alt="Auto Deal Showroom"
              className="hero-img"
            />
          </div>
        </section>

        <section className="stats-section">
          <h2>Our Achievements</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our experienced professionals are dedicated to providing you with the best car buying experience.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>We build lasting relationships through honest, transparent business practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>Every vehicle is thoroughly inspected and meets our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every interaction and transaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We embrace new technologies to improve your car buying experience.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
