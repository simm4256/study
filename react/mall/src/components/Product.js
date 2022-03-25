
function Product(props) {
    return (
        <div className="card col-md-4" >
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.shoe.title}</h5>
                <p className="card-text">{props.shoe.content}</p>
                <a href={"/detail/" + props.i} className="btn btn-primary">{props.shoe.price + '\\'}</a>
            </div>
        </div>
    );
}

export default Product;