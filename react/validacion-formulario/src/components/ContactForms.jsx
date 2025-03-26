import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {};
const validationsForms = (form) => {};

const ContactForms = () => {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBluer,
    handleSubmit,
  } = useForm(initialForm, validationsForms);
  return (
    <div>
      <h2>formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBluer}
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBluer}
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="email"
          name="subjet"
          placeholder="Asunto a tratar"
          onBlur={handleBluer}
          onChange={handleChange}
          value={form.subjet}
          required
        />
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBluer}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForms;
