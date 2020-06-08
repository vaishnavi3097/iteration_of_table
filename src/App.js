
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      Data: [
        {
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "ActiveStatus": true
        },
        {
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          "ActiveStatus": false
        },
        {
          "id": 3,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
          "ActiveStatus": false
        },
        {
          "id": 4,
          "title": "est quas o",
          "body": "autem veniam sed est\nvoluptatem omnis possimus esse voluptatibus quaerat sunt aut fugiat sit  neque",
          "ActiveStatus": true
        },
        {
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
          "ActiveStatus": false
        },
        
     ]
    }
  }

  TableData() {
    return this.state.Data.map((student, index) => {
       const { id, title, body,ActiveStatus } = student 
       return (
          <tr >
             <td>{id}</td>
             <td>{title}</td>
             <td>{body}</td>
           <td>{ActiveStatus ? "Enable" : "Disabled" }</td>
          </tr>
       )
    })
 }

 TableHeader() {
  let header = Object.keys(this.state.Data[0])
  return header.map((key, index) => {
     return <th key={index}>{key}</th>
  })
}
  render () {
    return (
      <div>
            <h1 id='title'> Table</h1>
            <table id='Data'>
               <tr>{this.TableHeader()}</tr>
                   {this.TableData()} 
            </table>
         </div>
    )
  }
}
export default App;