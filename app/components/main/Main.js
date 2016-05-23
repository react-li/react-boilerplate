import React from 'react';
import cssModules from 'react-css-modules';
import style from './styles.styl';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
    };
  }
  componentDidMount() {
    this.init();
  }
  componentWillReceiveProps() {
    this.init();
  }
  init() {
    this.setState({
      isHome: this.context.router.isActive('/', true),
    });
  }
  render() {
    return (
      <div>
        <header styleName="header">
          <div styleName="container">
            <span> App: </span>
            {this.state.isHome ? <span>首页 </span> : <span>子页面</span>}
          </div>
        </header>
        <section>
          <div styleName="container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

Main.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default cssModules(Main, style);
