import { useState } from "react";
import API from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/register", {
                name,
                email,
                password
            });
            alert(res.data);
            navigate("/");
        } catch (error) {
            alert("Registration Failed");
        }
    };
    return(
    <div className="auth-container">
        <form className="auth-box" onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit">Register</button>
            <p onClick={() => navigate("/")}>
                    Already have an account? Login
                </p>
                </form>
                </div>
                );
}
export default Register;