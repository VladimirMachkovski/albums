import '../css/index.css';
import myalbumeone_picture from '../pictures/summer.jpg';
const MyAlbumOne = ()=>{
  return(
    <div id='myalbumone'>
      <h2 className='myalbumone-title'>My Albume One</h2>
      <p className='myalbumone-pa'>Date created 29th November 2021</p>
      <div className='container2-div'>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>
        <div className="myalbumeone-pictures"><img src={myalbumeone_picture} alt="memories" className='myalbumeone-pictures' /><div className="myalbumeone-div">REMOVE</div></div>        
      </div>
      <button className='goback-button'>GO BACK</button>
      <button className='save-button'>SAVE</button>
    </div>
  )
}

export default MyAlbumOne;