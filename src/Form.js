const EventExample = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click ");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault(); //compulsary
    console.log("form submit");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          id=""
          style={{ margin: "1rem 0", border: "1px solid black" }}
        />
        <button type="submit ">submit</button>
      </form>
      <button
        style={{ fontWeight: "10px", background: "black", color: "white" }}
        onClick={handleButtonClick}
        type="submit"
      >
        Click Me
      </button>
    </section>
  );
};

export default EventExample;
