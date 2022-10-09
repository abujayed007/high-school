import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
    {path:'/home',
    loader: () => fetch('school.json'),
    element:<Home></Home>}
    ]},
    {path:'*', element:<Error></Error>}
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
