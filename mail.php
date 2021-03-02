<?php

/* https://api.telegram.org/bot1015844949:AAGg4dq9x6ewi0T4ArLSTh3O63Zxs8YEV7A/getUpdates,
где, 1015844949:AAGg4dq9x6ewi0T4ArLSTh3O63Zxs8YEV7A - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$phone2 = $_POST['user_phone2'];
$token = "1015844949:AAGg4dq9x6ewi0T4ArLSTh3O63Zxs8YEV7A";
$chat_id = "529661165";
$arr = array(
  'Имя клиента: ' => $name,
  'Телефон: ' => $phone,
  'Телефон2: ' => $phone2,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>
