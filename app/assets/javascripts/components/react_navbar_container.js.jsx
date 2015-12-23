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
        { this.state.whichComp === "font" ? <LiveFontContainer/> : null }
        { this.state.whichComp === "todo" ? <ToDoContainer/> : null }
      </div>
    );
  }
});
