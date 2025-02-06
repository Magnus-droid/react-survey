import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";


export default function Form(props) {
    const handleChange = props.handleChange;
    const submitForm = props.submitForm;
    const form = props.form;

    return(
        <form className="form" onSubmit={submitForm}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <RadioButtons handleChange = {handleChange}/>
        <Checkboxes handleChange = {handleChange}/>
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
    );
}