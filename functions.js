function changeColor() {
    document.getElementById("my-div").style.backgroundColor = "green";
    var colorDiv = document.getElementById("coloredDiv");
    colorDiv.setAttribute('style', 'background:red;');
    JavaScriptChannel.postMessage('hello i am form javascript');
}