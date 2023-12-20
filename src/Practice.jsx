import React, { useEffect, useState } from 'react'
import axios from "axios"

const url = "https://course-api.com/react-tabs-project"

const Practice = () => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState(0)

    const fetchJobs = async () => {
        let { data } = await axios.get(url)
        setJobs(data)
        setLoading(false)
        console.log(data, "api");
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    if (loading) {
        return (
            <section className='section loading'>
                <h3>Loading</h3>
            </section>
        )
    }

    const { company, dates, duties, title } = jobs[value]

    return (
        <>
            <h3>{company}</h3>
            <h3>{title}</h3>
            <h3>{dates}</h3>
            <h3>{duties}</h3>

            <div className='button-container'>{jobs.map((item, index) => {
                return (
                    <button
                        onClick={() => setValue(index)}
                        className={`job-btn ${index === value && 'active-btn'}`}

                    >
                        {item.company}
                    </button>
                )
            })}</div> 


            <div> {duties.map((item, index) => {
                return (
                    <p>{item}</p>
                )
            })} </div>

        </>
    )
}

export default Practice