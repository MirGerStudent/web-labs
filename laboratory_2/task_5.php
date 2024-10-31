<?php
echo "Задача 5\n";
function merge(array $arr1, array $arr2) {
    $res_arr = [];
    for ($i = 0; $i < max(count($arr1), count($arr2)); $i++) {
        if (isset($arr1[$i])) {
            array_push($res_arr, $arr1[$i]);
        }
        if (isset($arr2[$i])) {
            array_push($res_arr, $arr2[$i]);
        }
    }
    return $res_arr;
}
$arr1 = ["1", "2", "3"];
echo "Первый массив: ";
print_r($arr1);
// foreach ($arr1 as $elem) {
//     echo $elem . " ";
// }
$arr2 = ["a", "b", "c"];
echo "\nВторой массив: ";
print_r($arr2);
// foreach ($arr2 as $elem) {
//     echo $elem . " ";
// }
flush();
$result_arr = array(merge($arr1, $arr2));
echo "\nРезультирующий массив: ";
print_r($result_arr)
?>