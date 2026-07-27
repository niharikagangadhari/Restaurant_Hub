import "./RestaurantSignup.css";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function RestaurantSignupForm() {
    const navigate = useNavigate();
    const [restaurant,setRestaurant] = useState({
        restaurantName:"",
        ownerName:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
    });
    const handleChange = (e)=>{
        setRestaurant({
            ...restaurant,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (restaurant.password !== restaurant.confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email: restaurant.email,
        password: restaurant.password,
        options: {
        data: {
            role: "restaurant",
            owner_name: restaurant.ownerName,
            restaurant_name: restaurant.restaurantName,
            phone: restaurant.phone,
            address: restaurant.address,
            city: restaurant.city,
            state: restaurant.state,
            pincode: restaurant.pincode,
        },
        },
    });

    if (error) {
        alert(error.message);
        return;
    }

    console.log(data);

    navigate("/restaurant-documents");
    };
    return(
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Restaurant Registration</h2>
                <input
                    type="text"
                    name="restaurantName"
                    placeholder="Restaurant Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="ownerName"
                    placeholder="Owner Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Restaurant Address"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    Continue
                </button>
            </form>
        </div>
    )
}
export default RestaurantSignupForm;