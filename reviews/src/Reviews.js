import React, { useState } from 'react';
import { Data } from './Data';

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const prevReview = () => {
        let i = index - 1;
        if (i < 0) {
            setIndex(Data.length - 1);
        }
        else {
            setIndex(i);
        }
    }

    const nextReview = () => {
        let i = index + 1;
        if (i > Data.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(i);
        }
    }
    
    const randomReview=()=>{
        let i = Math.floor(Math.random() * 4);
        if(i == index){
            if(index == 0){
                i++;
            }
            else{
                i--;
            }
        }
        setIndex(i);
    }

    return (
        <div className='reviews'>
            <img src={Data[index].image} alt="error" />
            <h3>{Data[index].name}</h3>
            <h5>{Data[index].job}</h5>
            <p>{Data[index].info}</p>
            <div className="btns">
                <button>
                    <i className="fa-solid fa-arrow-left" onClick={prevReview}></i>
                </button>
                <button>
                    <i className="fa-solid fa-arrow-right" onClick={nextReview}></i>
                </button>
            </div>
            <button onClick={randomReview} className='surprise-btn'>surprise me</button>
        </div>
    )
}

export default Reviews