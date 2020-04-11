import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/Home/Home";
import {useUser} from './context/auth'
import ReactDOM from 'react-dom'
import App from './app'
import AppProviders from './context'
import AuthenticatedApp from './authenticated-app'
import UnauthenticatedApp from './unauthenticated-app'

function App() {
  const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
  const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;
