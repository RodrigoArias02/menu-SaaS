import "../../css/categories.css"
import { useState } from "react"
import CategoryItem from "./CategoryItem.jsx"

import empanadasImg from "../../assets/icons/empanada.png"
import canastitasImg from "../../assets/icons/pie.png"
import bebidasImg from "../../assets/icons/soda.png"

const categories = [
    {
    id: 'canastitas',
    title: "Canastitas",
    image: canastitasImg,
  },
  {
    id: 'empanadas',
    title: "Empanadas",
    image: empanadasImg,
  },

  {
    id: 'bebidas',
    title: "Bebidas",
    image: bebidasImg,
  },
]

const Categories = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('canastitas');
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.title}
          title={category.title}
          image={category.image}
          // Mandamos si está activo comparando el ID actual con el estado
          isActive={categoriaActiva === category.id}
          // Mandamos la función para cambiar el estado al hacer click
          onSelect={() => setCategoriaActiva(category.id)}
          // Le pasamos el ID por si querés usar el ancla nativa href={`#${category.id}`}
          id={category.id}
        />
      ))}
    </div>
    
  )
}

export default Categories