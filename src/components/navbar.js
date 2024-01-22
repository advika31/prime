import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
export default function Navbar() {
    return (
      <nav className="nav">
        <a href="/" className="title">prime video</a>
        <ul>
          <li>
              <a href="/home">Home</a>
          </li>
          <li>
             < a href="/store">Store</a>
          </li>
          <li>
            <a href="/livetv">Live TV</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <button><IoSearch /></button>     
          </li>
          <li>
            <a href="/signin">Try for free</a>
          </li>
          <li>
            <a href="/">EN</a>
          </li>
          <li className="user">
          <a href="/signin"><FaUserCircle /></a>
          </li>
        </ul>
        </nav>
    )}