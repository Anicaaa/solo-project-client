import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-box">
          <div className="profile-name-img">
            <img className="profile-img" src="/images/3.jpg" alt=""></img>
            <h1 className="profile-name">Amir Karim</h1>
          </div>
          <div className="profile-info">
            <p className="profile-text">
              <strong>Position: </strong>Full-Stack Developer at Mongo
            </p>
            <p className="profile-text">
              <strong>City: </strong>Nottingham and London
            </p>
            <p className="profile-text">
              <strong>Years: </strong>I lived 5 years in Nottingham and 3 years
              in London
            </p>
            <p className="profile-text">
              <strong>Description: </strong>Nottingham is where I currently
              live, working in the tech industry as a software developer. If you
              are interested to live in Nottingham, I can tell you all about the
              city, life and living hacks. I will tell you about the living
              costs, where and how to rent, employabiloty in Nottingham,
              transportation, and studies. Since I also lived in London, I can
              compare the two cities and tell you which one is best for you.
            </p>
          </div>
          <a className="book-btn" href="/book">
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
