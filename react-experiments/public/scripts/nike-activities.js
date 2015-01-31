
var ActivityBox = React.createClass({
  getInitialState: function() {
    return {startTime: "nop"};
  },
  onChooseRun: function(toto){
    this.setState({startTime: toto});
  },
  render: function() {
   var activities = this.props.input_data.data;
    return(
      <div>
        <ListActivities onChooseRun={this.onChooseRun} activities={activities} />
        <ActivityDetail startTime={this.state.startTime}/>
      </div>
    );
  }
});

var ActivityDetail = React.createClass({
  render: function() {
    return(
      <span>{this.props.startTime}</span>
    );
  }
});

var ListActivities = React.createClass({
  toto: function(){
    alert("yo");
    e.preventDefault();
    console.log(e);
    console.log("yo");
  },
  render: function() {
    var activityNodes = this.props.activities.map(function(activity, i){
      return (
        <ActivityLink onSomeEvent={this.toto} activity={activity} />
        );
    });
    return (
      <ul>
        {activityNodes}
      </ul>
      );
  }
});

var ActivityLink = React.createClass({
  render: function() {
    return(
      <li><a href="" onClick={this.props.onSomeEvent}>{this.props.activity.startTime}</a></li>
      );
  }
});

var input_data = {"data":[{"links":[{"rel":"self","href":"https://api.nike.com/v1/me/sport/activities/3198000000011524937810007382618856401351"}],"activityId":"3198000000011524937810007382618856401351","activityType":"RUN","startTime":"2015-01-11T17:43:29Z","activityTimeZone":"Europe/Paris","status":"COMPLETE","deviceType":"IPHONE","metricSummary":{"calories":"294","fuel":"1209","distance":"4.6499457359313965","steps":"0","duration":"0:27:07.428"},"tags":[{"tagType":"WEATHER","tagValue":"SUNNY"},{"tagType":"LOCATION","tagValue":"OUTDOORS"}],"metrics":[]},{"links":[{"rel":"self","href":"https://api.nike.com/v1/me/sport/activities/33af63ef-0ae1-450e-b08f-fac11f7d3b67"}],"activityId":"33af63ef-0ae1-450e-b08f-fac11f7d3b67","activityType":"ALL_DAY","startTime":"2015-01-10T23:00:00Z","activityTimeZone":"Europe/Paris","status":"IN_PROGRESS","deviceType":"IPHONE","metricSummary":{"calories":"0","fuel":"1209","distance":"0.0","steps":"0","duration":"0:00:00.000"},"tags":[],"metrics":[]},{"links":[{"rel":"self","href":"https://api.nike.com/v1/me/sport/activities/3461000000000142398010007452134943424435"}],"activityId":"3461000000000142398010007452134943424435","activityType":"RUN","startTime":"2015-01-04T17:18:19Z","activityTimeZone":"Europe/Paris","status":"COMPLETE","deviceType":"IPHONE","metricSummary":{"calories":"375","fuel":"1531","distance":"5.93791389465332","steps":"0","duration":"0:33:59.354"},"tags":[{"tagType":"EMOTION","tagValue":"UNSTOPPABLE"},{"tagType":"LOCATION","tagValue":"OUTDOORS"},{"tagType":"WEATHER","tagValue":"SUNNY"}],"metrics":[]},{"links":[{"rel":"self","href":"https://api.nike.com/v1/me/sport/activities/82d5046f-b654-4d12-ba50-2e2d52bdc8b9"}],"activityId":"82d5046f-b654-4d12-ba50-2e2d52bdc8b9","activityType":"ALL_DAY","startTime":"2015-01-03T23:00:00Z","activityTimeZone":"Europe/Paris","status":"IN_PROGRESS","deviceType":"IPHONE","metricSummary":{"calories":"0","fuel":"1531","distance":"0.0","steps":"0","duration":"0:00:00.000"},"tags":[],"metrics":[]},{"links":[{"rel":"self","href":"https://api.nike.com/v1/me/sport/activities/3198000000000671826980007382618856048442"}],"activityId":"3198000000000671826980007382618856048442","activityType":"RUN","startTime":"2015-01-01T13:43:29Z","activityTimeZone":"Europe/Paris","status":"COMPLETE","deviceType":"IPHONE","metricSummary":{"calories":"353","fuel":"1453","distance":"5.584712505340576","steps":"0","duration":"0:32:05.321"},"tags":[{"tagType":"WEATHER","tagValue":"SUNNY"},{"tagType":"LOCATION","tagValue":"OUTDOORS"}],"metrics":[]}],"paging":{"next":"/v1/me/sport/activities?access_token=LyNYPl8lRiK0HI3O2oY0wfPklGme&offset=6","previous":null}}
React.render( <ActivityBox input_data={input_data}/>, document.body);
