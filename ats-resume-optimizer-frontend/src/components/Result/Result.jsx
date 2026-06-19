import "./Result.css";
function Result({ result }) {
    return (
    <div className="result-container">
        <h2>ATS Result</h2>
        <div className="score-box">
            {result}
        </div>
            </div>
            );
        }
        export default Result;