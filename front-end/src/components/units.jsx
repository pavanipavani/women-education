import { useState,useEffect } from "react";
import './units.css';
const Backend = () =>{
    const [data,setData] = useState([]);
    const [topic,setTopic] = useState([]);
    const [content,setContent] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = () =>{
        fetch("http://localhost:5050/data").then((res) =>{
            return res.json();
        }).then ((res)=>{
            setData(res);
            console.log(res);
        })
    }
    const fetchdata = () =>{
        fetch("http://localhost:5050/topic").then((res) =>{
            return res.json();
        
         }).then ((res)=>{;
            setTopic(res);
             console.log(res);
         });
    }
    const fetchDATA = () =>{
        fetch("http://localhost:5050/content").then ((res) =>{
            return res.json();
        }).then ((res) =>{
            setContent(res);
            console.log(res);
        });
    }
    return (<div>
        {
            data?.map(({course_NAME}) => 
            <div className='topics'>
                <div className="courseinformation">{course_NAME}</div>
            </div>)
        }
        {
            topic.map(({topic_NAME})=>
            <div className="units">
                <div>{topic_NAME}</div>    
            </div>
            )
        }
       {
             topic.map(({Content,video})=>
             <div className="units">
                 <div>{Content}</div>
                 {video}
             </div>
             )
        } 
    </div>
    )
}
export default Backend;