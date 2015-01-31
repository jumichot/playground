// http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html
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
      );
  }
});

var PhotoGallery = React.createClass({
  getDataFromServer: function(){
    return [{
      url: 'http://tinyurl.com/lkevsb9',
      caption: 'New York!'
    },
    {
      url: 'http://tinyurl.com/mxkwh56',
      caption: 'Cows'
    },
    {
      url: 'http://tinyurl.com/nc7jv28',
      caption: 'Scooters'
    }];
  },
  render: function(){
    var data = this.getDataFromServer();
    var photos = data.map(function(photo){
      return <Photo src={photo.url} caption={photo.caption} />
    });
    return(
      <div className="photo-gallery">
        {photos}
      </div>
    );
  }
});

React.render(<PhotoGallery />, document.body);
