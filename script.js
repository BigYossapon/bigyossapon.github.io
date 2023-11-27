function SnackBar() {
    var colorDiv = document.getElementById("coloredDiv");
    colorDiv.setAttribute('style', 'background:red;');
    JavaScriptChannel.postMessage('hello i am form javascript');

}

function fromFlutter(token) {
    document.getElementById("title").innerHTML = token;
    sendBack(token);
}

function sendBack(token) {
    requestWorkPermitSection60_2_EwpScriptChannel.postMessage(token);
}

function autoLogin(token) {
    document.getElementById("title").innerHTML = token;
    sendBack(token);
}