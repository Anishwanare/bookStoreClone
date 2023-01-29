import React from "react";
import "./index.css";

const Book = (props) => {
  const { img, title, author, tag } = props;

  // const showTitle = () =>{
  //   console.log(title)
  // }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h5 style={{ color: "rebeccapurple" }}>{author}</h5>
      {/* <button onClick={showTitle}>show <title></title></button> */}
      <p className="tag">{` # ${tag + 1}`}</p>
    </article>
  );
};

export default Book;
