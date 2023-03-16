import React from "react";
import { categories } from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;

}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      title="select-category"
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
