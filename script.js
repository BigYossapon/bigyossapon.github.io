function SnackBar() {
    var colorDiv = document.getElementById("coloredDiv");
    colorDiv.setAttribute('style', 'background:red;');
    JavaScriptChannel.postMessage('hello i am form javascript');

}