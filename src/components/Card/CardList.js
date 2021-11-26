import React from 'react';
import Card from './Card'

const CardList = (props) => {
    const robots = props.robots;
    const CardArray = robots.map((item) => {
        return <Card key = {item.id} robot = {item} />
    })
    return (
    <div className='flex flex-wrap'>
        {CardArray}
    </div>
    );
}

export default CardList;