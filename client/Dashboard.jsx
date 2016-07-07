const { RaisedButton } = mui;

Dashboard = React.createClass({
  render() {
    let styles = {
      label: {
        fontSize: '16px'
      },
      diviframe: {
        width:800,
        height:500,
        left:-280,
         top:-90,

     }
    };
    return (
      <div className="dashboard">
        <Hamburger iconColor='#00bcd4' />
        <div className="container clearfix">
          <div className="info">
            <h3>API接入方式和访问令牌</h3>
            <ul>
              <li>
                <span>应用访问令牌：</span> 8d745872-5db7-4b60-b668-7efba9f8e3d4
              </li>
              <li>
                <span>数据API：</span> https://shtc.wisiot.com/open
              </li>
              <li>
                <span>设备接入协议：</span> mqtt
              </li>
              <li>
                <span>设备接入地址：</span> tcp://shtc.wisiot.com:1883
              </li>
            </ul>
            <div>
          <iframe  width="800" border="0" marginWidth="0" marginHeight="0" height="500" allowTransparency="yes" frameBorder="0"   src="http://42.123.86.187:3000/" scrolling="no" style={styles.diviframe}></iframe>
          </div>
          </div>

        </div>
      </div>
    );
  }
});
