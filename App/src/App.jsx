import React from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { products } from "./data/products";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className=" flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover our handpicked selection of top-rated products
          </p>
        </div>

        <ProductGrid products={products} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
