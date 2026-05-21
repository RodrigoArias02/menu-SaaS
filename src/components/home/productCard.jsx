import "../../css/menu.css"

const ProductCard = ({
  product,
  openModal
}) => {

  return (
    <div
      className="div-ProductCard"
      onClick={() => openModal(product)}
    >
        <section className="section-card_text">
            <article className="article-card_text">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
            </article>
        </section>
        <section className="section-card_image">
            <fieldset className="fieldset-card_image">
                <img src={`/products/${product.image}`} alt="Imagen del producto" />
            </fieldset>
        </section>

   
    </div>
  )
}

export default ProductCard