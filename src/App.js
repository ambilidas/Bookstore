import './App.css';
import Home from './pages/home/home';
import Orderlogin from './pages/OrderLogin/orderlogin';
import Router from './components/router/router';
import Router1 from './components/router/router';
import { Provider } from 'react-redux';
import  store  from './components/redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router1 />
      </Provider>
      {/* <Orderlogin /> 
      <Home /> */}
     
    </div>
  );
}

export default App;
