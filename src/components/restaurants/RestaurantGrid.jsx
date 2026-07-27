import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    id: 1,
    name: "Paradise Biryani",
    cuisine: "Indian • Hyderabadi",
    rating: 4.8,
    location: "Hitech City",
    tables: 42,
    time: "10 AM - 11 PM",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },

  {
    id: 2,
    name: "Barbeque Nation",
    cuisine: "Buffet",
    rating: 4.6,
    location: "Gachibowli",
    tables: 18,
    time: "12 PM - 11 PM",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },

  {
    id: 3,
    name: "Domino's Pizza",
    cuisine: "Italian",
    rating: 4.4,
    location: "Madhapur",
    tables: 26,
    time: "11 AM - 12 AM",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },

  {
    id: 4,
    name: "Burger King",
    cuisine: "Fast Food",
    rating: 4.5,
    location: "Kukatpally",
    tables: 12,
    time: "10 AM - 1 AM",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
];

export default function RestaurantGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">

      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}

    </div>
  );
}