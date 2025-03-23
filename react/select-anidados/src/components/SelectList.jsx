import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./loaders/Loaders";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;
  if (error) {
    return <Message message={`Error ${error.status}: ${error.statusText}`} />;
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-semibold text-gray-700  px-2 mb-1"
      >
        {label}
      </label>
      {loading && <Loader />}
      <select
        name={id}
        id={id}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
      >
        <option
          value=""
          className="text-gray-500"
        >{`Elige un ${title}`}</option>
        {data &&
          options.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectList;
