<?php
echo "Задание 8\n";
$arr = ["orange", "red", "green", "blue"];
function sort_len(array $arr) {
    $size = sizeof($arr)-1;
    for ($i = $size; $i>=0; $i--) {
        for ($j = 0; $j<=($i-1); $j++)
            if (strlen($arr[$j])>strlen($arr[$j+1])) {
                $k = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $k;
        }
    }
    return $arr;
}
echo "Исходный массив: ";
// foreach ($arr as $elem) {
//     echo $elem . " ";
// }
print_r($arr);
echo "\nОтсортированный массив: ";
print_r(sort_len($arr));
?> 