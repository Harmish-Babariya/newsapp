import './App.css';
import Home from './components/Home';
import Business from './components/Business';
import Health from './components/Health';
import Nav from './components/Nav.jsx';
import { Route, Switch } from 'react-router-dom';   
import Footer from './components/Footer';
import Entertainment from './components/Entertainment';
import Science from './components/Science';
import Technology from './components/Technology';
import Sports from './components/Sports';
import PrivacyPolicy from './components/PrivacyPolicy';
import Desclaimers from './components/Desclaimers';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
const App = () => {
 return (
     <><Nav/>
     <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/privacypolicy' component={PrivacyPolicy}/>
         <Route exact path='/desclaimers' component={Desclaimers}/>
         <Route exact path='/aboutus' component={AboutUs}/>
         <Route exact path='/business' component={Business}/>
         <Route exact path='/contactus' component={ContactUs}/>
         <Route exact path='/health' component={Health}/>
         <Route exact path='/entertainment' component={Entertainment}/>
         <Route exact path='/science' component={Science}/>
         <Route exact path='/technology' component={Technology}/>
         <Route exact path='/sports' component={Sports}/>
     </Switch>
     <Footer/>
  </>
 )
}

export default App;
