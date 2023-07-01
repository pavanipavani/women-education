import React,{useState} from 'react';

//import {useState} from "react";
import './coursepage.css';

const Backend = () =>{
    const[data,setData] = useState([]);
    const[topic,setTopic] = useState([]);

    function courseDisplay(){
        fetch("http://localhost:5050/data").then((res) =>{
            return res.json();
        }).then ((res)=>{
            setData(res);
            console.log(res);

        })
    }
    function unitsDisplay(){
        fetch ("http://localhost:5050/topic").then((res) =>{
            return res.json();
        }).then ((res) =>{
            setTopic(res);
            console.log(res);
        })
    }

    return(
        <div>
            <div className="display">
                <div className="nav">
                    <div className='navbar'>
                        <img className="imagesize" src="resources/jtdimage.jpeg" alt="img" />
                    </div>
                
                     <div className="navbar" onClick={() => courseDisplay()}>
                    <img className="imagesize1" src="resources/livebook.jpg" alt="img" onClick={()=>courseDisplay()}/>
                    {/* <img className="imagesize1" src="resources/jtdimage.jpeg" alt="img" /> */}
                    </div>
               
                    <div className="navbar1">
                        <img className="imagesize2" src="resources/signupimage.png" alt="img" />   
                    </div>
                </div>
                <div className="box">
                    <div className="title">
                        <div className="margin">
                            <div className="titletext"><b>Learn the ways of the future</b></div>
                            <div className="titletext1">With Kalvium, learn computer science with a world-class curriculum designed with the tech world.</div>
                        </div>
                        <div className="margin1">
                                <img className="titleimg" src="resources/navimage.png" alt="img" />
                        </div>
                            
                    </div>
                    <div className="coursedetails">
                         <div className="coursedata">
                            {
                                data.map(({course_NAME }) => 
                                    <div className="courseinfo" onClick={()=>unitsDisplay()}>
                                      <div className='courseinformation'> {course_NAME }</div>
                                    </div>)
                            }
                        </div> 
                        <div className="details">
                            {
                                topic.map(({topic_NAME}) =>
                                    <div className='unitsinfo'>
                                        <div>
                                            <img className="daimondsize" src="resources/diamond.jpg" alt="img" />
                                        </div>
                                        <div className='unitsinformation'>{topic_NAME}</div>
                                        <div className='downarrowborder'>
                                            <img className='downarrowimg' src="resources/downarrow.jpg" alt="img" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
export default Backend;