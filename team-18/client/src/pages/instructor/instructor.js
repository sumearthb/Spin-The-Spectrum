import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './instructor.css'

function Instructor() {

    useEffect(() => {
        async function fetchStudentInfo() {
            
        }
        
        fetchStudentInfo();
    }, [])


    return (
        <div className="group">
            <h3>Instructor Dashboard</h3>
            <div className="student">
                <div className="subtitle">Student #1</div>
                <div className="statistic">Stat 1</div>
                <div className="statistic">Stat 2</div>
                <div className="statistic">Stat 3</div>
                <div className="statistic">Stat 4</div>
            </div>
            <div className="student">
                <div className="subtitle">Student #2</div>
                <div className="statistic">Stat 1</div>
                <div className="statistic">Stat 2</div>
                <div className="statistic">Stat 3</div>
                <div className="statistic">Stat 4</div>
            </div>
            <div className="student">
                <div className="subtitle">Student #3</div>
                <div className="statistic">Stat 1</div>
                <div className="statistic">Stat 2</div>
                <div className="statistic">Stat 3</div>
                <div className="statistic">Stat 4</div>
            </div>
            <div className="student">
                <div className="subtitle">Student #4</div>
                <div className="statistic">Stat 1</div>
                <div className="statistic">Stat 2</div>
                <div className="statistic">Stat 3</div>
                <div className="statistic">Stat 4</div>
            </div>
        </div>
    )
}

export default Instructor