import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

let style = styled.div`
    padding : 20px;
`;

function Detail(props) {

    let history = useHistory();
    let { id } = useParams();
    let shoe = props.shoes.find((val) => {
        return val.id === Number(id);
    })

    let [alertVisible, alertVisibleChanger] = useState(true);
    let [input, inputChanger] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => {
            alertVisibleChanger(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, [alert]);

    return (
        <div className="container">
            <div className="row">
                {alertVisible ?
                    <div className="alert">
                        <p>재고가 얼마 남지 않았습니다.</p>
                    </div>
                    : null
                }
                <input type="text" onChange={(e) => { inputChanger(e.target.value) }} />
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <StockInfo stocks={props.stocks}></StockInfo>
                    <button className="btn btn-danger" onClick={() => {
                        let tmp = [...props.stocks];
                        tmp[0]--;
                        props.stocksChanger(tmp);
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