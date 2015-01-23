var Photo = React.createClass({

  getInitialState: function(){
    // here return a object
    return { liked: false }
  },

  toggleLiked: function(){
    this.setState({liked: !this.state.liked});
  },

  render: function(){
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
      )
  }
});

React.render(<Photo imageUrl="http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/10/sidebar-ppk-1.png" caption="my caption" />, document.body);
