import { useState } from "react";
import API from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", {
                email,
                password
            });
            alert(res.data);
            navigate("/dashboard");
         } catch (error) {
            alert("Login Failed");
        }
    };
    return (
    <div className="auth-container">
        <form className="auth-box" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p onClick={() => navigate("/register")}>
                    Create New Account
                </p>
                </form>
                </div>
                );
}
export default Login;