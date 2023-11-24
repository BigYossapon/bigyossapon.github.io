function SnackBar() {
    var colorDiv = document.getElementById("coloredDiv");
    colorDiv.setAttribute('style', 'background:red;');
    JavaScriptChannel.postMessage('hello i am form javascript');

}

function fromFlutter(token) {
    document.getElementById("title").innerHTML = newTitle;
    sendBack();
}

function sendBack() {
    messageHandler.postMessage("Hello from JS");
}