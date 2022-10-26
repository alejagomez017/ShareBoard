let filterProduct = () => {
  function onFilterValueChanged() {}

  return (
    <div className="filter-area">
      <select name="Pets" onChange={onFilterValueChanged}>
        <option value="all">All</option>
        <option value="Pets">Pets</option>
        <option value="Auto">Auto</option>
        <option value="Food">Food</option>
      </select>
    </div>
  );
};

export default filterProduct;
