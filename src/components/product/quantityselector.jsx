import "../../css/quantity.css"

const QuantitySelector = ({
  quantity,
  increase,
  decrease
}) => {

  return (
    <div className="quantity-selector">

      <button
        onClick={decrease}
        className="quantity-btn"
      >
        -
      </button>

      <span className="quantity-number">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="quantity-btn"
      >
        +
      </button>

    </div>
  )
}

export default QuantitySelector