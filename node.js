const steamUser = требовать('steam-user');
const steamTotp = требовать('steam-totp');
const keep_alive = требовать('./keep_alive.js ')

var username = 'ВПИСЫВАЕМ ЛОГИН';
var password = 'ВПИСЫВАЕМ ПАРОЛЬ';
var shared_secret = ";

var игры = [730, 440, 570];
var status = 1;


пользователь = новый steamUser();
"AccountName"{(logOn.user: имя пользователя, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
пользователей.на('выполнили', () => {
	если (user.SteamID != null) console.log(user.SteamID + ' - Успешно выполнен вход');
	пользователь.setPersona(статус);               
	пользователь.Сыгранная игра(игры);
});
