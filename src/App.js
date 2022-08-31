import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  
  render() {


    return (
      <div>

        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>

            <Route path="/" element={<News  setProgress={this.setProgress} key={"generasdl"} pageSize={5} country="in" category="general" />} />
            <Route path="/business" element={<News  setProgress={this.setProgress} key={"business"} pageSize={5} country="in" category="business" />} />
            <Route path="/entertainment" element={<News  setProgress={this.setProgress} key={"entertainment"} pageSize={5} country="in" category="entertainment" />} />
            <Route path="/health" element={<News  setProgress={this.setProgress} key={"health"} pageSize={5} country="in" category="health" />} />
            <Route path="/science" element={<News  setProgress={this.setProgress} key={"science"} pageSize={5} country="in" category="science" />} />
            <Route path="/sports" element={<News  setProgress={this.setProgress} key={"sports"} pageSize={5} country="in" category="sports" />} />
            <Route path="/technology" element={<News  setProgress={this.setProgress} key={"technology"} pageSize={5} country="in" category="technology" />} />

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
