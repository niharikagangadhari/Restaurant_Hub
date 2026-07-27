import { useNavigate } from "react-router-dom";
import "./AccountCreated.css";

function AccountCreated() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">

        <div className="check-circle">
          ✓
        </div>

        <h1>Account Created!</h1>

        <p>
          Welcome to RestaurantHub.
          <br />
          Your account has been successfully created.
        </p>

        <button
          className="continue-btn"
          onClick={() => navigate("/food-preferences")}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default AccountCreated;