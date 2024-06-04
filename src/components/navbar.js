import React, {useState, useRef, useEffect} from "react";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  const handleLanguageClick = () => {
    setShowLanguages(!showLanguages);
  };
  const handleGenreClick = () => {
    setShowGenres(!showGenres);
  }
  const handleHomeClick = () => {
    setShowHome (!showHome);
  }

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

    return (
      <nav className="nav">
        <a href="/" className="title">prime video</a>
        <ul>
          <li>
              <button onClick={handleHomeClick} className="home-button">Home</button>
              {showHome && (
              <div className="home-dropdown">
                <div className="home-column">
                <ul>
                  <li><Link to="/">All</Link></li>
                  <li><Link to="/movies">Movies</Link></li>
                  <li><Link to="/tvshows">TV Shows</Link></li>
                  </ul>
                </div>
              </div>
              )}
         </li>
          <li>
             < a href="/store">Store</a>
          </li>
          <li>
            <a href="/livetv">Live TV</a>
          </li>
          <li>
            <button onClick={handleGenreClick} className="categories-button">Categories</button>
            {showGenres && (
              <div className="genre-dropdown">
                <div className="genre-column">
                  <ul>
                    <p> Genres</p>
                    <li>Action and adventure</li>
                    <li>Anime</li>
                    <li>Comedy</li>
                    <li>Documentary</li>
                    <li>Drama</li>
                    <li>Fantasy</li>
                  </ul>
                  </div>
                <div className="genre-column">
                  <ul>        
                     <li> </li>
                    <li> </li>  
                    <li> </li>      
                    <li>Horror</li>
                    <li>Kids</li>
                    <li>Mystery and thrillers</li>
                    <li>Romance</li>
                    <li>Science fiction</li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li>
            <button onClick={handleSearchClick}><IoSearch /></button>     
          </li>
          <li>
            <a href="/signin">Try for free</a>
          </li>
          <li>
            <button onClick={handleLanguageClick} className="language-button">EN</button>
            {showLanguages && (
            <div className="language-dropdown">
              <div className="language-column">
                <ul>
                  <li>English</li>
                  <li>Deutsch</li>
                  <li>Español</li>
                  <li>Français</li>
                  <li>中文</li>
                  <li>日本語</li>
                  <li>Italiano</li>
                  <li>Português</li>
                  <li>हिन्दी</li>
                </ul>
              </div>
            </div>
          )}
          </li>
          <li className="user">
          <a href="/signin"><FaUserCircle /></a>
          </li>
        </ul>
        {showSearch && (
        <div className="search-bar">
          <input ref={searchInputRef} type="text" placeholder= "Search" />
        </div>
      )}
        </nav>
    );
  }