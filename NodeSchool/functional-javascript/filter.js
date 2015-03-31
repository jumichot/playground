function getShortMessages(messages) {
  return messages.filter(function(message){
    if(message.message.length < 50){
      return true;
    }
  }).map(function(message){
    return message.message;
  });
}

module.exports = getShortMessages;
