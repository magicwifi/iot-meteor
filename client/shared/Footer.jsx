Footer = React.createClass({
  render() {
    let styles = {
      root: {
        padding: '30px 0',
        textAlign: 'center',
        backgroundColor: '#212121',
        color: '#fff',
      },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '230px',
        margin: '20px auto',
      }
    };
    return (
      <div style={styles.root}>
        <p>更多内容和讨论，欢迎添加我们的微信：ctbricloudapp</p>
        <img src='/images/wechat.jpg' style={styles.img}/>
      </div>
    );
  }
})
