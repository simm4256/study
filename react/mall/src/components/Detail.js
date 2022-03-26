import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

let style = styled.div`
    padding : 20px;
`;

function Detail() {
    let stocks = useSelector((state) => (state.stocksReducer));
    let shoes = useSelector((state) => (state.shoesReducer))
    let dispatch = useDispatch();
    let history = useHistory();
    let { id } = useParams();
    let shoe = shoes.find((val) => val.id === Number(id));

    let [alertVisible, alertVisibleChanger] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            alertVisibleChanger(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                {alertVisible ?
                    <div className="alert">
                        <p>재고가 얼마 남지 않았습니다.</p>
                    </div>
                    : null
                }
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <StockInfo stocks={stocks}></StockInfo>
                    <button className="btn btn-danger" onClick={() => {
                        let tmp = [...stocks];
                        tmp[0]--;
                        dispatch({ type: 'stocks:update to newData', newData: tmp });
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => history.goBack()}>뒤로가기</button>
                </div>
            </div>


        </div>
    )
}

function StockInfo(props) {
    return (
        <p>재고 : {props.stocks[0]}</p>
    )
}

export default Detail;