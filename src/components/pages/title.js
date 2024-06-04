import React from "react";
import { Link } from "react-router-dom";
export default function Title() {
  return (
    <>
    <div className="title-container">
      <div class="title">
        <h1>Welcome to Prime Video</h1>
        <h2>
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </h2>
        <Link to="/signin">
          <button>Sign in to join Prime</button>
        </Link>
      </div>
      <div className="movies">
        <img  src="images\title 1.jpg" alt="" />
      </div>
    </div>
    <div className="title-container">
    <div class="title">
        <h1>Movie rentals on Prime Video</h1>
        <h2>Early Access to new movies, before digital subscription</h2>
        <Link to="/store">
          <button>Rent now</button>
        </Link>
      </div>
      <div className="movies">
        <img src="images\title2.png" alt="" />
      </div>
    </div>
    </>
  );
}
