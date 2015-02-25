// var ChatForm = React.createClass({
//   handleSubmit: function(e) {
//   },
//   render: function() {
//     return (
//       <form className="chatForm" onSubmit={this.handleSubmit}>
//         <input id='m' autocomplete='off' />
//         <button>Envoyer</button>
//       </form>
//     );
//   }
// });

var ChatBox = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a ChatBox."
      )
    );
  }
});

var ChatMessage = React.createClass({
  render: function() {
    return (
      React.createElement('li', {}, "")
    );
  }
});

// var ChatMessageList = React.createClass({
//   var messageNodes = this.props.data.map(function (chatMessage) {
//     return (
//       <ChatMessage>
//         {chatMessage.text}
//       </ChatMessage>
//     );
//   });
//   render: function() {
//     return (
//       <ul id='messages' className='commentList'>
//         { messageNodes }
//       </ul>
//     );
//   }
// }

React.render(
  <ChatBox />,
  document.getElementById('content')
);
