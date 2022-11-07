import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from './app/keycloak.js'
import PrivateRoute from './app/PrivateRoute.js';
import { Navbar } from './app/Navbar.js';

import { AddBoardForm } from './features/board/AddBoardForm.js'
import { EditBoardForm } from './features/board/EditBoardForm'
import { BoardList } from './features/board/BoardList'
import { BoardPage } from './features/board/BoardPage'

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
      <Navbar />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<><BoardList />
              <PrivateRoute>
                <AddBoardForm />
              </PrivateRoute>
              </>} />
            <Route exact path="/board/:id" element={<BoardPage/>} />
            <Route exact path="/editboard/:id" element={<EditBoardForm/>} />
            <Route exact path="/board" element={<AddBoardForm/>} />
          </Routes>
        </div>
      </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
