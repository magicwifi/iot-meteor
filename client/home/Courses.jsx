Courses = React.createClass({
  getInitialState() {
    return {
      courses: [
        {
          "id": "1",
          "cover": "/images/iot/yingjian.jpg",
          "title": "智能硬件自助开发",
          "link": "#"
        },
        {
          "id": "2",
          "cover": "/images/iot/farm.jpg",
          "title": "物联网农业监测",
          "link": "#"
        },
        {
          "id": "3",
          "cover": "/images/iot/industry.jpg",
          "title": "工业物联网&节能控制",
          "link": "#"
        },
        {
          "id": "4",
          "cover": "/images/iot/yuanqu.jpg",
          "title": "园区办公智能化",
          "link": "#"
        },
        {
          "id": "5",
          "cover": "/images/iot/wumai.jpg",
          "title": "环境监测&基础设施监控",
          "link": "#"
        },
        {
          "id": "6",
          "cover": "/images/iot/boche.jpg",
          "title": "智慧泊车",
          "link": "#"
        },
        {
          "id": "7",
          "cover": "/images/iot/jiaotong.jpg",
          "title": "实时公交",
          "link": "#"
        },
      ]
    };
  },

  render() {
    let courseList = _.map(this.state.courses, function(c, index) {
      return (
        <div className='card' key={index}>
          <a href={c.link}>
            <img src={c.cover} />
          </a>
          <div className='details'>
            <div className='title'>{c.title}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="big-title">成功案例</h1>
        <div className="courses">
          { courseList }
        </div>
      </div>
    );
  }
})
