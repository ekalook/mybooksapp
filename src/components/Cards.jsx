import "../index.css"
import "./Cards.css"


const Cards = ({name, image, desc, action}) => {
  return (
    <div className='card'>
        <h2 className="card-title">{name}</h2>
        <img className="img-box" src={image} alt={name}/>
        <p className='text'>{desc}</p>
        <button onClick={() => action(desc)}className='btn'>See More</button>
    </div>
  )
}

export default Cards