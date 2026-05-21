import "../../css/categories.css";
const CategoryItem = ({ title, image, isActive, onSelect, id }) => {

  return (
    <div className="category-item">
      <a href={`#${id}`}
      className={`category-link `}
      onClick={onSelect}
      >
        <fieldset className={`category-image ${isActive ? 'active' : ''}`}>
          <img src={image} alt={title} />
        </fieldset>
        <p>{title}</p>
      </a>
    </div>
  );
};

export default CategoryItem;
