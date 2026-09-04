import { useLocation } from "react-router-dom";

function Results() {
    const location = useLocation();
    const score = location.state?.score || 0;
    const total = location.state?.total || 0;

    return (
        <main>
            <h2>Quiz complete</h2>
            <p>Your Score: {score}/{total}</p>
        </main>
    );
}

export default Results;