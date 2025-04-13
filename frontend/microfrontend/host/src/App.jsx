import React, { lazy, Suspense }  from "react";
import ReactDOM from "react-dom";

import "./index.css";

const UsersTestControl = lazy(() => import('users/UsersTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
})
);

const CardsTestControl = lazy(() => import('cards/CardsTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
})
); 

const App = () => (
  <div className="container">
    <Suspense fallback="loading…">
      <UsersTestControl></UsersTestControl>
    </Suspense>
    <Suspense fallback="loading…">
      <CardsTestControl></CardsTestControl>
    </Suspense>
  </div>
); 
ReactDOM.render(<App />, document.getElementById("app"));
