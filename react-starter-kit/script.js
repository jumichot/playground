var Photo = React.createClass({
  getInitialState: function(){
    // here return a object
    return { liked: false }
  },
  render: function(){
    return (
      <div>
        <img src={this.props.imageUrl} />
        <span>{this.props.caption}</span>
      </div>
      )
  }
});

React.render(<Photo imageUrl="http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/10/sidebar-ppk-1.png" caption="my caption" />, document.body);
