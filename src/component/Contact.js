const Contact = () => (
  <div className="Contact">
    <h1>CONTACT ME</h1>
    <div className="contactInput">
      <div className="Fld-input">
        <p>Full Name</p>
        <input type="text" />
      </div>
      <div className="Fld-input">
        <p>Email Address</p>
        <input type="email" />
      </div>
      <div className="Fld-input">
        <p>Phone Number</p>
        <input type="number" />
      </div>
      <div className="Fld-input">
        <p>Message</p>
        <input type="text" />
      </div>
    </div>
  </div>
);

export default Contact;
