import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How HireHub Works</h3>
        <div className="banner">
          <div className="card card1">
            <FaUserPlus className="icon" />
            <p>Create Account</p>
            <p>
              Join HireHub by creating your account to access job postings and
              connect with employers.
            </p>
          </div>
          <div className="card card2">
            <MdFindInPage className="icon" />
            <p>Find a Job/Post a Job</p>
            <p>
              Search for jobs that match your skills or post job openings to
              attract qualified candidates.
            </p>
          </div>
          <div className="card card3">
            <IoMdSend className="icon" />
            <p>Apply For Job/Recruit Suitable Candidates</p>
            <p>
              Apply to jobs that interest you or recruit candidates who fit your
              company's needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
