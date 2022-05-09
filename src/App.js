import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
//import HomeComponent from './components/HomeComponent';

class App extends Component {

    constructor() {
        super();
        this.state = {
          apiData: '',
          loading: false,
        }
        this.getApiData = this.getApiData.bind(this);
    }

/** This is function is for calling the API and fetching the data **/
    getApiData() {
        let fetchPromise = fetch("http://localhost:5000/data");
        let p1 = fetchPromise
             .then((data)=>{
                 console.log(data);
                 this.setState({loading: true});
                 if(data.status===200)
                 {
                     console.log('Response Received')
                     this.setState({loading: false});
                     return data.json();
                 }
                 else{
                     console.log(`Error in Fetching`)
                     this.setState({loading: false});
                     return Promise.reject('Failed to Fetch Api Data')
                 }
             })
             p1.then((response)=>{
                      this.setState({apiData: response})
                  })
              p1.catch((error)=>{
              this.setState({loading: false});
                  console.log(error);
              })
      }

/** This is React JS lifecycle method, calling an API on mount only **/
      componentDidMount() {
        this.getApiData();
      }

    render(){
        const {apiData, loading} = this.state;
        if (loading) return "Loading...";

        return (
            <Router>
                <div className="App">
                    {apiData && apiData.images ?
                        <React.Fragment>
                            <header class="header">
                              <nav>
                                <h2 class="logo">
                                  Car Photos
                                </h2>

                                <button class="cta-contact">
                                  Get in touch
                                </button>
                              </nav>
                            </header>
                            <div className="main-content">
                                <Routes>
                                  <Route exact path="/" element={<Home imageData={apiData.images} history={this.props.history} />}>
                                  </Route>
                                  <Route exact path="/detail" element={<Detail />}>
                                  </Route>
                                </Routes>
                            </div>

                            <footer class="page-footer">
                                <small>© Copyright 2022. All rights reserved.</small>
                              </footer>

                        </React.Fragment> : <h1>No Data Available</h1>
                    }
                </div>
            </Router>
          );
    }

}

export default App;
