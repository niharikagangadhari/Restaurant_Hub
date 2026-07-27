import { useState } from "react";
import {
  Users,
  UserPlus,
  Pencil,
  Trash2,
  Shield,
  Mail,
  Phone,
} from "lucide-react";

export default function StaffManagement() {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      role: "Manager",
      shift: "Morning",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9123456780",
      role: "Chef",
      shift: "Evening",
    },
  ]);

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Waiter",
    shift: "Morning",
  });

  function handleChange(e) {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  }

  function addEmployee() {
    if (!employee.name || !employee.email) {
      alert("Please fill all required fields.");
      return;
    }

    setStaff([
      ...staff,
      {
        id: Date.now(),
        ...employee,
      },
    ]);

    setEmployee({
      name: "",
      email: "",
      phone: "",
      role: "Waiter",
      shift: "Morning",
    });
  }

  function deleteEmployee(id) {
    setStaff(staff.filter((emp) => emp.id !== id));
  } 

  const managers = staff.filter((s) => s.role === "Manager").length;
  const chefs = staff.filter((s) => s.role === "Chef").length;
  const waiters = staff.filter((s) => s.role === "Waiter").length;

  const permissions = {
    Manager: [
      "Dashboard",
      "Reservations",
      "Orders",
      "Analytics",
      "Inventory",
      "Staff View",
    ],
    Chef: [
      "Kitchen Orders",
      "Inventory",
      "Update Order Status",
    ],
    Waiter: [
      "Reservations",
      "Orders",
      "Billing",
    ],
    Cashier: [
      "Billing",
      "Payments",
    ],
    Cleaner: [
      "Cleaning Tasks",
    ],
    Maintenance: [
      "Maintenance Requests",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-white">
        Staff Management
      </h1>

      <p className="text-slate-400 mt-2">
        Add and manage restaurant employees.
      </p>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-5 mt-8">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <Users className="text-emerald-400 mb-3" />
          <p className="text-slate-400">Total Staff</p>
          <h2 className="text-3xl font-bold text-white">
            {staff.length}
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <Shield className="text-blue-400 mb-3" />
          <p className="text-slate-400">Managers</p>
          <h2 className="text-3xl font-bold text-white">
            {managers}
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <Users className="text-yellow-400 mb-3" />
          <p className="text-slate-400">Chefs</p>
          <h2 className="text-3xl font-bold text-white">
            {chefs}
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <Users className="text-pink-400 mb-3" />
          <p className="text-slate-400">Waiters</p>
          <h2 className="text-3xl font-bold text-white">
            {waiters}
          </h2>
        </div>

      </div>

      {/* Add Employee */}

      <div className="bg-slate-900 rounded-3xl p-8 mt-10">

        <div className="flex items-center gap-3 mb-6">

          <UserPlus className="text-emerald-400" />

          <h2 className="text-2xl text-white font-semibold">
            Add Employee
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="name"
            placeholder="Full Name"
            value={employee.name}
            onChange={handleChange}
            className="bg-slate-800 p-3 rounded-xl text-white"
          />

          <input
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            className="bg-slate-800 p-3 rounded-xl text-white"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={employee.phone}
            onChange={handleChange}
            className="bg-slate-800 p-3 rounded-xl text-white"
          />

          <select
            name="role"
            value={employee.role}
            onChange={handleChange}
            className="bg-slate-800 p-3 rounded-xl text-white"
          >
            <option>Manager</option>
            <option>Chef</option>
            <option>Waiter</option>
            <option>Cashier</option>
            <option>Cleaner</option>
            <option>Maintenance</option>
          </select>

          <select
            name="shift"
            value={employee.shift}
            onChange={handleChange}
            className="bg-slate-800 p-3 rounded-xl text-white"
          >
            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>
          </select>

        </div>

        <button
          onClick={addEmployee}
          className="mt-6 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl text-white font-semibold"
        >
          Add Employee
        </button>

      </div>

      {/* Permissions */}

      <div className="bg-slate-900 rounded-3xl p-8 mt-10">

        <h2 className="text-2xl text-white mb-5">
          Role Permissions
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {Object.keys(permissions).map((role) => (

            <div
              key={role}
              className="bg-slate-800 rounded-2xl p-5"
            >

              <h3 className="text-emerald-400 font-semibold text-lg">
                {role}
              </h3>

              <ul className="mt-3 text-slate-300 space-y-2">

                {permissions[role].map((p) => (

                  <li key={p}>
                    ✔ {p}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

      {/* Staff List */}

      <div className="mt-10">

        <h2 className="text-2xl text-white font-semibold mb-5">
          Current Staff
        </h2>

        <div className="grid lg:grid-cols-2 gap-5">

          {staff.map((emp) => (

            <div
              key={emp.id}
              className="bg-slate-900 rounded-2xl p-6"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="text-xl text-white font-semibold">
                    {emp.name}
                  </h3>

                  <p className="text-emerald-400">
                    {emp.role}
                  </p>

                </div>

                <div className="flex gap-3">

                  <button>
                    <Pencil className="text-yellow-400" />
                  </button>

                  <button
                    onClick={() =>
                      deleteEmployee(emp.id)
                    }
                  >
                    <Trash2 className="text-red-400" />
                  </button>

                </div>

              </div>

              <div className="mt-4 space-y-2 text-slate-300">

                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  {emp.email}
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  {emp.phone}
                </p>

                <p>
                  Shift: {emp.shift}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}