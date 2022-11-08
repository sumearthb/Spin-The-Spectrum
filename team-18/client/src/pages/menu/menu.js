import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
  return (
    <div className="content">
      <h3 className="title">Main Menu</h3>
      <div className="container">
        <Link to="/instructor">
          <div className="choice">Instructor</div>
        </Link>
        <Link to="/newstudent">
          <div className="choice">New Student</div>
        </Link>
        <Link to="/returningstudent">
          <div className="choice">Returning Student</div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
