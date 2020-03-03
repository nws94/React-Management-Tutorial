import React from 'react';
// import Subject from './components/Subject'
// import TOC from './components/TOC'
// import Content from './components/Content'
import Customer from './components/Customer'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [
        {id: 1,image: "https://placeimg.com/64/64/1",name: "남우석", birthday: "941008", gender: "남자", job: "대학생"},
        {id: 2,image: "https://placeimg.com/64/64/2",name: "홍길동", birthday: "940504", gender: "여자", job: "백수"},
        {id: 3,image: "https://placeimg.com/64/64/3",name: "김나영", birthday: "940313", gender: "남자", job: "회사원"},
      ]
    }
  }
  render() {
    
    return (
      <div className="App">
        {
          this.state.customers.map(c => {
            return  <Customer
                      key={c.id}
                      id= {c.id}
                      image = {c.image}
                      name = {c.name}
                      birthday = {c.birthday}
                      gender = {c.gender}
                      job = {c.job}
                    />
          })
        }
       
      </div>
    );
  }
}

export default App;
