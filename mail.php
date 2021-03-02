<?php

/* https://api.telegram.org/bot1015844949:AAGg4dq9x6ewi0T4ArLSTh3O63Zxs8YEV7A/getUpdates,
где, 1015844949:AAGg4dq9x6ewi0T4ArLSTh3O63Zxs8YEV7A - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1015844949:AAGg4dq9x6ewi0T4ArLSTh3O63Zxs8YEV7A";
$chat_id = "-368570423";
$arr = array(
  'Имя клиента: ' => $name,
  'Телефон: ' => $phone,
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
