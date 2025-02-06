export default function Checkboxes(props) {
    const handleChange = props.handleChange;

    return(
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

    );
}