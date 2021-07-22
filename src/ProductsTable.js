export default function ProductsTable({ products, searchTerm, inStockOnly }) {
  let rows = [];
  let lastCategory = null;

  // - Constraints
  // Products should be ordered by category
  // Product must have unique names
  products.forEach((product) => {
    // filter by searchTerm
    if (!product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return;
    }

    // filter by inStock
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <CategoryRow key={product.category} categoryName={product.category} />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  if (!rows.length) {
    rows.push(<CategoryRow key="nothing-found" categoryName="Nothing found" />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CategoryRow({ categoryName, colSpan = 2 }) {
  return (
    <tr>
      <td colSpan={colSpan}>{categoryName}</td>
    </tr>
  );
}

function ProductRow({ product }) {
  let nameColumn = product.stocked ? (
    <td>{product.name}</td>
  ) : (
    <td style={{ color: "red" }}>{product.name}</td>
  );

  return (
    <tr>
      {nameColumn}
      <td>{product.price}</td>
    </tr>
  );
}
