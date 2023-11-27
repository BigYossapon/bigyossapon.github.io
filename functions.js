function changeColor() {
    document.getElementById("my-div").style.backgroundColor = "green";
    var colorDiv = document.getElementById("coloredDiv");
    colorDiv.setAttribute('style', 'background:red;');
    JavaScriptChannel.postMessage('hello i am form javascript');
}

function downloadFilepdfsplit(fileUrl) {
    // Construct a temporary anchor element
    JavascriptChannel.postMessage('http://enos.itcollege.ee/~jpoial/allalaadimised/reading/Android-Programming-Cookbook.pdf');

}

function downloadFileimagesplit(fileUrl) {
    // Construct a temporary anchor element
    JavascriptChannel.postMessage('https://upload.wikimedia.org/wikipedia/commons/6/60/The_Organ_at_Arches_National_Park_Utah_Corrected.jpg');

}

function fromFlutter(token) {
    document.getElementById("title").innerHTML = token;
    sendBack(token);
}

function sendBack(token) {
    messageHandler.postMessage(token);
}

function autoLogin(token) {
    document.getElementById("title").innerHTML = token;
    sendBack(token);
}