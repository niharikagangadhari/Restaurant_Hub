import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CustomerSignup from "./components/signup/CustomerSignup";
import RestaurantSignup from "./components/signup/RestaurantSignup";
import FoodPreferences from "./pages/FoodPreferences";
import AccountCreated from "./pages/AccountCreated";
import RestaurantDocuments from "./pages/RestaurantDocuments";
import VerificationPending from "./components/signup/VerificationPending";
import RestaurantInfo from "./pages/RestaurantInfo";
import RestaurantApproved from "./pages/RestaurantApproved";
import CustomerDashboard from "./pages/CustomerDashboard";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import ReserveTable from "./pages/ReserveTable";
import BookingSuccess from "./pages/BookingSuccess";
import Reservations from "./pages/Reservations";
import Favorites from "./pages/Favorites";
import MenuSetup from "./pages/MenuSetup";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import StaffManagement from "./pages/StaffManagement";
import Orders from "./pages/Orders";
import RestaurantReservations from "./pages/RestaurantReservations";
import Analytics from "./pages/Analytics";  
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup/customer" element={<CustomerSignup />}/>
        <Route path="/signup/restaurant" element={<RestaurantSignup />}/>
        <Route path="/food-preferences" element={<FoodPreferences />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/restaurant-documents" element={<RestaurantDocuments />} />
        <Route path="/verification-pending" element={<VerificationPending />} />
        <Route path="/restaurant-info" element={<RestaurantInfo />} />
        <Route path="/restaurant-approved" element={<RestaurantApproved />}/>
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />}/>
        <Route path="/restaurant/:id/reserve" element={<ReserveTable />}/>
        <Route path="/booking-success" element={<BookingSuccess />}/>
        <Route path="/reservations" element={<Reservations />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/menu-setup" element={<MenuSetup />} />
        <Route path="/restaurant-dashboard" element={<RestaurantDashboard />}/>
        <Route path="/staff-management" element={<StaffManagement />}/>
        <Route path="/restaurant-orders" element={<Orders />}/>
        <Route path="/restaurant-reservations" element={<RestaurantReservations />}/>
        <Route path="/analytics" element={<Analytics />}/>
       </Routes>
    </ThemeProvider>
  );
}

export default App;