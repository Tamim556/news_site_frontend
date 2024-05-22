/* eslint-disable react/prop-types */
import SecondHomePage from '../SecondHomePage/SecondHomePage'
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
// import ExploreMore from "./ExploreMore";

const DetailPage = () => {
    

    const [data, setData] = useState({});
    // const [detail, setDetail] = useState({});

    const {id} = useParams();
    

    const details = useLoaderData();
    
    const detail = details.data
    console.log(detail)
   

    useEffect(() => {
        const idInt = parseInt(id)
        const findDetails = detail.find(item => item.id === idInt  );
        
        setData(findDetails)
    }, [details,id])
    

    

  return (
    <div>
       
       {/* <SecondHome detail ={detail}></SecodHom> */}
       <SecondHomePage data ={data}></SecondHomePage>
       

    </div>
  )
}

export default DetailPage