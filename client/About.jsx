const { RaisedButton } = mui;

About = React.createClass({
  render() {
    let styles = {
      label: {
        fontSize: '16px'
      }
    };
    return (
      <div className="about">
        <Hamburger iconColor='#00bcd4' />
        <div className="container clearfix">
          <div className="story">
            <h3>个人信息</h3>
            <div className="desc">
              中国电信物联网新连接平台始终秉承开放合作的态度，为智能硬件创客和创业企业提供硬件社区服务，为中小企业客户物联网应用需求提供数据展现、数据分析和应用生成服务，为重点行业领域/大客户提供行业PaaS服务和定制化开发服务。
            </div>
          </div>
          <div className="paper">
            <img src="/images/team.jpg" />
          </div>
          <div className="info">
            <h3>联系方式</h3>
            <ul>
              <li>
                <span>名称：</span> 中国电信物联网团队
              </li>
              <li>
                <span>邮箱：</span> huangzhe@ctbri.com.cn
              </li>
              <li>
                <span>微信：</span> ctbricloudapp
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
});
