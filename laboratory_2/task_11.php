<?php
echo "Задание 11\n";
$arr = [];
for ($i = 0; $i < 10; $i++) {
    array_push($arr, mt_rand(-50, 50));
}
echo "Исходный массив: ";
// foreach ($arr as $elem) {
//     echo $elem . ' ';
// }
print_r($arr);
function removeNeg(array $arr) {
    return array_filter($arr, function($value) {
        return (($value > 0) AND ($value % 2 == 0));
    });
}
echo "\nОбработанный массив: ";
$arr = removeNeg($arr);
// foreach ($arr as $elem) {
//     echo $elem . ' ';
// }
print_r($arr);
?>