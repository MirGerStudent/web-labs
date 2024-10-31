<?php
echo "Задача 3\n";
$str = '023m0df0dfg0';
$zero_in_str = [];
$i = 0;
for ($i = 0; $i < strlen($str); $i++) {
    if ($str[$i] == '0') {
        array_push($zero_in_str, $i);
    }
}
echo "Позиции нулей: ";
// foreach ($zero_in_str as $element) {
//     echo $element . " ";
// }
print_r($zero_in_str);
?>