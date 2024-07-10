import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header () {
  const [userId, setUserId] = useState(null);
  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(user => {
        // setUserId(user.id);
        setUserInfo(user.id);
      });
    });
  }, []);

  function logout () {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null)
  }

  const username = userInfo?.username

  return (
    <header>
      <Link to="/">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}
        {!username && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}