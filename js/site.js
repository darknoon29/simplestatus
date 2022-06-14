function refresh() {
    document.getElementById("message").innerHTML = "Check in progress...";
    sendRequesttoTestAPI();
}

function sendRequesttoTestAPI() {

    console.log("Sending Request Function");
    var url = "https://passwordstate.arkadin.lan/logins/loginadan.aspx?"    
    var xhr = new XMLHttpRequest();
    xhr.timeout = 10000;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
            console.log(xhr.status);
            
            if (xhr.status == 200) {

                sendsitevisible();
            }else{

                sendSitenotfound(xhr.status);
            }
        }
    });


    xhr.open("GET", url, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", window.location);
    xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
    

    xhr.ontimeout = function (e) {
        // Requête qui a expiré. On traite ce cas.
        sendtimeout();
      };

    xhr.send();

}


function sendSitenotfound(statuscode) {
    document.getElementById("message").innerHTML = "Error: HTTP Status Code = " + statuscode;
}

function sendtimeout() {
    document.getElementById("message").innerHTML = "Timeout.";
}

function sendsitevisible() {
    document.getElementById("message").innerHTML = "Internal Connection Ok";
}