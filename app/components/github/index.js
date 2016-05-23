import React from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import style from './styles.styl';


// 引入Fetch
import 'whatwg-fetch';

const ap = 'https://api.github.com/users/octocat/gists';
const ap2 = 'http://api.panli.com/ShoppingGuideAPI/GetTopicItems?pageSize=50&id=391&curPage=1&_=1463998084439';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:'ss'
        }        
    }
    
    
 // 组件渲染后获取外界数据
    componentDidMount() {
        fetch(ap)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    data: data[0]['description'],
                 
                });
       
                console.log(this.state.data);
            })
            .catch((ex) => {
                console.log(ex);
            });
    }
 
 
  render() {
    return (
      <div styleName="Github">
        {this.state.data} 
      </div>
    );
  }
}

export default Github;