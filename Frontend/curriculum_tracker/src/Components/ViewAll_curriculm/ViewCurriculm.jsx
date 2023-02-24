import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Admin_navbar from '../Admindashboard/Admin_navbar';


const ViewCurriculm = () => {

        const [viewCurriculum,setViewCurriculm] = useState([]);
        useEffect(
            ()=>{
                getData();
            },[]
        )

        const getData=()=>{
            
            axios.get('/pastlist')
            .then(
                (response)=>{
                    
                    setViewCurriculm(response.data)
                    
                }
      
            ).catch(
                (error)=>{
                    console.log("error in loading data"+error);
      
                }
            )
        }

  return (
    <div>
    <Admin_navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{color:"#1E90FF",fontWeight:"bolder",fontSize:"18px"}}> Title</th>
                                <th scope="col" style={{color:"#1E90FF",fontWeight:"bolder",fontSize:"18px"}}>Past Curricculum</th>
                                <th scope="col" style={{color:"#1E90FF",fontWeight:"bolder",fontSize:"18px"}}>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewCurriculum.map(
                                (value,index)=>{
                                return <tr>
                                    <td>{value.title}</td>
                                    <td>{value.pdfpath}</td>
                                    <td><button  className="btn btn-primary" type="button">DOWNLOAD</button></td>
                                </tr> 
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCurriculm