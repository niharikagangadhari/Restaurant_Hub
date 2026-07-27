import { supabase } from "../lib/supabase";
import { createRestaurant } from "../lib/restaurants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Store,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Image,
} from "lucide-react";

export default function RestaurantInfo() {
  const navigate = useNavigate();

  const cuisineOptions = [
    "Indian",
    "South Indian",
    "North Indian",
    "Chinese",
    "Italian",
    "Mexican",
    "Thai",
    "Japanese",
    "Cafe",
    "Bakery",
    "Seafood",
    "Street Food",
  ];

  const diningOptions = [
    "Dine-In",
    "Takeaway",
    "Delivery",
    "Outdoor Seating",
    "Buffet",
    "Private Dining",
  ];

  const [restaurant, setRestaurant] = useState({
    ownerName: "",
    ownerEmail: "",
    phone: "",

    restaurantName: "",
    description: "",

    address: "",
    city: "",
    state: "",
    pincode: "",

    cuisines: [],
    dining: [],

    openingTime: "",
    closingTime: "",
    breakStart: "",
    breakEnd: "",

    averageCost: "",

    totalTables: "",

    tableTypes: [
      {
        type: "2 Seater",
        count: 0,
      },
    ],

    parking: false,
    wifi: false,
    ac: false,
    petFriendly: false,
    wheelchair: false,

    reservationRequired: false,
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    setRestaurant({
      ...restaurant,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const toggleCuisine = (item) => {
    setRestaurant((prev) => ({
      ...prev,
      cuisines: prev.cuisines.includes(item)
        ? prev.cuisines.filter((i) => i !== item)
        : [...prev.cuisines, item],
    }));
  };

  const toggleDining = (item) => {
    setRestaurant((prev) => ({
      ...prev,
      dining: prev.dining.includes(item)
        ? prev.dining.filter((i) => i !== item)
        : [...prev.dining, item],
    }));
  };

  const addTableType = () => {
    setRestaurant((prev) => ({
      ...prev,
      tableTypes: [
        ...prev.tableTypes,
        {
          type: "",
          count: 0,
        },
      ],
    }));
  };

  const updateTable = (index, field, value) => {
    const tables = [...restaurant.tableTypes];
    tables[index][field] = value;

    setRestaurant({
      ...restaurant,
      tableTypes: tables,
    });
  };

  const removeTable = (index) => {

  if (restaurant.tableTypes.length === 1) {
    return;
  }

  const tables = restaurant.tableTypes.filter(
    (_, i) => i !== index
  );

  setRestaurant({
    ...restaurant,
    tableTypes: tables,
  });
};

  const handleContinue = async () => {

  try {

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    console.log("Current User:", user);


    if (userError) {

      console.error(userError);
      alert(userError.message);
      return;

    }


    if (!user) {

      alert("No logged in user found. Please login again.");
      return;

    }


    const restaurantData = {

      owner_id: user.id,

      restaurant_name: restaurant.restaurantName,
      owner_name: restaurant.ownerName,

      email: restaurant.ownerEmail,
      phone: restaurant.phone,


      address: restaurant.address,
      city: restaurant.city,
      state: restaurant.state,
      pincode: restaurant.pincode,


      description: restaurant.description,


      cuisine: restaurant.cuisines,
      dining_options: restaurant.dining,


      opening_time: restaurant.openingTime,
      closing_time: restaurant.closingTime,


      average_cost: restaurant.averageCost
        ? Number(restaurant.averageCost)
        : null,


      tables: restaurant.tableTypes.reduce(
        (sum, table) =>
          sum + Number(table.count || 0),
        0
      ),

    };


    console.log(
      "Restaurant Data:",
      restaurantData
    );


    const {
      data,
      error
    } = await createRestaurant(
      restaurantData
    );


    console.log(
      "Insert Response:",
      data
    );


    console.log(
      "Insert Error:",
      error
    );


    if(error){

      alert(error.message);
      return;

    }


    alert(
      "Restaurant saved successfully!"
    );


    navigate("/menu-setup");


  } catch(err) {

    console.error(err);

    alert(err.message);

  }

};

  

  return (
    <div className="min-h-screen bg-slate-950 px-8 py-12">

      <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl border border-slate-700 shadow-xl p-10">

        {/* Header */}

        <div className="mb-10">

          <p className="text-emerald-400 font-semibold">
            Step 1 of 3
          </p>

          <h1 className="text-4xl font-bold text-white mt-2">
            Restaurant Information
          </h1>

          <div className="w-full h-2 bg-slate-700 rounded-full mt-5">

            <div className="w-1/3 bg-emerald-500 h-2 rounded-full"></div>

          </div>

        </div>

        {/* Restaurant Account */}

        <h2 className="text-2xl font-bold text-white mb-6">
          Restaurant Account
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-slate-300">
              Owner Name
            </label>

            <div className="flex items-center mt-2 bg-slate-800 rounded-xl px-4">

              <User size={18} className="text-slate-400"/>

              <input
                name="ownerName"
                value={restaurant.ownerName}
                onChange={handleInput}
                className="bg-transparent w-full p-4 text-white outline-none"
                placeholder="Owner Name"
              />

            </div>

          </div>

          <div>

            <label className="text-slate-300">
              Role
            </label>

            <div className="mt-2 bg-slate-800 rounded-xl p-4 text-emerald-400 font-semibold">

              Restaurant Owner

            </div>

          </div>

          <div>

            <label className="text-slate-300">
              Business Email
            </label>

            <div className="flex items-center mt-2 bg-slate-800 rounded-xl px-4">

              <Mail size={18} className="text-slate-400"/>

              <input
                name="ownerEmail"
                value={restaurant.ownerEmail}
                onChange={handleInput}
                className="bg-transparent w-full p-4 text-white outline-none"
                placeholder="Email"
              />

            </div>

          </div>

          <div>

            <label className="text-slate-300">
              Phone Number
            </label>

            <div className="flex items-center mt-2 bg-slate-800 rounded-xl px-4">

              <Phone size={18} className="text-slate-400"/>

              <input
                name="phone"
                value={restaurant.phone}
                onChange={handleInput}
                className="bg-transparent w-full p-4 text-white outline-none"
                placeholder="Phone Number"
              />

            </div>

          </div>

        </div>

        {/* Restaurant Details */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Restaurant Details
        </h2>

        <div className="space-y-5">

          <div>

            <label className="text-slate-300">
              Restaurant Name
            </label>

            <div className="flex items-center mt-2 bg-slate-800 rounded-xl px-4">

              <Store className="text-slate-400" size={18}/>

              <input
                name="restaurantName"
                value={restaurant.restaurantName}
                onChange={handleInput}
                className="bg-transparent p-4 text-white outline-none w-full"
                placeholder="Restaurant Name"
              />

            </div>

          </div>

          <div>

            <label className="text-slate-300">
              Description
            </label>

            <textarea
              name="description"
              value={restaurant.description}
              onChange={handleInput}
              rows={5}
              className="w-full mt-2 rounded-xl bg-slate-800 border border-slate-700 p-5 text-white"
              placeholder="Tell customers about your restaurant..."
            />

          </div>

        </div>
                {/* Address */}

        <h2 className="text-2xl font-bold text-white mt-12 mb-6">
          Restaurant Address
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="address"
            value={restaurant.address}
            onChange={handleInput}
            placeholder="Street Address"
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

          <input
            name="city"
            value={restaurant.city}
            onChange={handleInput}
            placeholder="City"
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

          <input
            name="state"
            value={restaurant.state}
            onChange={handleInput}
            placeholder="State"
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

          <input
            name="pincode"
            value={restaurant.pincode}
            onChange={handleInput}
            placeholder="Pincode"
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

        </div>

        {/* Cuisine */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Cuisine Types
        </h2>

        <div className="flex flex-wrap gap-3">

          {cuisineOptions.map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => toggleCuisine(item)}
              className={`px-5 py-3 rounded-full transition ${
                restaurant.cuisines.includes(item)
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Dining */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Dining Options
        </h2>

        <div className="flex flex-wrap gap-3">

          {diningOptions.map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => toggleDining(item)}
              className={`px-5 py-3 rounded-full transition ${
                restaurant.dining.includes(item)
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Timings */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Restaurant Timings
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-slate-300">
              Opening Time
            </label>

            <input
              type="time"
              name="openingTime"
              value={restaurant.openingTime}
              onChange={handleInput}
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
            />
          </div>

          <div>
            <label className="text-slate-300">
              Closing Time
            </label>

            <input
              type="time"
              name="closingTime"
              value={restaurant.closingTime}
              onChange={handleInput}
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
            />
          </div>

          <div>
            <label className="text-slate-300">
              Break Starts
            </label>

            <input
              type="time"
              name="breakStart"
              value={restaurant.breakStart}
              onChange={handleInput}
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
            />
          </div>

          <div>
            <label className="text-slate-300">
              Break Ends
            </label>

            <input
              type="time"
              name="breakEnd"
              value={restaurant.breakEnd}
              onChange={handleInput}
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
            />
          </div>

        </div>

        {/* Pricing */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Pricing
        </h2>

        <input
          type="number"
          name="averageCost"
          value={restaurant.averageCost}
          onChange={handleInput}
          placeholder="Average Cost for Two (₹)"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
        />

        {/* Tables */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Table Arrangement
        </h2>

        {restaurant.tableTypes.map((table, index) => (

          <div
            key={index}
            className="grid grid-cols-12 gap-3 mb-4"
          >

            <input
              placeholder="Table Type"
              value={table.type}
              onChange={(e) =>
                updateTable(index, "type", e.target.value)
              }
              className="col-span-7 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
            />

            <input
              type="number"
              placeholder="Count"
              value={table.count}
              onChange={(e) =>
                updateTable(index, "count", e.target.value)
              }
              className="col-span-3 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
            />

            <button
              type="button"
              onClick={() => removeTable(index)}
              className="col-span-2 bg-red-500 rounded-xl text-white"
            >
              Delete
            </button>

          </div>

        ))}

        <button
          type="button"
          onClick={addTableType}
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl text-white"
        >
          + Add Table Type
        </button>

        {/* Amenities */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Amenities
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {[
            ["parking","Parking"],
            ["wifi","Free Wi-Fi"],
            ["ac","Air Conditioned"],
            ["petFriendly","Pet Friendly"],
            ["wheelchair","Wheelchair Accessible"],
            ["reservationRequired","Reservations Required"],
          ].map(([key,label])=>(
            <label
              key={key}
              className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl text-white"
            >
              <input
                type="checkbox"
                name={key}
                checked={restaurant[key]}
                onChange={handleInput}
              />
              {label}
            </label>
          ))}

        </div>

        {/* Images */}

        <h2 className="text-2xl text-white font-bold mt-12 mb-6">
          Restaurant Images
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <label className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-2xl p-10 text-center cursor-pointer text-slate-300">
            Upload Logo
            <input type="file" hidden />
          </label>

          <label className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-2xl p-10 text-center cursor-pointer text-slate-300">
            Cover Image
            <input type="file" hidden />
          </label>

          <label className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-2xl p-10 text-center cursor-pointer text-slate-300">
            Gallery Photos
            <input multiple type="file" hidden />
          </label>

        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-14">

          <button
            type="button"
            className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="px-10 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
}
  