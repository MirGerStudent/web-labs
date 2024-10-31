<?php
echo "\n\nЗадача 7\n";
$rus_days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
$eng_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function lexicographicSort($array) {
    usort($array, function($a, $b) {
        return strcmp(mb_strtolower($a), mb_strtolower($b));
    });
    return $array;
}
echo "Исходный массив на русском: ";
// foreach ($rus_days as $day) {
//     echo $day . " ";
// }
print_r($rus_days);
echo "\nИсходный массив на английском: ";
// foreach ($eng_days as $day) {
//     echo $day . " ";
// }
print_r($eng_days);
echo "\nОтсортированный массив на русском: ";
print_r(lexicographicSort($rus_days));
echo "\nОтсортированный массив на английском: ";
print_r(lexicographicSort($eng_days));
?>