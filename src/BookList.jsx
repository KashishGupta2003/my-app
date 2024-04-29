import React from 'react'
import Book from './Book';

const data1={
  title: "Let Us C",
  author:"Yashwant Kanitkar",
  imgLink:"",
  price: 452.5,
};

const BookList = () => {
  return (
    <div className='booklist'>
         <Book
          title={data1.title}
          author ={data1.author}
          imgLink={data1.imgLink}
          price={data1.price}
          />
          <Book
          title={data1.title}
          author ={data1.author}
          imgLink={data1.imgLink}
          price={data1.price}
          />
          <Book
          title={data1.title}
          author ={data1.author}
          imgLink={data1.imgLink}
          price={data1.price}
          />
          <Book
          title={data1.title}
          author ={data1.author}
          imgLink={data1.imgLink}
          price={data1.price}
          />
        
        
        <Book
          title={data1.title}
          author ={data1.author}
          imgLink={data1.imgLink}
          price={data1.price}
          />
        
        
    </div>
  );
};

export default BookList