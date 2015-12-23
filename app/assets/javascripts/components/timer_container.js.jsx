var TimerContainer = React.createClass({
  getInitialState: function(){
    return {
      elapsed: 0,
      start: Date.now()
    };
  },
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 50);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  tick: function(){
    this.setState({elapsed: new Date() - this.state.start});
  },
  render: function(){
    var elapsed = Math.round(this.state.elapsed / 100);

    var seconds = (elapsed / 10).toFixed(1);

    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="ui message">
          <div className="header">
            <p>This is a Timer Component. It re-renders every 50ms and compares the actual DOM to the virtual DOM and updates dynamicurry</p>
          </div>
        </div>
        <p>This example was started <b>{seconds} seconds</b> ago.</p>
      </div>
    );
  }
});
