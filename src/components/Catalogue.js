import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Solitaire Ring",
    price: "$100",
    category: "Rings",
    img: "https://i.pinimg.com/564x/87/e6/ba/87e6baef6cc283ba7e2abbc1bdeaf00d.jpg",
    description: "A classic solitaire ring with a brilliant diamond.",
  },
  {
    id: 2,
    name: "Eternity Ring",
    price: "$110",
    category: "Rings",
    img: "https://i.pinimg.com/564x/fc/99/7c/fc997c059ee52f1fe1ccbf727babadc3.jpg",
    description: "Sparkling eternity ring with diamonds around the band.",
  },
  {
    id: 3,
    name: "Cocktail Ring",
    price: "$120",
    category: "Rings",
    img: "https://i.pinimg.com/564x/fc/99/7c/fc997c059ee52f1fe1ccbf727babadc3.jpg",
    description: "Stylish cocktail ring, perfect for any occasion.",
  },
  {
    id: 4,
    name: "Cluster Ring",
    price: "$130",
    category: "Rings",
    img: "https://i.pinimg.com/564x/45/3a/a8/453aa835b9fc254574e885ef54912b79.jpg",
    description: "Stunning cluster ring featuring multiple sparkling stones.",
  },
  {
    id: 5,
    name: "Vintage Ring",
    price: "$140",
    category: "Rings",
    img: "https://i.pinimg.com/564x/40/43/ff/4043ff2fd1d89b158437004518a9fd91.jpg",
    description: "Timeless vintage ring with intricate details.",
  },
  {
    id: 6,
    name: "Art Deco Ring",
    price: "$150",
    category: "Rings",
    img: "https://i.pinimg.com/564x/b1/ea/0f/b1ea0f17c5704b8488dd666ee8b8b21d.jpg",
    description: "Elegant Art Deco ring with a unique design.",
  },
  {
    id: 7,
    name: "Signet Ring",
    price: "$160",
    category: "Rings",
    img: "https://i.pinimg.com/736x/7e/4f/da/7e4fdaa9b5848f16d68b5948524d9c62.jpg",
    description: "Classic signet ring, a symbol of heritage and style.",
  },
  {
    id: 8,
    name: "Band Ring",
    price: "$170",
    category: "Rings",
    img: "https://i.pinimg.com/736x/1a/71/2a/1a712a490ffc36b1bf0ccd846de7aae3.jpg",
    description: "Sleek band ring, perfect for stacking.",
  },
  {
    id: 9,
    name: "Midi Ring",
    price: "$180",
    category: "Rings",
    img: "https://i.pinimg.com/736x/07/02/14/0702143151b3d399754caaf3e515f641.jpg",
    description: "Trendy midi ring for a chic look.",
  },
  {
    id: 10,
    name: "Stacking Ring",
    price: "$190",
    category: "Rings",
    img: "https://i.pinimg.com/736x/d7/83/72/d78372275e7b658234d8682bcb5733a3.jpg",
    description: "Versatile stacking ring to mix and match.",
  },
  {
    id: 11,
    name: "Promise Ring",
    price: "$200",
    category: "Rings",
    img: "https://i.pinimg.com/564x/74/f1/fb/74f1fbc6f0a84312ba4c25e977c04dcd.jpg",
    description: "Beautiful promise ring to symbolize commitment.",
  },
  {
    id: 12,
    name: "Pendant Necklace",
    price: "$100",
    category: "Necklaces",
    img: "https://i.pinimg.com/736x/d1/06/10/d106102e4b9d966223025ff6375b1048.jpg",
    description: "Elegant pendant necklace, perfect for layering.",
  },
  {
    id: 13,
    name: "Choker Necklace",
    price: "$110",
    category: "Necklaces",
    img: "https://i.pinimg.com/564x/ee/bb/9c/eebb9c522838026b80b208e70dc1681c.jpg",
    description: "Stylish choker necklace for a trendy look.",
  },
  {
    id: 14,
    name: "Statement Necklace",
    price: "$120",
    category: "Necklaces",
    img: "https://i.pinimg.com/564x/9c/25/13/9c251393465672a86bf1a9f0fdc53f4a.jpg",
    description: "Bold statement necklace to elevate any outfit.",
  },
  {
    id: 15,
    name: "Lariat Necklace",
    price: "$130",
    category: "Necklaces",
    img: "https://i.pinimg.com/736x/35/38/58/35385827518d1979062da79a65d5d1e6.jpg",
    description: "Chic lariat necklace for a modern touch.",
  },
  {
    id: 16,
    name: "Tennis Necklace",
    price: "$140",
    category: "Necklaces",
    img: "https://i.pinimg.com/564x/d9/e0/df/d9e0df7f826fe1f2211db3e512cb5529.jpg",
    description: "Classic tennis necklace with sparkling stones.",
  },
  {
    id: 17,
    name: "Pearl Necklace",
    price: "$150",
    category: "Necklaces",
    img: "https://i.pinimg.com/564x/74/c6/f9/74c6f9e442ccfe5b3c65e3e55d50929d.jpg",
    description: "Timeless pearl necklace for elegance.",
  },
  {
    id: 18,
    name: "Rope Necklace",
    price: "$160",
    category: "Necklaces",
    img: "https://i.pinimg.com/564x/6a/5d/8d/6a5d8d3421576a1a2edc7f59dde9f758.jpg",
    description: "Stylish rope necklace with a unique twist.",
  },
  {
    id: 19,
    name: "Chain Necklace",
    price: "$170",
    category: "Necklaces",
    img: "https://i.pinimg.com/564x/07/f6/b6/07f6b66a154f7f18be79fcd2284c55b5.jpg",
    description: "Classic chain necklace for a versatile look.",
  },
  {
    id: 20,
    name: "Tennis Bracelet",
    price: "$100",
    category: "Bracelets",
    img: "https://i.pinimg.com/564x/85/32/1d/85321d10910672a8dbef1219761b16e6.jpg",
    description: "Elegant tennis bracelet with sparkling stones.",
  },
  {
    id: 21,
    name: "Cuff Bracelet",
    price: "$110",
    category: "Bracelets",
    img: "https://i.pinimg.com/564x/20/40/db/2040db6cec2a11878c937ef4f4bdf83f.jpg",
    description: "Stylish cuff bracelet for a bold statement.",
  },
  {
    id: 22,
    name: "Bangle Bracelet",
    price: "$120",
    category: "Bracelets",
    img: "https://i.pinimg.com/564x/43/c6/ce/43c6ce79a2fe87e232dc7f6a9848c431.jpg",
    description: "Beautiful bangle bracelet for stacking.",
  },
  {
    id: 23,
    name: "Charm Bracelet",
    price: "$130",
    category: "Bracelets",
    img: "https://i.pinimg.com/564x/1c/e7/fe/1ce7fec19782fbd5651b8fe4dcfbbc1a.jpg",
    description: "Fun charm bracelet with interchangeable charms.",
  },
  {
    id: 24,
    name: "Leather Bracelet",
    price: "$140",
    category: "Bracelets",
    img: "https://i.pinimg.com/564x/6d/bb/2b/6dbb2ba3d560790f3e311a3433832d0a.jpg",
    description: "Trendy leather bracelet for a casual look.",
  },
  {
    id: 25,
    name: "Hoop Earrings",
    price: "$100",
    category: "Earrings",
    img: "https://i.pinimg.com/564x/b4/cd/c3/b4cdc3d165fe50a27d88b4646f4ba308.jpg",
    description: "Classic hoop earrings for everyday wear.",
  },
  {
    id: 26,
    name: "Stud Earrings",
    price: "$110",
    category: "Earrings",
    img: "https://i.pinimg.com/564x/12/f1/4a/12f14a9b37fb4ce596f997410373f8c3.jpg",
    description: "Simple stud earrings that go with everything.",
  },
  {
    id: 27,
    name: "Drop Earrings",
    price: "$120",
    category: "Earrings",
    img: "https://i.pinimg.com/736x/a2/c0/d2/a2c0d250dded6a4401082282bae318a5.jpg",
    description: "Elegant drop earrings for special occasions.",
  },
  {
    id: 28,
    name: "Chandelier Earrings",
    price: "$130",
    category: "Earrings",
    img: "https://i.pinimg.com/736x/91/6e/11/916e11d3d7f35aa3549c6a0c484a74b0.jpg",
    description: "Stunning chandelier earrings that catch the light.",
  },
  {
    id: 29,
    name: "Ear Cuffs",
    price: "$140",
    category: "Earrings",
    img: "https://i.pinimg.com/736x/de/02/14/de02145d1dd3712c1dd7bb0d2fad3325.jpg",
    description: "Trendy ear cuffs for a unique look.",
  },
  {
    id: 30,
    name: "Threader Earrings",
    price: "$150",
    category: "Earrings",
    img: "https://i.pinimg.com/564x/a6/9b/63/a69b632d4a0727c38f2528b41b51b195.jpg",
    description: "Sleek threader earrings for an elegant touch.",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null);
    setShowAddressForm(false);
    window.scrollTo({ top: 130, behavior: "smooth" });
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    setShowAddressForm(true);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 font-Rubik">
      <div className="relative">
        <img
          src="https://i.pinimg.com/originals/da/e0/af/dae0afe558fc29c1759dfecae1cef049.jpg"
          alt="Background"
          className="w-full h-96 object-cover brightness-50"
        />
      </div>

      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <FaSearch className="absolute ml-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 font-rubik rounded-full w-full pl-10"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="relative inline-block ml-2">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none border border-gray-300 p-3 pl-12 pr-10 font-rubik rounded-3xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-50"
            >
              <option value="All">All</option>
              <option value="Rings">Rings</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Earrings">Earrings</option>
            </select>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <FaFilter className="h-5 w-5 text-gray-700 transition duration-200 ease-in-out" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Selected Product Section */}
          {selectedProduct && (
            <div className="mb-8 lg:w-1/3 lg:mr-4">
              <div className="bg-white border rounded-3xl p-4 shadow-lg">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-3xl"
                />
                <h3 className="text-lg font-rubik font-bold mt-4 text-left">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-700 font-bold text-left">
                  {selectedProduct.price}
                </p>
                <p className="mt-2 font-rubik text-left">
                  {selectedProduct.description}
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold font-rubik text-left">
                    Select Size:
                  </h4>
                  <div className="flex space-x-2 mt-2">
                    {["2", "3", "4"].map((size) => (
                      <div
                        key={size}
                        onClick={() => handleSizeClick(size)}
                        className={`flex-1 border-dotted border-2 rounded-3xl p-2 cursor-pointer transition duration-200 
                          ${
                            selectedSize === size
                              ? "bg-pink-200 border-pink-400"
                              : "border-gray-300 hover:bg-gray-100"
                          }`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="mt-4 w-full py-3 bg-black text-white rounded-3xl flex items-center justify-center ripple"
                  onClick={handleBuyNow}
                >
                  <FaShoppingCart className="mr-2" />
                  <span className="font-rubik">Buy Now</span>
                </button>

                {showAddressForm && (
                  <div className="mt-4 bg-gray-50 p-4 rounded-3xl">
                    <h4 className="font-rubik text-lg ">
                      Please provide your shipping address
                    </h4>
                    <div className="mt-2 space-y-4">
                      <input
                        type="text"
                        placeholder="Apartment, Street"
                        className="font-rubik border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-200 transition duration-200"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        className="font-rubik border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-200 transition duration-200"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="font-rubik border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-200 transition duration-200"
                      />
                      <input
                        type="text"
                        placeholder="Pincode"
                        className="font-rubik border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-200 transition duration-200"
                      />
                    </div>
                    <button className="mt-4 px-6 py-3 bg-black text-white rounded-3xl font-rubik hover:bg-gray-600 transition duration-200">
                      Confirm Order
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Other Products Section */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ${
              selectedProduct ? "lg:w-2/3" : "w-full"
            }`}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden bg-white border rounded-3xl transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity hover:opacity-100">
                  <h3 className="text-white text-lg font-rubik">
                    {product.name}
                  </h3>
                  <p className="text-white">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
