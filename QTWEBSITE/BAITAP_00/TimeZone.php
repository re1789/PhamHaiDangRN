<?php
$timezone = DateTimeZone::listIdentifiers() ;
foreach ($timezone as $item){
    		echo $item . '<br/>' . '<br/>';
}

?>