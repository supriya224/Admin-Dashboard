// import logo from './logo.svg';
// import  Home  from './components/RightPart/Home';
// import Menu  from './components/model/Main';
import './App.css';
import SideNavBar from './components/SideNavBar';

import Main from './components/Main';
import SearchBar from './components/SearchBar';
import Charts from './components/Charts/BarChart';

function App() {
  return (
    <div className="w-full flex bg-blue-50 ">
      <SideNavBar/>
      <SearchBar/>
      <Main/>

    <Charts/>
     
     
    </div>
  );
}

export default App;


