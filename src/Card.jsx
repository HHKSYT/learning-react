import profilePic from './assets/City.png';
import './Card.css';

function Card(text) {
    return(
        <div className="card">
            <img src={profilePic} className="image" alt="Ronaldo"></img>
            <h2 className="title">{text.name}</h2>
            <p className="des">{text.info}</p>
        </div>
    );
}

export default Card;