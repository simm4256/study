import { useHistory } from "react-router-dom";

function Product(props) {

    let history = useHistory();

    return (
        <div className="card col-md-4" >
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.shoe.title}</h5>
                <p className="card-text">{props.shoe.content}</p>
                <button className="btn btn-primary" onClick={() => {
                    history.push('/detail/' + props.shoe.id);
                }}>{props.shoe.price + '\\'}</button>
            </div>
        </div>
    );
}

export default Product;