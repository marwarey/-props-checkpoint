import './App.css';
import Profile from './ProfileP/Profile';
import image from './ProfileP/pic1.jpg' ;
import PropTypes from "prop-types";
function App() {
  return (
    <div className="App">
      <Profile name='Marwa' lastName='Riahi' profession='*******'
       bio='**************** ' img={image}/>
    </div>
  );
}

export default App;
