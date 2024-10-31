<?php
echo "Задача 4\n";
$arr_with_num = [];
for ($i = 0; $i < 10; $i++) {
    array_push($arr_with_num, mt_rand());
}
print_r($arr_with_num);
$num_with_five = [];
foreach($arr_with_num as $element) {
    if (strpos((string)$element, '5') !== false) {
        array_push($num_with_five, $element);
    }
}
echo "Числа с цифрой '5': ";
// foreach($num_with_five as $element) {
//     echo $element . " ";
// }
print_r($num_with_five);
?>