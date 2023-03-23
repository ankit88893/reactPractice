import React from 'react';



const author = "jordan";
const title = "interesting facts for curious minds";
const rating = '4 star';

const BookList = () => {
    return (
      <section>
        <Book author={author} title={title} rating={rating} />
        <Book author={author} title={title} rating={rating} />
      </section>
    );
}

const Book = (props) => {
  console.log(props);
    return (
      <article>
        <p>{ props.rating}</p>
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
       
      </article>
    );
}

export default BookList;
