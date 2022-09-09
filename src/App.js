import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Home from "./components/Home";
import Layout from './components/Layout';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Route>
        <Route path='/*' element="<div>Page Not Found</div>" /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
