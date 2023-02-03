import "../styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="A very nice offer of employment"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
