import { useNavigate } from "react-router-dom";
function RestaurantDocuments(){
    const navigate=useNavigate();
    return(
        <div className="signup-container">
            <div className="signup-form">
                <h2>Restaurant Verification</h2>
                <label>
                    FSSAI License
                </label>
                <input type="file"/>
                <label>
                    GST Certificate
                </label>
                <input type="file"/>
                <label>
                    Business Registration
                </label>
                <input type="file"/>
                <label>
                    Restaurant Photograph
                </label>
                <input type="file"/>
                <label>
                    Owner ID Proof
                </label>
                <input type="file"/>
                <button
                    onClick={()=>navigate("/verification-pending")}
                >
                    Submit for Verification
                </button>
            </div>
        </div>
    );
}
export default RestaurantDocuments;