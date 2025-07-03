import React from 'react'
import Navbar from '../../components/Navbar'

let renderCount = 0;

function AboutUs  ()  {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  renderCount++;
  
  return (
    <div>
     <Navbar />
     <header rcount={renderCount} />
     <form>
          <input type="text" placeholder='Enter your first name' value={fName}  /> <br />
          <input type="text" placeholder='Enter your last name' value={lName} /> <br />
          <input type="submit" id="Submit" />
        </form>
    </div>
  )
}

export default AboutUs