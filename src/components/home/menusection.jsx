import { useState } from "react";

import "../../css/menu.css";

import ProductList from "./productlist.jsx";
import ProductModal from "../product/productmodal.jsx";

const MenuSection = ({ activeModal, setActiveModal }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);

    setActiveModal("product");
  };

  const products = [
    {
      id: 1,
      name: "Jamon y Queso",
      price: 2,
      image: "canastitajyq.png",
      description: "Canastita horneada rellena con jamon y queso mozarella",
      category: "canastitas",
    },

    {
      id: 2,
      name: "Carne Picada",
      price: 3,
      image: "canastitajyq.png",
      description: "Canastita rellena con carne picada de vaca",
      category: "canastitas",
    },

    {
      id: 3,
      name: "Carne Picada",
      price: 4,
      image: "canastitajyq.png",
      description: "Canastita rellena con carne picada de vaca",
      category: "canastitas",
    },

    {
      id: 4,
      name: "Carne Picada",
      price: 3000,
      image: "canastitajyq.png",
      description: "Canastita rellena con carne picada de vaca",
      category: "canastitas",
    },

    {
      id: 5,
      name: "Carne Picada",
      price: 3000,
      image: "canastitajyq.png",
      description: "Canastita rellena con carne picada de vaca",
      category: "empanada",
    },

    {
      id: 6,
      name: "Carne Picada",
      price: 3000,
      image: "canastitajyq.png",
      description: "Canastita rellena con carne picada de vaca",
      category: "empanadas",
    },

    {
      id: 7,
      name: "Coca Cola",
      price: 3500,
      image: "canastitajyq.png",
      description: "Cocacola de 500ml",
      category: "bebidas",
    },
        {
      id: 8,
      name: "Sprite",
      price: 3500,
      image: "canastitajyq.png",
      description: "Cocacola de 500ml",
      category: "bebidas",
    },
        {
      id: 9,
      name: "Manaos",
      price: 3500,
      image: "canastitajyq.png",
      description: "Cocacola de 500ml",
      category: "bebidas",
    },
  ];

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }

    acc[product.category].push(product);

    return acc;
  }, {});

  return (
    <div className="menu-section">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h1 id={category}>{category}</h1>

          <ProductList openModal={openModal} products={products} />
        </div>
      ))}

      <ProductModal
        key={selectedProduct?.id}
        isOpen={activeModal === "product"}
        onClose={() => setActiveModal(null)}
        product={selectedProduct}
      />
    </div>
  );
};

export default MenuSection;
