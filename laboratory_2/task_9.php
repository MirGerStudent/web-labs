<?php
echo "Задание 9\n";
$arr = [];
for ($i = 0; $i < 8; $i++) {
    array_push($arr, mt_rand(0, 50));
}
$sum_1 = 0;
$sum_2 = 0;
for ($i = 0; $i < count($arr)/2; $i++) {
    $sum_1 += $arr[$i];
    $sum_2 += $arr[$i + 4];
}
$res = $sum_1 / $sum_2;
echo "Сгенерированные числа: ";
// foreach ($arr as $elem) {
//     echo $elem . " ";
// }
print_r($arr);
echo "\nСумма первой половины массива: $sum_1\n";
echo "Сумма второй половины массива: $sum_2\n";
echo "Частное: $res";
?>