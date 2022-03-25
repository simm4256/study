import styled from 'styled-components';


const Jumbo = styled.div`
        width: 100%;
        height: 30vh;
        background-image: url('https://codingapple.com/wp-content/uploads/2020/05/background.jpg');
        background-size:cover;
        display: grid;
        grid-template-rows: 1fr 1fr;
        margin-bottom: 20px;
    `;
const Title = styled.div`
        color:white;  
    `;
const Content = styled.div`
  color:white;
  font-size:20px;
`;

function Jumbobox() {

    return (
        <Jumbo>
            <Title className='py-5'>
                <h1>대문 제목</h1>
            </Title>
            <Content>
                대문문구
            </Content>
        </Jumbo>
    )
}

export default Jumbobox;