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
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data && options.map((el,index) => <option key={index} value={el}> {el} </option>)}
      </select>
    </>
  );
};

export default SelectList;
