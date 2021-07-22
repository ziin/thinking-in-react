export default function SearchBar({ onInStockOnlyChange, onSearchTermChange }) {
  return (
    <form>
      <input
        type="text"
        onChange={({ target: { value } }) => onSearchTermChange(value)}
      />
      <br />
      <input
        type="checkbox"
        id="in-stock"
        onChange={({ target: { checked } }) => onInStockOnlyChange(checked)}
      />
      <label htmlFor="in-stock">Show only products in stock</label>
    </form>
  );
}
