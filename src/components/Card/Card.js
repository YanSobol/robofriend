import React from 'react';
import './Card.css';
import 'tachyons';


// One more way to pass props: const Card = ({name, username, email, id}) => {}
const Card = (props) => {
    const {name, username, email, id} = props.robot;
    return(
        <div className='container'>
            <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img className='robot_image' alt='robot_image' src={`https://robohash.org/${username + id}?200x200`}/>
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>
    );
}

export default Card;