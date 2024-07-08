import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header () {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(user => {
        setUserId(user.id);
      });
    });
  }, []);

  function logout () {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserId(null);
  }

  return (
    <header>
      <Link to="/">MyBlog</Link>
      <nav>
        {userId && (
          <>
            <Link to="/create">Create New Post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}
        {!userId && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}