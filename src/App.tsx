import {
  RouterProvider,
  } from 'react-router-dom';
import routes from './routes';
import Mulish from './fonts/Mulish-Regular.ttf';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle=createGlobalStyle` 
@font-face {
  font-family:'Regular' ;
  src: url(${Mulish}) format('truetype');
  font-weight: 300;
   
}
` 

function App() {
  
  return (
    <>
    <GlobalStyle/>
     <RouterProvider router={routes}/>
    </>
      
  );
}

export default App;
