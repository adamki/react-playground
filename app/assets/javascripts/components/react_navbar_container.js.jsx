var ReactNavbarContainer = React.createClass({
  getInitialState: function(){
    return{
      whichComp: ""
    };
  },
  showLiveFontContainer: function(){
    this.setState({
      whichComp: "font"
    });
  },
  showToDoList: function(){
    this.setState({
      whichComp: "todo"
    });
  },
  showTimerContainer: function(){
    this.setState({
      whichComp: "timer"
    });
  },
  render: function(){
    return(
      <div>
        { this.state.whichComp === "" ?
          <h1 className="ui header">This is the React Navbar, choose a demo</h1>
          :
          <h1 className="ui header">This is the {this.state.whichComp} Component</h1>
        }

        <br/>
        <br/>
        <br/>
        <button onClick={this.showLiveFontContainer} className="ui button">Preview Live Fonts</button>
        <button onClick={this.showToDoList} className="ui button">ToDo List</button>
        <button onClick={this.showTimerContainer} className="ui button">React Timer</button>

        { this.state.whichComp === "font" ? <LiveFontContainer/> : null }
        { this.state.whichComp === "todo" ? <ToDoContainer/> : null }
        { this.state.whichComp === "timer" ? <TimerContainer/> : null }
      </div>
    );
  }
});
