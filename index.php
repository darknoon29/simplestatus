<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">

    <title>One IS ASP availibility</title>
</head>

<body>
    <header>
        <h1>Hello,</h1>
        <p>Welcome to Azure Network Availibity tool !</p>
    </header>

    <main>
<?php

echo "Check Site availability Passwordstate using VLAN: <br />\n";

$fp = fsockopen("passwordstate.arkadin.lan", 443, $errno, $errstr, 30);
//if the socket failed it's offline...
if (!$fp) {
    echo "Site not available : $errstr ($errno)<br />\n";
}else {

    echo "Website Reachable";
}

?>

</main>
    <footer>
        <p>OneIS website.</p>
    </footer>
</body>
</html>