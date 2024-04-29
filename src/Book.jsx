const Book = () => {
    return (<div className="book">
        <Title/>
        <Image/>
        <Author/>
        <Price/>
    </div>
    );
};
export default Book;

const Title = () => <h2>Start a Successful Amazon FBA Business</h2>;

const Price = ()=>{
    return <h2>₹249.00</h2>;
};

const Image = ()=> {
    return <img src="https://m.media-amazon.com/images/I/71FSgd8yuML.AC_UY327_FMwebp_QL65.jpg"/>;
};

function Author() {
    return <h3>Paul D. Kings </h3>;
}


// const Book=(props)=>{
//     console.log(props);

// }