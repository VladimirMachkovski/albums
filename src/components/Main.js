import '../css/index.css';
import {Link} from 'react-router-dom';
const Main =()=>{
  return(
    <div id="main">
      <div className='main-div'>
      <h1 className='main-title'>Join our stock community</h1>
      <p className='main-pa'>Download free photos and videos powered by the best photographers.</p>
      </div>
      <h4 className='username'>USERNAME</h4>
      <input type="text" placeholder='Enter username here' className='input-username'/>
      <Link to='myalbumone'><h4 className='password'>PASSWORD</h4></Link>
      <input type="text" placeholder='Enter password here' className='input-password'/>
      <br />
      <br />
      <Link to='myalbums'><button className='logIn-button'>LOG IN</button></Link>
    </div>
  )
}

export default Main;