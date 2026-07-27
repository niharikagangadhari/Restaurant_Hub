import "./VerificationPending.css";
import { useNavigate } from "react-router-dom";

function VerificationPending() {

    const navigate = useNavigate();

    return (

        <div className="verification-page">

            <div className="verification-card">

                <div className="pending-icon">⏳</div>

                <h1>Verification Pending</h1>

                <p className="subtitle">
                    Your documents have been submitted successfully.
                    Our team is currently reviewing your application.
                </p>

                <div className="progress-box">

                    <h3>Verification Progress</h3>

                    <div className="progress-step">
                        <div className="step-icon completed">✓</div>
                        Registration Submitted
                    </div>

                    <div className="progress-step">
                        <div className="step-icon completed">✓</div>
                        Documents Uploaded
                    </div>

                    <div className="progress-step">
                        <div className="step-icon current">•</div>
                        Under Review
                    </div>

                    <div className="progress-step">
                        <div className="step-icon upcoming">4</div>
                        Approval
                    </div>

                </div>

                <div className="info-box">
                    Estimated verification time: <strong>24–48 Hours</strong><br /><br />
                    Once your restaurant is approved, you'll receive a confirmation email with instructions to complete your restaurant setup.
                </div>

                {/* Demo Button */}
                <button
                    className="demo-button"
                    onClick={() => navigate("/restaurant-approved")}
                >
                    Demo: Approve Restaurant
                </button>

            </div>

        </div>

    );

}

export default VerificationPending;