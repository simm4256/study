// 장바구니 컴포넌트
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {

    let carts = useSelector((state) => state).cartsReducer;
    let dispatch = useDispatch();

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>개수</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((val, i) => {
                    return (
                        <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.quan}</td>
                            <td><button onClick={() => {
                                dispatch({ type: 'test', payload: { id: val.id } });
                            }}>+</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}

export default Cart;