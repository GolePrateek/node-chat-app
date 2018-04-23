var socket = io();

socket.on('connect',function(){
  console.log('Connected to server.');
});

socket.on('disconnect',function(){
  console.log('Disconnected from server.');
});

socket.on('newMessage',function(message){
  console.log('New message',message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newLocationMessage',function(message){
  console.log('New Location message',message);
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href',message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

//Acknowledgement using callback
// socket.emit('createMessage',{
//   from:'Franz',
//   text:'Hi!'
// }, function(data){
//   console.log('Got it.',data);
// });

jQuery('#message-form').on('submit',function(e){
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage',{
    from:'User',
    text:jQuery('[name=message]').val()
  },function(){
    messageTextbox.val('');
  });
});

var locationButton = jQuery('#send-location');

locationButton.on('click',function(e){
  console.log('Inside the click event on send-location button.');

  locationButton.attr('disabled',true).text('Sending location...');

  if(!navigator.geolocation){
    return alert('Geolocation not supported by your browser.');
  }

  navigator.geolocation.getCurrentPosition(function(position){
    locationButton.attr('disabled',false).text('Send location');
    socket.emit('createLocationMessage',{
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  },function(){
    alert('Unable to fetch location.')
  })
});
