import React from 'react';
import {Route, Routes} from "react-router-dom";
import Error from './container/error/error';
import Home from './container/home/home';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:id" exact element={<Home />} />
      <Route render={() => <Error errorcode={"[404] Page Not Found!"} />} />
    </Routes>
  );
}

export default App;
