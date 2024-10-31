<?php
echo "Задание 12\n";
$str = "lol1lol0lol9lol";
$first = NAN;
$last = NAN;
for ($i = 0; $i < strlen($str); $i++) {
    if (is_numeric($str[$i])) {
        $last = $i+1;
        if (!is_int($first)) {
            $first = $i+1;
        }
    }
}
echo "Исходная строка: $str\n";
echo "Первое число: $first\n";
echo "Последние число: $last\n";
?>