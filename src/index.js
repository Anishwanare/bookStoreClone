import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
// import EventExample from "./Form";

const BookList = () => {
  return (
    <>
      <Navbar />
      {/* <EventExample /> */}
      <h1 style={{ textAlign: "center" }}>Top selling Books</h1>
      <section className="bookList">
        {books.map((book, tag) => {
          const { img1, title1, author1, id } = book;
          return (
            <div key={id}>
              <Book title={title1} img={img1} author={author1} tag={tag} />
            </div>
          );
        })}
      </section>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav>
        <ul
          className="ul"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyleType: "none",
            backgroundColor: "GrayText",
            padding: "10px 0px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            width: "100%",
            position: "sticky",
          }}
        >
          <li className="li">
            <a href="https://www.linkedin.com/in/anish-wanare-951808217/?originalSubdomain=in">
              Home
            </a>
          </li>
          <li className="li">
            <a href="https://www.linkedin.com/in/anish-wanare-951808217/?originalSubdomain=in">
              About
            </a>
          </li>
          <li className="li">
            <a href="https://www.linkedin.com/in/anish-wanare-951808217/?originalSubdomain=in">
              Contact
            </a>
          </li>
          <li className="li">
            <a href="https://www.linkedin.com/in/anish-wanare-951808217/?originalSubdomain=in">
              Owner Anish
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
