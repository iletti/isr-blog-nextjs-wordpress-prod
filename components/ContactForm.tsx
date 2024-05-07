// CombinedForm.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const CombinedForm = () => {
  const [state, handleSubmit] = useForm("xoqgrovr");

  const handleFormSubmit = async (e) => {
    await handleSubmit(e); // Call the handleSubmit function provided by Formspree
  };

  if (state.succeeded) {
    return <div role="alert" className="alert alert-success">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Lomakkeen lähetys onnistui! Ollaan pian yhteyksissä.</span>
  </div>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label className="flex items-center gap-2 mb-2 input input-bordered">
          Puh
          <input type="text" className="grow" placeholder="Puhelinnumero" name="phone" /> {/* Add name attribute */}
        </label>
        <label className="flex items-center gap-2 mb-2 input input-bordered">
          Sähköposti
          <input type="text" className="grow" placeholder="email@mail.com" name="email" /> {/* Add name attribute */}
        </label>
        <label className="flex items-center gap-2 mb-2 input input-bordered">
          www-sivusi
          <input type="text" className="grow" placeholder="yritys.fi" name="website" /> {/* Add name attribute */}
        </label>
      </div>
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <button className='btn' type="submit" disabled={state.submitting}>
        Lähetä
      </button>
    </form>
  );
};

export default CombinedForm;
