var ToDoContainer = React.createClass({
  getInitialState: function(){
    return{
      show: false,
      listItems: []
    };
  },
  addItem: function(){
    console.log("Add a new item");
  },
  render: function(){
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="ui message">
          <div className="header">
            <p>This is the To-Do list component. It shows dynamic CRUD functionality in React.</p>
          </div>
        </div>

        <br/>
        <br/>
        <NewIdeaForm ideas={this.state.listItems}/>
        <br/>
        <br/>
        <ItemList ideas={this.state.listItems}/>
      </div>
    );
  }
});


var NewIdeaForm = React.createClass({
  addItem: function(e){
    e.preventDefault();
    console.log(ReactDOM.findDOMNode(this.refs.title).value.trim());
    console.log(ReactDOM.findDOMNode(this.refs.description).value.trim());
  },
  render: function(){
    return(
      <form className="ui form center aligned column stackable center page grid">
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="title" ref="title" />
        </div>
        <div className="eight wide field">
          <label>Description</label>
          <input type="text" name="description" placeholder="description" ref="description" />
        </div>
        <button onClick={this.addItem} className="ui button inline">Add Item</button>
      </form>
    );
  }
});

var ItemList = React.createClass({
  render: function(){
    return(
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a className="header">Item ONE</a>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
      </div>
    );
  }
});
