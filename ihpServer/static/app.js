$(document).on('ready turbolinks:load', function () {
    // This is called on the first page load *and* also when the page is changed by turbolinks
});

var webSocketController = new WebSocket('ws://localhost:8000/WebsocketController');

webSocketController.onopen = function (event) {
    console.log('Connected');
};

webSocketController.onmessage = function (event) {
    console.log(event.data);
};