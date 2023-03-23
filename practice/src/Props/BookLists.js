import React from "react";

const firstBook = {
  author: "jordan moore",
  title: "Intresting facts for curious mind",
  price: "5$",
  img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ubuy.com.ru%2Fproductimg%2F%3Fimage%3DaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxOHo1ZHZ5a1BMLl9TUzQwMF8uanBn.jpg&imgrefurl=https%3A%2F%2Fwww.ubuy.com.ru%2Fen%2Fproduct%2F5AXJIT9OG-interesting-facts-for-curious-minds-1572-random-but-mind-blowing-facts-about-history-science-pop-culture-and-everything-in-between&tbnid=0-BOmglP2kdPcM&vet=12ahUKEwjcotaplvb8AhWtqNgFHYgiDUkQMygCegUIARC-AQ..i&docid=IbnZadeE9mPYNM&w=500&h=500&q=interesting%20facts%20for%20curious%20minds&ved=2ahUKEwjcotaplvb8AhWtqNgFHYgiDUkQMygCegUIARC-AQ",
};
const secondBook = {
  author: "james camrone",
  title: "Atomic Habits",
  price: "5.99$",
  img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fleoberrygifts.com%2Fwp-content%2Fuploads%2F2022%2F06%2FAtomic-Habits-by-James-Clear.jpg&imgrefurl=https%3A%2F%2Fleoberrygifts.com%2Fproduct%2Fatomic-habits%2F&tbnid=MSJqqg4l1hyCsM&vet=12ahUKEwiD0_Ohmfb8AhWL_DgGHWJ8DUIQMygPegUIARD9Ag..i&docid=wdYiqG_5tdc4UM&w=1200&h=900&q=atomic%20habits&ved=2ahUKEwiD0_Ohmfb8AhWL_DgGHWJ8DUIQMygPegUIARD9Ag",
};

const Books = () => {
  return (
    <section>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        price={firstBook.price}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        price={secondBook.price}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  // or destructuring
  // const {img,title,price,author,children} = props;
  // sometng b/w the component tag if we want the render then we use children props
  return (
    <article>
      <img src={props.img} alt={props.title}></img>
      <p>{props.price}</p>
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

export default Books;
