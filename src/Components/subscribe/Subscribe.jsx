import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/e55d11dd-9ab7-40a3-9a40-3e7d0ed4a7b6"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />{" "}
            <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
