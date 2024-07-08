import {useState} from 'react';

export default function RegisterPage () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register (e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
    });
    console.log(response);
    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  }

  return (
    <div className="auth-container register-container">
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}/>

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        <button>Register</button>
      </form>
    </div>
  );
}