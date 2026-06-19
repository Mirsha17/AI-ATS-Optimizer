import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="navbar-wrapper">

            <nav className="navbar">

                <div
                    className="logo"
                    onClick={() => navigate("/dashboard")}
                >
                    ATS Optimizer
                </div>

                <div className="nav-links">

                    <button onClick={() => navigate("/analysis")}>
                        Analyze
                    </button>

                    <button onClick={() => navigate("/history")}>
                        History
                    </button>

                    <button
                        className="login-btn"
                        onClick={logout}
                    >
                        Log In
                    </button>

                </div>

            </nav>

        </div>
    );
}

export default Navbar;