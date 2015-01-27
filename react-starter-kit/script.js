var converter = new Showdown.converter();
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Julien Miu", text: "This is *another* comment"}
];

var Comment = React.createClass({

  render: function(){
    var rawHtml = converter.makeHtml(this.props.children)
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawHtml }}></span>
      </div>
      );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className="commentForm">
        Hello I'm the commentForm
      </div>
      );
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentsNode = this.props.data.map(function(data){
      return <Comment author={data.author}>{data.text}</Comment>
    });
    return (
      <div className="commentList">
        {commentsNode}
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments </h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

React.render(<CommentBox data={data} />, document.body);
