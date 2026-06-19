import { useState } from "react";
import API from "../../services/ApiService";
import "./History.css";
function History() {
    const [email, setEmail] = useState("");
    const [history, setHistory] = useState([]);
    const fetchHistory = async () => {
        try {
            const res = await API.get(`/history/${email}`);
            setHistory(res.data);
        } catch (error) {
            alert("Failed to fetch history");
        }
    };
    return (
    <div className="history-container">
        <h2>Analysis History</h2>
        <div className="search-box">
            <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={fetchHistory}>
                    Get History
            </button>
            </div>\
            <div className="history-list">
                {history.length === 0 ? (
                    <p>No history found</p>
                ) : (
                    history.map((item, index) => (
                        <div key={index} className="history-card">
                            <p><b>Resume:</b> {item.resumeText?.slice(0, 100)}...</p>
                            <p><b>Job:</b> {item.jobDescription?.slice(0, 100)}...</p>
                            <p><b>Result:</b> {item.result}</p>
                        </div>
                    ))
                )}
                </div>
                </div>
                );
            }
            export default History;