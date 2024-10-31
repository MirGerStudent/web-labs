<?php
echo "Задание 10\n";
$arr = [];
for ($i = 0; $i < 10; $i++) {
    array_push($arr, mt_rand(-100, 100));
}
$count_num = 0;
for ($i = 0; $i < 10; $i++) {
    if ($arr[$i] < 0 && (strpos((string)$arr[$i], '1') !== false)) {
        $count_num++;
    }
}
echo "Исходный массив: ";
// foreach ($arr as $elem) {
//     echo $elem . ' ';
// }
print_r($arr);
echo "\nКоличество отрицательных чисел: $count_num";
?>