const { RaisedButton } = mui;

Home = React.createClass({
  render() {
    return (
      <div className="home">
        <Hamburger />
        <div className="home-slogan">
          <div className="overlay">
            <div className="content">
              <h1 className="title">
                <span>欢迎来到</span>
                <span className="name">新连接平台</span>
              </h1>
            </div>
          </div>
        </div>
        <Courses />
        <Cooper />
      </div>
    );
  }
});
