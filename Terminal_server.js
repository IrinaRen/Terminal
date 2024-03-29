// 1. Зайти с локали на сервак:
$ ssh nameserv@23.88.52.139 //вводим пароль/Enter

// 2. Создать пользователя под которым нужно работать:
$ sudo adduser test_31

// 3.Проверить права достпа пользователя:
$ ssh test_31@23.88.52.139

// 4.С локального компьютера выгрузить на внешний сервак файлы:
$ scp main_1.py test_31@23.88.52.139:/home/test_31/main1.py  //вводим пароль/Enter

// 5.С внешнего сервака выгрузить файлы на локальный компьютер:
$ scp test_31@23.88.52.139:/home/test_31/names_server_1.txt names_server_1.txt  

// 6.Запустить скрипт Python:
$ python3 main_1.py

// 7.Сделать так, чтобы после падения сессии Ваш скрипт работал(Создать 'ячейку внутри сервака'):
$ sсreen -r -d 1180269

// 8.Посмотреть, какие процессы запущены в screen:
$ sсreen -ls

// 9.Запустить сервер:
$ flask run --host="0.0.0.0" --port="5007"

// 10.Посмотреть последние 10 логов на сервере в реальном времени:
$ fail -f logs.txt

// 11.Скопировать через grep логи с сервера:
$ grep 'Safary/605.1.15' log.txt > /home/test_31/s_logs.txt

// 12.С внешнего сервака выгрузить логи на локальный компьютер:
$ scp test_31@23.88.52.139:/home/test_31/s_logs.txt logs_2.txt //вводим пароль/Enter
 
