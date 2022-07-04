import '../css/index.css';
import {Link} from 'react-router-dom';
const Header = ()=>{
  return(
    <div id="header">
      <Link to='/'><span className="header-title">valstock</span></Link>
    </div>
  )
}

export default Header;