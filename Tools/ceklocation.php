<?php
/*
    JNCK MEDIA (c) 2018
    https://github.com/dandyraka/InstaLoc
    Dandy Raka
*/

function curl($link){
	$c = curl_init();
	curl_setopt($c, CURLOPT_URL, $link);
	curl_setopt($c, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($c, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($c, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
	$x = curl_exec($c);
	curl_close($c);
	return $x;
}

echo "Location : ";
$search_loc = trim(fgets(STDIN));

$curl = curl('https://www.instagram.com/web/search/topsearch/?context=blended&query='.urlencode($search_loc));
$json = json_decode($curl);
if(!empty($json->places)){
	echo "\nLocation found!\n\n";
    $loc = $json->places[0]->place->title;
    if(!empty($json->places[0]->place->subtitle)){
        $addr = $json->places[0]->place->subtitle;
    } else {
        $addr = "Not specified";
    }
    $loc_id = $json->places[0]->place->location->pk;
    
    echo "City : ".$loc."\nAddr : ".$addr."\nID : ".$loc_id."\n\n";
} else {
	echo "Can't find location";
}
?>
