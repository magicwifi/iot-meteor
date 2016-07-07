Chartmq = React.createClass({
    render: function() {
        var iframeStyles = {
            overflow : 'hidden',
            height : '100%',
            width: '100%'
        };

        return (
          <div>
            <iframe style={iframeStyles}
                    src="http://www.sina.com"
                    frameborder="0"
                    allowfullscreen>
            </iframe>
          </div>
        );
    }
});

