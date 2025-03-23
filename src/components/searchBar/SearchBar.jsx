import clsx from "clsx";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";
import css from "./searchBar.module.css";

export default function SearchBar({ fetchImages, setQuery }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!inputValue.trim()) {
      toast.error("You must enter text to search for images!");
      return;
    }

    setQuery(inputValue);
    fetchImages(inputValue, 1);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={clsx(css.form)}>
        <input
          className={clsx(css.input)}
          type="text"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
          placeholder="Search images and photos"
        />
        <button className={clsx(css.btn)} type="submit">
          <IoMdSearch size={25} />
        </button>
      </form>
    </header>
  );
}
