import { useState, useEffect } from "react";
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { products } from "./data"; // Assuming your product data is in a separate file.
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const metals = {
  Kundan: {
    Necklace: ["Choker", "Long Necklace", "Rani Haar"],
    Earrings: ["Jhumka", "Chandbalis", "Studs", "Drop Earrings"],
    Rings: ["Cocktail Rings", "Stackable Rings", "Statement Rings"],
    Bracelet: ["Cuffs", "Bangles", "Bracelets"],
    Others: ["Mang Tika", "Nath", "Nose Pin", "Armlets"],
  },
  Silver: {
    Necklace: ["Pendants", "Statement Pieces"],
    Earrings: ["Hoops", "Studs", "Drop Earrings"],
    Rings: ["Solitaire Rings", "Adjustable Rings"],
    Bracelet: ["Cuffs", "Bangles"],
    Others: ["Anklets", "Brooches"],
  },
  Diamond: {
    Necklace: ["Diamond Pendant", "Solitaire", "Tennis", "Cluster"],
    Earrings: ["Studs", "Hoops", "Chandeliers"],
    Rings: ["Fashion Rings"],
    Bracelet: ["Bangles", "Fashion Bracelets"],
    Others: ["Watches", "Brooches", "Anklets"],
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMetals, setSelectedMetals] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [price, setPrice] = useState(1000); // Example for price filter
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    metals: false,
    categories: false,
    subcategories: false,
  });

  const location = useLocation(); // Access URL and query parameters
  // New state for hover effects
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    // Extract query parameters from the URL
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    const subtype = params.get("subtype");

    // Apply filter based on URL params
    if (type) {
      setSelectedMetals([type.charAt(0).toUpperCase() + type.slice(1)]);
    }
    if (subtype) {
      setSelectedCategories([
        subtype.charAt(0).toUpperCase() + subtype.slice(1),
      ]);
    }
  }, [location.search]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesMetal =
      selectedMetals.length === 0 ||
      selectedMetals.some((metal) =>
        product.id.startsWith(metal[0].toLowerCase())
      );

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesSubCategory =
      subCategories.length === 0 || subCategories.includes(product.subcategory); // Update subcategory filter

    return (
      matchesSearch && matchesMetal && matchesCategory && matchesSubCategory
    );
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMetalChange = (metal) => {
    if (selectedMetals.includes(metal)) {
      // If the metal is already selected, deselect it
      setSelectedMetals(selectedMetals.filter((m) => m !== metal));
    } else {
      // Otherwise, select the metal
      setSelectedMetals([...selectedMetals, metal]);
    }
    // Clear the categories and subcategories when a metal is selected
    setSelectedCategories([]);
    setSubCategories([]);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const getAvailableCategories = () => {
    const allCategories = new Set();
    selectedMetals.forEach((metal) => {
      Object.keys(metals[metal]).forEach((category) => {
        allCategories.add(category);
      });
    });

    if (selectedMetals.length === 0) {
      Object.keys(metals).forEach((metal) => {
        Object.keys(metals[metal]).forEach((category) => {
          allCategories.add(category);
        });
      });
    }

    return [...allCategories];
  };

  const handleSubCategoryChange = (subcategory) => {
    if (subCategories.includes(subcategory)) {
      setSubCategories(subCategories.filter((sc) => sc !== subcategory));
    } else {
      setSubCategories([...subCategories, subcategory]);
    }
  };

  const getAvailableSubCategories = (categories) => {
    const allSubCategories = new Set();

    categories.forEach((category) => {
      selectedMetals.forEach((metal) => {
        (metals[metal][category] || []).forEach((sub) => {
          allSubCategories.add(sub);
        });
      });
    });

    return [...allSubCategories];
  };

  return (
    <div className="min-h-screen bg-gray-50 font-Rubik">
      {/* Top Image */}
      <img
        src="https://i.pinimg.com/736x/da/e0/af/dae0afe558fc29c1759dfecae1cef049.jpg" // Replace with your image path
        alt="Banner"
        className="w-full h-60 object-cover brightness-50"
      />

      {/* Search Bar */}
      <div className="flex items-center p-3 mt-2 w-full">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 p-3 pl-6 rounded-full border font-rubik border-gray-300 mr-2 focus:border-black focus:outline-none" // Add focus styles
        />
        <button
          className="bg-white border border-gray-300 text-black p-3 rounded-full flex-shrink-0" // Keep the button size consistent
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <FaFilter />
        </button>
      </div>

      {/* Filter Section */}
      {showFilter && (
        <div className="fixed inset-0 bg-white z-50 p-6 max-w-[500px] overflow-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-rubik font-medium">Filters</h3>
            <button
              className="text-gray-500 text-2xl"
              onClick={() => setShowFilter(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Metal Filter */}
          <div className="mt-4">
            <h4
              className="text-lg font-rubik cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection("metals")}
            >
              Metals
              <span
                className={`ml-2 transition-transform ${
                  expandedSections.metals ? "rotate-180" : ""
                }`}
              >
                {expandedSections.metals ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h4>
            {expandedSections.metals && (
              <>
                {Object.keys(metals).map((metal) => (
                  <div key={metal} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedMetals.includes(metal)}
                      onChange={() => handleMetalChange(metal)}
                      className="mr-2 w-6 h-6 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <Link
                      to="/Catalogue"
                      className="font-rubik text-lg"
                      onClick={() => {
                        setSelectedMetals([metal]); // Optional: If you want to keep the original behavior
                        setSelectedCategories([]); // Clear selected categories
                      }}
                    >
                      {metal}
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Category Filter */}
          <div className="mt-4">
            <h4
              className="text-lg font-rubik cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection("categories")}
            >
              Categories
              <span
                className={`ml-2 transition-transform ${
                  expandedSections.categories ? "rotate-180" : ""
                }`}
              >
                {expandedSections.categories ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </h4>
            {expandedSections.categories && (
              <>
                {getAvailableCategories().map((category) => (
                  <div key={category} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2 w-6 h-6 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label className="font-rubik text-lg">{category}</label>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Subcategory Filter */}
          <div className="mt-4">
            <h4
              className="text-lg font-rubik cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection("subcategories")}
            >
              Subcategories
              <span
                className={`ml-2 transition-transform ${
                  expandedSections.subcategories ? "rotate-180" : ""
                }`}
              >
                {expandedSections.subcategories ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </h4>
            {expandedSections.subcategories && (
              <>
                {/* Display relevant subcategories based on selected categories */}
                {getAvailableSubCategories(selectedCategories).map(
                  (subcategory) => (
                    <div key={subcategory} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={subCategories.includes(subcategory)}
                        onChange={() => handleSubCategoryChange(subcategory)}
                        className="mr-2 w-6 h-6 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <label className="font-rubik text-lg">
                        {subcategory}
                      </label>
                    </div>
                  )
                )}
              </>
            )}
          </div>

          {/* Apply and Reset Buttons */}
          <div className="mt-4 flex justify-between">
            <button
              className="px-6 py-2 bg-pink-600 text-white rounded-full"
              onClick={() => {
                setShowFilter(false); // Hide filter panel
              }}
            >
              Apply
            </button>
            <button
              className="px-6 py-2 bg-gray-300 text-black rounded-full"
              onClick={() => {
                setSelectedMetals([]);
                setSelectedCategories([]);
                setSubCategories([]);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Product Listing */}
      <div className="container mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-3xl border-gray-200 p-4 relative"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <img
              src={
                hoveredProductId === product.id
                  ? product.hoverImg
                  : product.images[0]
              }
              alt={product.name}
              className="w-full h-48 rounded-3xl object-cover"
            />
            {/* Display product details on hover in desktop mode */}
            {hoveredProductId === product.id && (
              <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-xl font-rubik  mb-2">{product.name}</h2>
                <p className="text-lg font-rubik ">{product.price}</p>
              </div>
            )}
            {/* Always show details in mobile mode */}
            <div className="md:hidden block">
              <h2 className="text-xl font-rubik mt-4">{product.name}</h2>
              <p className="text-lg font-rubik ">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
