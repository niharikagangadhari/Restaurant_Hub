import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Upload,
  Image,
  Trash2,
  Save,
  ArrowRight,
} from "lucide-react";
import {
  addMenuItem,
  getMenuItems,
  deleteMenuItem,
} from "../lib/menu";

export default function MenuSetup() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    {
      name: "Starters",
      items: [],
    },
    {
      name: "Main Course",
      items: [],
    },
    {
      name: "Desserts",
      items: [],
    },
    {
      name: "Beverages",
      items: [],
    },
  ]);
  async function loadMenu() {
  const menu = await getMenuItems();

  const grouped = categories.map((cat) => ({
    ...cat,
    items: menu
      .filter((item) => item.category === cat.name)
      .map((item) => ({
        id: item.id,
        name: item.item_name,
        description: item.description,
        price: item.price,
        prepTime: item.prep_time,
        type: item.is_veg ? "Veg" : "Non Veg",
        available: item.is_available,
      })),
  }));

  setCategories(grouped);
}

useEffect(() => {
  loadMenu();
}, []);
async function removeDish(id) {
  const { error } = await deleteMenuItem(id);

  if (error) {
    alert(error.message);
    return;
  }

  loadMenu();
}

  const [newCategory, setNewCategory] = useState("");

  const [dish, setDish] = useState({
    name: "",
    description: "",
    category: "Starters",
    price: "",
    prepTime: "",
    type: "Veg",
    available: true,
    image: null,
  });

  function addCategory() {
    if (!newCategory.trim()) return;

    setCategories([
      ...categories,
      {
        name: newCategory,
        items: [],
      },
    ]);

    setNewCategory("");
  }

  async function addDish() {
  if (!dish.name || !dish.price) {
    alert("Enter dish name and price.");
    return;
  }

  const { error } = await addMenuItem(dish);

  if (error) {
    alert(error.message);
    return;
  }

  loadMenu();

  setDish({
    name: "",
    description: "",
    category: "Starters",
    price: "",
    prepTime: "",
    type: "Veg",
    available: true,
    image: null,
  });
}

  const totalDishes = categories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  const vegCount = categories.reduce(
    (sum, cat) =>
      sum + cat.items.filter((i) => i.type === "Veg").length,
    0
  );

  const nonVegCount = totalDishes - vegCount;

  return (
    <div className="min-h-screen bg-slate-950 p-10">

      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 font-semibold">
          Step 2 of 3
        </p>

        <h1 className="text-4xl font-bold text-white mt-2">
          Menu Setup
        </h1>

        <p className="text-slate-400 mt-2">
          Build your restaurant menu for customers.
        </p>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">Categories</p>
            <h2 className="text-3xl text-white font-bold mt-2">
              {categories.length}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">Total Dishes</p>
            <h2 className="text-3xl text-white font-bold mt-2">
              {totalDishes}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">Veg Items</p>
            <h2 className="text-3xl text-green-400 font-bold mt-2">
              {vegCount}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">Non-Veg</p>
            <h2 className="text-3xl text-red-400 font-bold mt-2">
              {nonVegCount}
            </h2>
          </div>

        </div>

        {/* Add Dish */}

        <div className="bg-slate-900 rounded-3xl p-8 mt-10">

          <h2 className="text-2xl text-white font-semibold mb-6">
            Add Dish
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Dish Name"
              value={dish.name}
              onChange={(e) =>
                setDish({
                  ...dish,
                  name: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-slate-800 text-white"
            />

            <input
              placeholder="Price"
              value={dish.price}
              onChange={(e) =>
                setDish({
                  ...dish,
                  price: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-slate-800 text-white"
            />

            <textarea
              placeholder="Description"
              value={dish.description}
              onChange={(e) =>
                setDish({
                  ...dish,
                  description: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-slate-800 text-white md:col-span-2"
            />

            <select
              value={dish.category}
              onChange={(e) =>
                setDish({
                  ...dish,
                  category: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-slate-800 text-white"
            >
              {categories.map((cat) => (
                <option key={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            <input
              placeholder="Preparation Time"
              value={dish.prepTime}
              onChange={(e) =>
                setDish({
                  ...dish,
                  prepTime: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-slate-800 text-white"
            />

            <select
              value={dish.type}
              onChange={(e) =>
                setDish({
                  ...dish,
                  type: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-slate-800 text-white"
            >
              <option>Veg</option>
              <option>Non Veg</option>
            </select>

            <label className="bg-slate-800 rounded-xl p-3 text-slate-300 cursor-pointer flex items-center gap-3">
              <Image />
              Upload Dish Image
              <input
                type="file"
                hidden
              />
            </label>

          </div>

          <button
            onClick={addDish}
            className="mt-6 bg-emerald-500 px-6 py-3 rounded-xl text-white flex gap-2 items-center"
          >
            <Plus size={18} />
            Add Dish
          </button>

        </div>

        {/* Categories */}

        <div className="mt-10 grid lg:grid-cols-2 gap-8">

          {categories.map((cat) => (

            <div
              key={cat.name}
              className="bg-slate-900 rounded-3xl p-6"
            >

              <h2 className="text-2xl text-white font-semibold mb-4">
                {cat.name}
              </h2>

              {cat.items.length === 0 ? (

                <p className="text-slate-500">
                  No dishes added.
                </p>

              ) : (

                cat.items.map((item, index) => (

                  <div
                    key={index}
                    className="bg-slate-800 rounded-xl p-4 mb-4"
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="text-white font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-slate-400 text-sm">
                          {item.description}
                        </p>

                      </div>

                      <button
                        onClick={() => removeDish(item.id)}
                        className="text-red-500 hover:text-red-700"
                        >
                        <Trash2 size={18} />
                      </button>
                    

                    </div>

                    <div className="flex gap-4 mt-3">

                      <span className="text-emerald-400">
                        ₹{item.price}
                      </span>

                      <span className="text-slate-300">
                        {item.type}
                      </span>

                      <span className="text-slate-300">
                        {item.prepTime}
                      </span>

                    </div>

                  </div>

                ))

              )}

            </div>

          ))}

        </div>

        {/* Add Category */}

        <div className="bg-slate-900 rounded-3xl p-8 mt-10">

          <h2 className="text-white text-xl mb-4">
            Add New Category
          </h2>

          <div className="flex gap-4">

            <input
              value={newCategory}
              onChange={(e) =>
                setNewCategory(e.target.value)
              }
              placeholder="Example: Soups"
              className="flex-1 p-3 rounded-xl bg-slate-800 text-white"
            />

            <button
              onClick={addCategory}
              className="bg-emerald-500 px-6 rounded-xl text-white"
            >
              Add
            </button>

          </div>

        </div>

        {/* OCR */}

        <div className="bg-slate-900 rounded-3xl p-8 mt-10">

          <h2 className="text-white text-2xl font-semibold">
            Already have a Menu?
          </h2>

          <p className="text-slate-400 mt-2">
            Upload an image or PDF.
          </p>

          <div className="flex gap-5 mt-6">

            <button className="bg-slate-800 px-5 py-3 rounded-xl text-white flex items-center gap-2">
              <Upload size={18} />
              Upload PDF
            </button>

            <button className="bg-slate-800 px-5 py-3 rounded-xl text-white flex items-center gap-2">
              <Image size={18} />
              Upload Image
            </button>

          </div>

          <p className="text-yellow-400 mt-5">
            OCR Menu Recognition (Coming Soon)
          </p>

        </div>

        {/* Bottom */}

        <div className="flex justify-end mt-10">

          <button
            onClick={() => navigate("/restaurant-dashboard")}
            className="bg-emerald-500 px-8 py-4 rounded-xl text-white flex gap-3 items-center"
          >
            Continue

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </div>
  );
}