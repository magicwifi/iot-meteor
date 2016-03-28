Cooper = React.createClass({
  render() {
    let styles = {
      root: {
        padding: '10px 0',
        textAlign: 'center',
      },
      img: {
        display: 'block',
        width: '100%',
        margin: '20px auto',
      }
    };
    return (
      <div style={styles.root}>
        <h1 className="big-title">合作&模组</h1>
        <div className="courses">
        <img src='/images/partner.png' style={styles.img}/>
        </div>
      </div>
    );
  }
})
