import React, { Component } from 'react';
class Fetch extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
  
    componentDidMount() {
        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
  render() {
      return (
        <ul>
        {this.state.items.map(item => (
          <li key={item.userId}>
            {item.userId} {item.id}  {item.title} {item.completed}
          </li>
        ))}
      </ul>

      );
  }
}

export default Fetch;
