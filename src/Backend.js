import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = "http://localhost:3000/"



const Backend = () => {


    const [state, setState] = useState([])

    const fetchData = async () => {
        let { data } = await axios.get(url)
        console.log(data, "dataa");
        setState(data)
        

    }

    console.log(state , "arr");

    useEffect(() => {
        fetchData()
    }, [])

    let okay = state.map((item)=>{

        return(
            <>
               <h1>{item.name}</h1>
            <p>{item.key}</p>
            </>
            
        ) 
    })



    return (
        <div>{okay}</div>
    )
}

export default Backend