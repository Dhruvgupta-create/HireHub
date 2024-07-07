import React from "react";
import { FaStar } from "react-icons/fa";
import { MdWork, MdLocationOn } from "react-icons/md";

const InterviewExperiences = () => {
  const experiences = [
    {
      id: 1,
      company: "Microsoft",
      role: "Software Engineer",
      location: "Redmond, WA, USA",
      experience: "It was a 4-stage interview process starting with an online coding test followed by three technical interviews.",
      rating: 4.5,
      icon: <FaStar />,
    },
    {
      id: 2,
      company: "Tesla",
      role: "Mechanical Engineer",
      location: "Fremont, CA, USA",
      experience: "The interview involved a lot of problem-solving questions related to mechanical systems and a final HR round.",
      rating: 4.0,
      icon: <FaStar />,
    },
    {
      id: 3,
      company: "Apple",
      role: "Product Designer",
      location: "Cupertino, CA, USA",
      experience: "The process was rigorous, involving multiple stages including a portfolio review and a panel interview.",
      rating: 4.7,
      icon: <FaStar />,
    },
  ];

  return (
    <div className="interviewExperiences">
      <div className="container">
        <h3>Interview Experiences</h3>
        <div className="banner">
          {experiences.map((experience) => (
            <div className="card" key={experience.id}>
              <div className="content">
                <div className="icon"><MdWork /></div>
                <div className="text">
                  <h4>{experience.company}</h4>
                  <p><strong>Role:</strong> {experience.role}</p>
                  <p><MdLocationOn /> {experience.location}</p>
                  <p><strong>Experience:</strong> {experience.experience}</p>
                </div>
              </div>
              <div className="rating">
                <p><strong>Rating:</strong> {experience.rating}</p>
                <div className="stars">{Array(Math.round(experience.rating)).fill(<FaStar />)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewExperiences;

