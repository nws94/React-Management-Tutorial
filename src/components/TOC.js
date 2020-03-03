import React,{Component} from 'react';

class TOC extends Component {
  render() {
    let list = [];
    for(let item of this.props.data) {
      list.push(<li key={item.id}><a href={"/cotent/" + item.id}>{item.title}</a></li>)
    }
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
  }
}

export default TOC;