import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Home = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let slides = document.getElementsByClassName('slide');
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
      }
      setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
  }, []);

  const homeContainerStyle = {
    textAlign: 'center',
    padding: '0',
    margin: '0',
    width: '100%',
    overflowX: 'hidden',
    fontFamily: 'Arial, sans-serif',
  };

  const slideshowContainerStyle = {
    width: '100%',
    height: '70vh', // Slideshow height
    position: 'relative',
    marginBottom: '50px',
    overflow: 'hidden',
  };

  const slideStyle = {
    display: 'none',
    width: '100%',
    height: '100%',
  };

  const slideImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures full coverage of the container
    objectPosition: 'center',
  };

  const infoContainerStyle = {
    margin: '0',
    padding: '0',
    width: '100%',
    backgroundColor: '#f4f4f4',
  };

  const featureStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '40px 0',
    marginBottom: '0px',
    borderBottom: '1px solid #e0e0e0',
  };

  const featureContentStyle = {
    flex: '1',
    padding: '20px',
    textAlign: 'left',
    maxWidth: '50%', // Make content and image equally split
  };

  const featureImgStyle = {
    flex: '1',
    width: '50%',
    height: '300px',
    objectFit: 'cover',
  };

  const headingStyle = {
    fontSize: '26px',
    color: '#007bff',
    marginBottom: '15px',
  };

  const textStyle = {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  };

  const footerStyle = {
    backgroundColor: '#000', // Black background for the footer
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const footerHeadingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const footerTextStyle = {
    fontSize: '16px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#f39c12', // Orange color for the button
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none', // Ensures the button doesn't have an underline
  };

  const buttonHoverStyle = {
    backgroundColor: '#e67e22', // Darker orange on hover
  };

  return (
    <div style={homeContainerStyle}>
      {/* Slideshow */}
      <div style={slideshowContainerStyle}>
        <div className="slide" style={slideStyle}>
          <img
            src="https://via.placeholder.com/1920x1080?text=Welcome+to+Goal-Based+Peer+Matching"
            alt="Welcome Slide"
            style={slideImageStyle}
          />
        </div>
        <div className="slide" style={slideStyle}>
          <img
            src="https://via.placeholder.com/1920x1080?text=Automated+Scheduling"
            alt="Scheduling Slide"
            style={slideImageStyle}
          />
        </div>
        <div className="slide" style={slideStyle}>
          <img
            src="https://via.placeholder.com/1920x1080?text=Virtual+Meeting+Integration"
            alt="Meeting Slide"
            style={slideImageStyle}
          />
        </div>
      </div>

      {/* Information Section */}
      <div style={infoContainerStyle}>
        <div style={featureStyle}>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Peer Matching"
            style={featureImgStyle}
          />
          <div style={featureContentStyle}>
            <h3 style={headingStyle}>Goal-Based Peer Matching</h3>
            <p style={textStyle}>
              Matches peers with similar learning objectives (e.g., subjects or skills) to ensure focused and effective collaboration.
            </p>
          </div>
        </div>

        <div style={featureStyle}>
          <div style={featureContentStyle}>
            <h3 style={headingStyle}>Automated Scheduling</h3>
            <p style={textStyle}>
              Automatically schedules sessions based on participant availability and preferences, syncing with calendars like Google Calendar and Outlook.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Automated Scheduling"
            style={featureImgStyle}
          />
        </div>

        <div style={featureStyle}>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Virtual Meetings"
            style={featureImgStyle}
          />
          <div style={featureContentStyle}>
            <h3 style={headingStyle}>Virtual Meeting Integration</h3>
            <p style={textStyle}>
              Seamlessly integrates with Zoom, Google Meet, or Microsoft Teams for virtual peer learning sessions.
            </p>
          </div>
        </div>

        <div style={featureStyle}>
          <div style={featureContentStyle}>
            <h3 style={headingStyle}>Reminders & Notifications</h3>
            <p style={textStyle}>
              Sends automated reminders and notifications to participants, keeping everyone informed and prepared for upcoming sessions.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Reminders"
            style={featureImgStyle}
          />
        </div>

        <div style={featureStyle}>
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Progress Tracking"
            style={featureImgStyle}
          />
          <div style={featureContentStyle}>
            <h3 style={headingStyle}>Progress Tracking & Feedback</h3>
            <p style={textStyle}>
              Allows users to track learning progress and provide feedback after each session, helping improve future collaboration and learning outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={footerStyle}>
        <h2 style={footerHeadingStyle}>Ready to Get Started?</h2>
        <p style={footerTextStyle}>
          Join us now and start collaborating with peers, scheduling your sessions, and tracking your progress today.
        </p>
        <Link
          to="/peermatching"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Find Your Peer Match
        </Link>
      </div>
    </div>
  );
};

export default Home;
