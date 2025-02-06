import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from './Form';

export default function Survey() {
  const initialFormState = {
    color: "",
    spend_time: [],
    review: "",
    username: "",
    email: "",
  };

  const [form, setForm] = useState(initialFormState);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;
  

    if (inputName === "color") {
      setForm({...form, color: inputValue})
    }

    if (inputType === "checkbox" && inputName === "spend_time") {
      if (event.target.checked) {
        setForm({...form, spend_time: [...form.spend_time, inputValue]})
      } else {
        setForm({...form, spend_time: form.spend_time.filter((item) => item != inputValue)});
      }
    }

    if (inputName === "review") {
      setForm({...form, review: inputValue})
    }

    if (inputName === "username") {
      setForm({...form, username: inputValue})
    }

    if (inputName === "email") {
      setForm({...form, email: inputValue})
    }
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(form)
    setForm(initialFormState)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
    
        {/* answers should go here */}
      </section>
      <section className="survey__form">{
        <Form handleChange = {handleChange} submitForm = {submitForm} form = {form} />
        }
      </section>
    </main>
  );
}
