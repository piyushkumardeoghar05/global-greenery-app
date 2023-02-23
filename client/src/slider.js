import React, { useEffect } from 'react';
import Carousel from 'nuka-carousel';
import classes from './slider.module.css';
import { useState } from 'react';
import axios from './api'
const Slider = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{

    axios.get('/gallery/getLatestpics').then((res)=>{
      console.log(res.data['pics']);
      setData(res.data['pics']);
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