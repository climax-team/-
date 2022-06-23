import React from "react";
import { Route, Link } from 'react-router-dom';
import './style/app.css'
import Main from './pages/Main';
import GBSW from './assets/GBSW.png'
import Uisung from './assets/Uisung.png'

const App = () => {
  return (
    <div className="main">
      <div className="head">
        <Link to="/"><h1 className="title">의성 종합 버스 서비스</h1></Link>

      </div>
      <div className="body">
        <Route exact path="/" component={Main} />
      </div>
      <div className="footer">
        <div className="img">
          <a rel="noreferrer" href="http://school.gyo6.net/gbsw?intro=N" target="_blank"><img src={GBSW} alt="GBSW" className="GBSW" /></a>
          <a rel="noreferrer" href="https://www.usc.go.kr/" target="_blank"><img src={Uisung} alt="Uisung" className="UISUNG" /> </a>
        </div>
      </div>
    </div>

  )
}

export default App;