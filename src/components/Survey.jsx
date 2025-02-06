import { useState } from "react";

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
        <form className="form" onSubmit={submitForm}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input id="color-one" type="radio" name="color" value="1" onChange={handleChange}/><label
                htmlFor="color-one"
                >1</label
              >
            </li>
            <li>
              <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/><label
                htmlFor="color-two"
                >2</label
              >
            </li>
            <li>
              <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/><label
                htmlFor="color-three"
                >3</label
              >
            </li>
            <li>
              <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/><label
                htmlFor="color-four"
                >4</label
              >
            </li>
          </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label
                ><input
                  name="spend_time"
                  type="checkbox"
                  value="swimming"
                  onChange={handleChange}
                />Swimming</label
              >
            </li>
            <li>
              <label
                ><input name="spend_time" type="checkbox" value="bathing" onChange={handleChange}/>Bathing</label
              >
            </li>
            <li>
              <label
                ><input
                  name="spend_time"
                  type="checkbox"
                  value="chatting"
                  onChange={handleChange}
                />Chatting</label
              >
            </li>
            <li>
              <label
                ><input name="spend_time" type="checkbox" value="noTime" onChange={handleChange}/>I don't like to
                spend time with it</label
              >
            </li>
          </ul>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value={form.review}
            onChange={handleChange}
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}/></label
        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}/></label
        ><input className="form__submit" type="submit" value="Submit Survey!"/>
        </form>
        }
      </section>
    </main>
  );
}
