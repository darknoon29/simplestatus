<?php

$fp = fsockopen("https://passwordstate.arkadin.lan", 443, $errno, $errstr, 30);
//if the socket failed it's offline...
if (!$fp) {
    echo "Site not available : $errstr ($errno)<br />\n";
}else {

    echo "Website Reachable";
}

?>