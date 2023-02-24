import React, { useEffect } from 'react';
import Carousel from 'nuka-carousel';
import classes from './slider.module.css';
import { useState } from 'react';
import axios from './api'
const Slider = () => {
  const [data,setData] = useState([]);
  const [test,setTest] = useState(true);
  useEffect(()=>{

    axios.get('/gallery/getLatestpics').then((res)=>{
      console.log(res.data['pics']);
      setData(res.data['pics']);
      setTest(false);
    })
  },[])
  // const data=[
  //   {
  //     src:"https://images.unsplash.com/photo-1676492784708-076039bdc5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
  //   },
  //   {
  //     src:"https://images.unsplash.com/photo-1676492784708-076039bdc5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
  //   },
  //   {
  //     src:"https://images.unsplash.com/photo-1676492784708-076039bdc5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
  //   },
  //   {
  //     src:"https://images.unsplash.com/photo-1676492784708-076039bdc5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
  //   },
  // ]
  return ( 
    <>
    <h1 className='title'>GALLERY</h1>
    <div className="container" >
    <div style={{textAlign:"center"}}>
                {test && <svg style={{width: '10vw'}} version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
                            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            <animateTransform 
                                attributeName="transform" 
                                attributeType="XML" 
                                type="rotate"
                                dur="1s" 
                                from="0 50 50"
                                to="360 50 50" 
                                repeatCount="indefinite" />
                        </path>
                        </svg>}
                        </div>
    <Carousel className={classes.container}>
      {data.map((e,i)=>{
        return(
          
      <div className={classes.imgContainer}>

    <img src="https://images.unsplash.com/photo-1676492784708-076039bdc5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
      </div>
        )
      })}
      
    
    
  </Carousel>
  </div>
  </>
   );
}
 
export default Slider;