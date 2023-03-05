import React from 'react'
import Login from '../containers/Login.jsx';
import Layout from '../containers/Layout.jsx';
import '../styles/global.css';

export const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default App;