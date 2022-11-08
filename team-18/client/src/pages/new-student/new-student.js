import './new-student.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewStudent() {

    const [inputField , setInputField] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: '',
        emergencyContactFirstName: '',
        emergencyContactMiddleName: '',
        emergencyContactLastName: '',
        emergencyContactPhoneNumber: '',
        triggers: '',
        activities: '',
        notes: '',
        medication: '',
        classes: '',
        hobbies: '',
        whyDj: '',
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        const isValidLength = (str, min, max) => {
            return (min <= str && str <= max)
        }

        const isValidDob = (str) => {
            if (str.length != 10) {
                return false
            }
            return (!isNaN(str.substring(0, 2)) && !isNaN(str.substring(3, 5)) && !isNaN(str.substring(6, 10)))
        }

        const isValidPhoneNumber = (str) => {
            if (str.length != 12) {
                return false
            }
            return (!isNaN(str.substring(0, 3)) && !isNaN(str.substring(4, 7)) && !isNaN(str.substring(8, 11)))
        }

        const isEmpty = (str) => {
            return (str == '')
        }

        const cannotBeEmpty = [
            inputField.firstName,
            inputField.middleName,
            inputField.lastName,
            inputField.email,
            inputField.dateOfBirth,
            inputField.gender,
            inputField.phoneNumber,
            inputField.emergencyContactFirstName,
            inputField.emergencyContactMiddleName,
            inputField.emergencyContactLastName,
        ]

        for (const str of cannotBeEmpty) {
            if (isEmpty(str)) {
                console.log("Input cannot be blank");
                return
            }
        }

        if (!isValidPhoneNumber(inputField.phoneNumber) || !isValidPhoneNumber(inputField.emergencyContactPhoneNumber)) {
            console.log("Phone input invalid");
            return 
        }

        if (!isValidDob(inputField.dateOfBirth)) {
            console.log("Date of birth invalid")
            return
        }

        // Submit request to create profile

    }

    return (
    <div className="background">
        <div className="inputCard">
            <h3 className="title">New User</h3>
            <div className="inputGrouping">
                <h5 className="inputLabel">Name</h5>
                <input className="inputBox"
                type="text"
                name="firstName"
                onChange={inputsHandler}
                placeholder="First Name"
                value={inputField.firstName}/>
                <input className="inputBox"
                type="text"
                name="middleName"
                onChange={inputsHandler}
                placeholder="Middle Name"
                value={inputField.middleName}/>
                <input className="inputBox"
                type="text"
                name="lastName"
                onChange={inputsHandler}
                placeholder="Last Name"
                value={inputField.lastName}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Date of Birth</h5>
                <input className="inputBox"
                type="text"
                name="dateOfBirth"
                onChange={inputsHandler}
                placeholder="01/01/2020"
                value={inputField.dateOfBirth}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Email</h5>
                <input className="inputBox"
                type="text"
                name="email"
                onChange={inputsHandler}
                placeholder="01/01/2020"
                value={inputField.email}/>
            </div>

            <div className="inputGrouping">
                <h5 className="inputLabel">Gender</h5>
                <input className="inputBox"
                type="text"
                name="gender"
                onChange={inputsHandler}
                placeholder=""
                value={inputField.gender}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Phone Number</h5>
                <input className="inputBox"
                type="text"
                name="phoneNumber"
                onChange={inputsHandler}
                placeholder="123-456-7890"
                value={inputField.phoneNumber}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Emergency Contact Name</h5>
                <input className="inputBox"
                type="text"
                name="emergencyContactFirstName"
                onChange={inputsHandler}
                placeholder="First Name"
                value={inputField.emergencyContactFirstName}/>
                <input className="inputBox"
                type="text"
                name="emergencyContactMiddleName"
                onChange={inputsHandler}
                placeholder="Middle Name"
                value={inputField.emergencyContactMiddleName}/>
                <input className="inputBox"
                type="text"
                name="emergencyContactLastName"
                onChange={inputsHandler}
                placeholder="Last Name"
                value={inputField.emergencyContactLastName}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Emergency Contact Phone Number</h5>
                <input className="inputBox"
                type="text"
                name="emergencyContactPhoneNumber"
                onChange={inputsHandler}
                placeholder="123-456-7890"
                value={inputField.emergencyContactPhoneNumber}/>
            </div>
            
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Triggering Stimuli</h5>
                <input className="inputBox"
                type="text"
                name="triggers"
                onChange={inputsHandler}
                placeholder="Loud sounds, bright lights"
                value={inputField.triggers}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Activities</h5>
                <input className="inputBox"
                type="text"
                name="activities"
                onChange={inputsHandler}
                placeholder="Jumping on the trampoline"
                value={inputField.activities}/>
            </div>
                        
            <div className="inputGrouping">
                <h5 className="inputLabel">Medication</h5>
                <input className="inputBox"
                type="text"
                name="medication"
                onChange={inputsHandler}
                placeholder=""
                value={inputField.medication}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Class</h5>
                <input className="inputBox"
                type="text"
                name="classes"
                onChange={inputsHandler}
                placeholder=""
                value={inputField.classes}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Notes</h5>
                <input className="inputBox"
                type="text"
                name="notes"
                onChange={inputsHandler}
                placeholder=""
                value={inputField.notes}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Hobbies</h5>
                <input className="inputBox"
                type="text"
                name="hobbies"
                onChange={inputsHandler}
                placeholder="Video games, hockey"
                value={inputField.hobbies}/>
            </div>
            
            <div className="inputGrouping">
                <h5 className="inputLabel">Why do you want to DJ?</h5>
                <input className="inputBox"
                type="text"
                name="whyDj"
                onChange={inputsHandler}
                placeholder=""
                value={inputField.whyDj}/>
            </div>
            
            <Link to="/levelupquestionnaire">
                <button className="button" onClick={submitButton}>Submit</button>
            </Link>
        </div>
    </div>
  );
}

export default NewStudent;
