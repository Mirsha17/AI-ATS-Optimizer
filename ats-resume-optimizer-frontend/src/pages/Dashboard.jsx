import Navbar from "../components/Navbar/Navbar";
import "./Dashboard.css";
function Dashboard() {
    return (
    <div>
        <Navbar />
        <div className="dashboard-container">
            <div className="dashboard-box">
                <h1>Welcome to <span>AI ATS Optimizer</span></h1>
                <p className="tagline">AI-powered Resume Analyzer that evaluates your resume against real job descriptions and helps you improve your selection chances instantly.</p>
                <p className="description">
                        Upload your resume text, compare it with job descriptions, and get an instant ATS score, missing skills, and smart improvement suggestions.
                        Built to help students and professionals crack interviews faster with AI-driven insights.
                </p>
                <div className="stats">
                <div className="card">⚡ Instant Analysis</div>
                <div className="card">🎯 Skill Matching</div>
                <div className="card"> 📊 ATS Scoring</div>
                </div>
                </div>
                </div>
                </div>
                );
            }
            export default Dashboard;