import React, { Component } from 'react';
import Data from './Data'
import './App.css';

class Table extends Component {
     BackendDatas = () => {
        let backendData = Data();
            fetch('http://rest.learncode.academy/api/learncode/friends', {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: 'POST',
                body: JSON.stringify({backendData
                })
            })
        }
    
        createRow = () => {
            let backendData = this.BackendDatas().then((results) => {return results});
            let trs = [];
            for (let i = 0; i < backendData.length; i++) {
                trs.push(<tr row = {backendData[i]} />);
            }
            return trs;
        }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default Table;
