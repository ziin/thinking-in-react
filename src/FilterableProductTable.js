import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export default function FilterableProductTable() {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchBar
        onInStockOnlyChange={setInStockOnly}
        onSearchTermChange={setSearchTerm}
      />
      <ProductsTable
        products={PRODUCTS}
        searchTerm={searchTerm}
        inStockOnly={inStockOnly}
      />
    </>
  );
}
