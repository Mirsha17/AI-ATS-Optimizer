import { useState } from "react";
import API from "../../services/ApiService";
import Result from "../Result/Result";
import "./ResumeForm.css";
function ResumeForm() {
    const [email, setEmail] = useState("");
    const [resumeText, setResumeText] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState("");
    const handleAnalyze = async () => {
        try {
            const res = await API.post("/resume/analyze", {
                email,
                resumeText,
                jobDescription
            });
            setResult(res.data);
        } catch (error) {
            alert("Analysis Failed");
        }

    };
    return (
    <div className="resume-container">
        <h2>Resume Analyzer</h2>
        <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
        placeholder="Paste Resume Text"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        />
        <textarea
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        />
        <button onClick={handleAnalyze}>
        Analyze Resume
        </button>
        {result && <Result result={result} />}
        </div>
        );
    }
    export default ResumeForm;