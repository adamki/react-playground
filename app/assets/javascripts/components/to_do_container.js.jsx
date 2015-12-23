var ToDoContainer = React.createClass({
  getInitialState: function(){
    return{
      show: false,
      listItems: []
    };
  },
  handleNewItem: function(title, description){
    var item = {title: title, body: description}
    var that = this.state.listItems;
    this.setState({
      listItems: that.concat(item)
    });
  },

  render: function(){
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="ui message">
          <div className="header">
            <p>This is the To-Do list component. It shows dynamic CRUD functionality in React. This entire List is built CLient-Side and does not save upon refresh.</p>
          </div>
        </div>

        <br/>
        <br/>
        <NewItemForm items={this.state.listItems} newItem={this.handleNewItem}/>
        <br/>
        <br/>
        <ItemList items={this.state.listItems}/>
      </div>
    );
  }
});


var NewItemForm = React.createClass({
  getInitialState: function(){ return{
      titleDefault: "Title",
      bodyDefault: "Description"
    }
  },
  addItem: function(e){
    e.preventDefault();
    var title       = ReactDOM.findDOMNode(this.refs.title).value.trim();
    var description = ReactDOM.findDOMNode(this.refs.description).value.trim();

    if(!title || !description){
      return;
    }

    this.props.newItem(title, description);

    ReactDOM.findDOMNode(this.refs.title).value = ""
    ReactDOM.findDOMNode(this.refs.description).value = ""
  },
  render: function(){
    return(
      <form className="ui form center aligned column stackable center page grid" onSubmit={this.addItem}>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" val="Title" placeholder="Title" ref="title" />
        </div>
        <div className="eight wide field">
          <label>Description</label>
          <input type="text" name="description" val="Description" placeholder="Description" ref="description" />
        </div>
        <input type="submit" value="Post" className="ui button"/>
      </form>
    );
  }
});

var ItemList = React.createClass({
  render: function(){
    var item = this.props.items.map(function(item, index){
      return(
        <div className="ui relaxed divided list three column grid">
          <div className="column three wide "></div>
          <div className="item column ten wide" key={index}>
            <div className="content left floated">
              <h3 className="header">Title: {item.title}</h3>
              <div className="description">Description: {item.body}</div>
            </div>

            <div className="right floated content">
              <i className="large write middle aligned icon"></i>
              <i className="large remove selection emiddle aligned icon"></i>
            </div>
          </div>
        </div>
      )
    }.bind(this));
    return(
      <div>
        {item}
      </div>
    );
  }
});
