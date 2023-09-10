// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
// import App from './App.jsx';
// import NotFound from './NotFound.jsx'; // Import your 404 page component
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes> {/* Use the Switch component to handle routes */}
//         <Route exact path="/" component={App} />
//         {/* Add other routes for your application */}
//         {/* The following route will handle 404 errors */}
//         <Route path="*" component={NotFound} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
