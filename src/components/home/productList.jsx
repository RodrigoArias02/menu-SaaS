import "../../css/menu.css"
import ProductCard from "./productcard.jsx"

const ProductList = ({ openModal, products}) => {



  return (
    <div className="div-productList">

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          openModal={openModal}
        />
      ))}

    </div>
  )
}

export default ProductList