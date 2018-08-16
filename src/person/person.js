import React from 'react'
import './person.css';

const person = function(props)
{
    return (
        <div className='person'>
            <p onClick={props.click}>I am a {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>

            <input type='text' onChange={props.change} value={props.name}/>
        </div>
        
)};

export default person;