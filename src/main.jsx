import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import ListProductComponent from './components/ListProductComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderComponent/>
    <ListProductComponent />
    <FooterComponent/>
  </React.StrictMode>,
)
