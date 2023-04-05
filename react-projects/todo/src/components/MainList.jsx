import './MainList.css'

export default function MainList(props) {
    console.log(props.data);
    return (
        <div className="mainList">
            <h2 className='title'>{props.data.title}</h2>
            <h3 className="until">{props.data.until}</h3>
        </div>
    )
}