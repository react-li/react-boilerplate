import React from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import style from './styles.styl';


// 引入Fetch
import 'whatwg-fetch';

const ap = 'https://api.github.com/users/octocat/gists';
const ap2 = '/ShoppingGuideAPI/GetTopicItems?pageSize=50&id=391&curPage=1&_=1463998084439';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }        
    }
    
    
 // 组件渲染后获取外界数据
    componentDidMount() {
        fetch(ap2)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    data: data.Content,
                 
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
        <div styleName='goBlack'><Link to="/">[返回]</Link></div>
        {this.state.data.map((item, index) => 
          <div styleName="prolistBox" key={index}>
                <div styleName="thumbBox">
                    <img src={item.img} />
                   
                </div>
                {item.Name}
           </div>
        )}
      </div>
    );
  }
}
export default cssModules(Github, style);