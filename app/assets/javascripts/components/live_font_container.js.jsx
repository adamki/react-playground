var LiveFontContainer = React.createClass({
  getInitialState: function(){
    return{
      text: "Let's get Started! Try typing something in!"
    };
  },
  onChange: function(e){
    this.setState({text: e.target.value});
  },
  handleClick: function(){
    this.setState({text: ""});
    console.log(this.state.text);
  },
  render: function(){
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="ui message">
          <div className="header">
            <p>This is a Font Preview Component. It is written in React and will dynamically display the render font of your choice.</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <InputField text={this.state.text} onChange={this.onChange} />


        <table className="ui selectable inverted table">
          <thead>
            <tr>
              <th>Font</th>
              <th className="right aligned">Preview</th>
            </tr>
          </thead>
          <tbody>
            <Output font = "Helvetica Neue" val={this.state.text}></Output>
            <Output font = "Proxima Nova" val={this.state.text}></Output>
    				<Output font = "Comic Sans MS" val={this.state.text}></Output>
    				<Output font = "Lato" val={this.state.text}></Output>
    				<Output font = "Cabin" val={this.state.text}></Output>
    				<Output font = "Andale Mono"val={this.state.text}></Output>
          </tbody>
        </table>
      </div>
    );
  }
});

var InputField = React.createClass({
  update: function (e){ 
    this.props.onChange(e);
  },
  render: function(){

    return(
      <form className="ui form center aligned column stackable center page grid">
        <div className="eight wide field inline">
          <input type="text" placeholder="Let's get Started" onChange={this.update}/>
        </div>
        <br/>
      </form>
    );
  }
});

var Output = React.createClass({
  render: function() {
		var largeStyle = {
			fontFamily : this.props.font,
			fontSize : 28
		};
    var smallStyle = {
			fontFamily : this.props.font,
      fontSize: 20
    };
		return(
      <tr>
        <td>
  				<div className = "fontName" style = {largeStyle}>
  					{this.props.font}
  				</div>
        </td>

        <td className="right aligned">
  				<div style = {smallStyle} className = "output">
  					{this.props.val}
  				</div>
        </td>
      </tr>
		);
	}
});
