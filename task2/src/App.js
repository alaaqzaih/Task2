import './App.css';
import React, { Component } from 'react';

// import StateFullComponent from './Components/StateFullComp';

// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       showChild: true
//     }
//   }

//   distroyComp() {
//     this.setState({
//       showChild: false
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <button onClick={this.distroyComp.bind(this)}>Distroy Component</button>
//         </div>
//         {this.state.showChild ?
//           <StateFullComponent />

//           : null}

//       </div>
//     );
//   }

// }

// const Child = (props) => {
//   return (
//     <div>{props.car}</div>
//   )
// }





class App extends Component {


  constructor(props) {
    
    super(props)
    this.state = {
      arr : [{name: 'Ahmad', age: 30},
      {name: 'Yousef', age: 12},
      {name: 'Shatha', age: 14},
      {name: 'Rana', age: 22},
      {name: 'Osama', age: 22},
      {name: 'Ahmad', age: 38} ],
      uniqueNames : []

    //  greeting: 'hello',
     
    }
    // this.removedub = this.removedub.bind(this);
    console.log('constructor');
  //  console.log(this.state.uniqueNames);


  }

  // removedub() {
  //   const uniqueEmployees = this.state.arr.filter(element => {
  //     const isDuplicate = this.state.uniqueNames.includes(element.name);
  
  //     if (!isDuplicate) {
       
  
  //       this.setState(
  //         this.state.uniqueNames.push(element.id)()
  //        )      }
  
  //     return false;
  //   });
    
  //   console.log(this.state.uniqueNames);

  // }
  // componentDidMount() {
  //   console.log('did mount');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState', prevState, 'current', this.state)
  //   if (prevState.greeting === 'hello') {
  //     this.setState({
  //       hi: 'say hi'
  //     })
  //   }



  // }

  deleteElement() {
    this.setState(
    this.state.arr.pop()
   )
  }
  

  //  removeDuplicate() {
  //   this.setState(
  //     this.state.uniqueNames =this.state.arr.filter((val, id, array) => {
  //       return array.indexOf(val) == id;  
  //    })
  //  )
  // }

  render() {
    console.log('render');
    // console.log(this.state.uniqueNames);

    // this.setState({greeting: ''})
    return (
      <div>
        <h1>Names Ages</h1>
         <ul>
          {this.state.arr.map((item,idx) => { 
            return <li key={idx}> {item.name}  </li>
          })}
        </ul>

        {/* <div>Ages</div> */}

        <ul>
          {this.state.arr.map((item,idx) => { 
            
            return <li key={idx}>{item.age} </li>
          })}
        </ul>
        <div>
        <button onClick={this.deleteElement.bind(this)}>deleteElement</button>
        </div>
      </div>
    )
  }
}

export default App;


//------------- example for why binding is loosing when using event handler --------------
//////////////

