import "./RestaurantApproved.css";
import { useNavigate } from "react-router-dom";
function RestaurantApproved() {

    const navigate = useNavigate();

    return (

        <div className="approved-page">

            <div className="approved-card">

                <div className="approved-icon">
                    ✓
                </div>

                <h1>Restaurant Verified & Approved!</h1>

                <p className="subtitle">
                    Congratulations! Your restaurant has successfully completed our verification process.
                </p>

                <div className="status-box">

                    <div className="status-row">
                        <span>Status</span>
                        <span className="approved-status">Approved</span>
                    </div>

                    <div className="status-row">
                        <span>Application ID</span>
                        <span>RH-2026-00125</span>
                    </div>

                    <div className="status-row">
                        <span>Approval Date</span>
                        <span>26 July 2026</span>
                    </div>

                </div>

                <div className="message-box">

                    <h3>What's Next?</h3>

                    <ul>
                        <li>✔ Your restaurant account is now active.</li>
                        <li>✔ A confirmation email has been sent to your registered email address.</li>
                        <li>✔ Log in using your restaurant credentials.</li>
                        <li>✔ Complete your restaurant profile and start managing your business.</li>
                    </ul>

                </div>

                <button
                    className="login-btn"
                    onClick={() => navigate("/login")}
                >
                    Login to Continue
                </button>

            </div>

        </div>

    );

}

export default RestaurantApproved;