<?php
echo "Задача 6\n";
$arr_with_num = [];
for ($i = 0; $i < 10; $i++) {
    array_push($arr_with_num, mt_rand());
}
function buble_sort(array $arr) {
    $size = sizeof($arr)-1;
    for ($i = $size; $i>=0; $i--) {
        for ($j = 0; $j<=($i-1); $j++)
            if ($arr[$j]>$arr[$j+1]) {
                $k = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $k;
        }
    }
    return $arr;
}
echo "Исходный массив: ";
// foreach ($arr_with_num as $elem) {
//     echo $elem . " ";
// }
print_r($arr_with_num);
echo "\nСортированный массив: ";
// foreach ($sort_arr as $elem) {
//     echo $elem . " ";
// }
arsort($arr_with_num);
print_r($arr_with_num);
?>