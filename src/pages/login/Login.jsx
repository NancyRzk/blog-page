import "./login.css";
async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
export default function Login({setToken}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" type="text" onChange={e => setEmail(e.target.value)}  placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
