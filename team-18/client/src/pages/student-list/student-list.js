import {useState, useEffect} from 'react';
import './student-list.css'


function StudentList() {

    const [studentList, setStudentList] = useState([])    

    useEffect(() => {
        const getDummyData = async () => {
            return [
                "Bob",
                "Alice",
                "Tom"
            ]
        }
        const getData = async () => {
            const data = await getDummyData()
            setStudentList(data)
        }
        getData()
    }, [])

    return (
        <>
            <h3>List of Students</h3>
            <ul className='list'>
                {studentList.map((item, key) => {
                    return (
                        <li>item</li>
                    )
                })}
            </ul>
        </>

    )
}

export default StudentList