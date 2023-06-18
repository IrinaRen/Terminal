// Зайти с локали на сервак:
$ ssh nameserv@23.88.52.139 //вводим пароль/Enter

// Создать пользователя под которым нужно работать:
$ sudo adduser test_31

// Проверить права достпа пользователя:
$ ssh test_31@23.88.52.139

// С локального компьютера выгрузить на внешний сервак файлы:
$ scp main_1.py test_31@23.88.52.139:/home/test_31/main1.py  //вводим пароль/Enter

// С внешнего сервака выгрузить файлы на локальный компьютер:
$ scp test_31@23.88.52.139:/home/test_31/names_server_1.txt names_server_1.txt  

// Запустить скрипт Python:
$ python3 main_1.py

// Сделать так, чтобы после падения сессии Ваш скрипт работал(Создать 'ячейку внутри сервака'):
$ sсreen -r -d 1180269

// Посмотреть, какие процессы запущены в screen:
$ sсreen -ls

// Запустить сервер:
$ flask run --host="0.0.0.0" --port="5007"

// Посмотреть последние 10 логов на сервере в реальном времени:
$ fail -f logs.txt

// Скопировать через grep на локальный компьютер логи с сервера:
$ grep 'Safary/605.1.15' log.txt > /home/test_31/s_logs.txt
 
//  1. Сделать папку dir_1:
$ mkdir dir_1 

//  2. Зайти в папку dir_1: 
$ cd dir_1 

//  3. Создать папку inner_dir_1:
$ mkdir inner_dir_1 

//  4. Посмотреть где ты находишься:
$ pvd 

//  5. Находясь в папке dir_1 создать пустой текстовый файл tf_1.txt:
$ > tf_1.txt 

//  6. Находясь в папке dir_1 через команду cat создать текстовый файл tf_2.txt со следующими строками: 
// - the first 1
// - the second 2
// - the third 3
// Решение==> вводим в терминал:
 $ cat > tf_2.txt
// далее пишем:
- the first 1(Enter)
- the second 2(Enter)
- the third 3(Enter)
// Сохраняем и выходим: 
Ctrl+c ;

//  7. Зайти в папку inner_dir_1:
$ cd inner_dir_1/
 
//  8. Через cat сделать текстовый файл tf_3.txt c любыми строками:
// вводим в терминал:
$ cat > tf_3.txt
// далее пишем:
qwerty
qwer
qwe
qw
q
asdf
1
2
3
4
567(Enter)
// Сохраняем и выходим:
Ctrl+c ;

//  9. Через cat добавить в текстовый файл tf_3.txt строку “the second 2”:
$ cat >> tf_3.txt
the second 2 // жмeм Enter,
// Сохраняем и выходим:
Ctrl+c ;

//  10. Через cat добавить в текстовый файл tf_3.txt строку “the sec 2”:
$ cat >> tf_3.txt
the sec 2(Enter)
// Сохраняем и выходим: 
Ctrl+c ;

//  11. Через cat добавить в текстовый файл tf_2.txt строку “the seConD 2”:
$ cat >> ../tf_2.txt
the sec 3 // жмем Enter,
// Сохраняем и выходим:
Ctrl+c ;

//  12. Через cat добавить в текстовый файл tf_3.txt строку “the SeCoNd 2”:
$ cat >> tf_3.txt
the SeCoNd 2 // жмем Enter,
// Сохраняем и выходим:
Ctrl+c ;

 13. Через cat добавить в текстовый файл tf_2.txt строку “the seConD 2”:
$ cat >> ../tf_2.txt
the seConD 2 // жмем Enter,
// Сохраняем и выходим: 
Ctrl+c ;

//  14. Сделать текстовый файл tf_4.txt в котором будет 15 строк.: 
$ cat > tf_4.txt
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
// Сохраняем и выходим: 
Ctrl+c;

//  15. Сделать текстовый файл tF_5.txt в котором будет 13 строк.: 
$ cat > tF_5.txt
1
2
3
4
5
6
7
8
9
10
11
12
13
// Сохраняем и выходим:
Ctrl+c ;

// 16. Вывести список всех файлов в папке.:
$  ls -la 

// 17. Выйти из папки inner_dir_1: 
$ cd ../ 

// 18. Вывести содержимое файла tf_3.txt в терминал:
$ cat inner_dir_1/tf_3.txt (команда cat и путь к файлу)

// 19. Найти путь к файлу tf_4.txt:
$ find -name tf_4.txt
// ответ терминала:
 ./inner_dir_1/tf_4.txt 

//  20. Очистить файл tf_4.txt от содержимого без удаления самого файла: 
$ echo -n > inner_dir_1/tf_4.txt (echo -n > путь/к_файлу)

//  21. Найти путь к файлам у которых есть  “tf” в названии.:
$ find -name "tf*"
ответ терминала:
./inner_dir_1/tf_3.txt
./inner_dir_1/tf_4.txt
./tf_1.txt
./tf_2.txt 

//  22. Найти путь к файлам у которых есть  “tf” в названии и буквы в любом регистре.: 
$ find -iname "tf*"
./inner_dir_1/tf_3.txt
./inner_dir_1/tf_4.txt
./inner_dir_1/tF_5.txt
./tf_1.txt
./tf_2.txt 

//  23. Найти строки в файлах где есть комбинация букв “sec” в текущей папке: 
$ grep sec *
ответ терминала: 
grep: inner_dir_1: Is a directory
tf_2.txt:- the second 2
tf_2.txt:the sec 3 

//  24. Найти строки в файлах где есть комбинация букв “sec” в любом регистре в текущей папке:
$ grep -i sec *
// ответ терминала: 
grep: inner_dir_1: Is a directory
tf_2.txt:- the second 2
tf_2.txt:the sec 3
tf_2.txt:the seConD 2 

//  25. Найти строки в файлах где есть только комбинация букв “sec” в текущей папке:
$ grep -w sec *
// ответ терминала:
grep: inner_dir_1: Is a directory
tf_2.txt:the sec 3 

//  26. Найти строки в файлах где есть только комбинация букв “sec” в любом регистре в текущей папке:
$ grep -w -i sec *
// ответ терминала:
grep: inner_dir_1: Is a directory
tf_2.txt:the sec 3 

//  27. Найти строки в файлах где есть комбинация букв “second” в текущей папке:
$ grep second *
// ответ терминала:
grep: inner_dir_1: Is a directory
tf_2.txt:- the second 2 

//  28. Найти строки в файлах где есть комбинация букв “second” в любом регистре в текущей папке:
$ grep -i second *
// ответ терминала:
grep: inner_dir_1: Is a directory
tf_2.txt:- the second 2
tf_2.txt:the seConD 2 

//  29. Найти строки в файлах где есть комбинация букв “second” во всех папках ниже уровнем:
$ grep -r second *
inner_dir_1/tf_3.txt:the second 2
tf_2.txt:- the second 2

//  30. Найти только путь и название файла в строках которых есть комбинация букв “second” в текущей папке:
$ grep -l second *
// ответ терминала:
grep: inner_dir_1: Is a directory
tf_2.txt

//  31. Найти все строки во всех файлах где нет комбинации “second”:
$ grep -r -v second *
// ответ терминала:
inner_dir_1/tf_3.txt:qwerty
inner_dir_1/tf_3.txt:qwer
inner_dir_1/tf_3.txt:qwe
inner_dir_1/tf_3.txt:qw
inner_dir_1/tf_3.txt:q
inner_dir_1/tf_3.txt:asdf
inner_dir_1/tf_3.txt:1
inner_dir_1/tf_3.txt:2
inner_dir_1/tf_3.txt:3
inner_dir_1/tf_3.txt:4
inner_dir_1/tf_3.txt:567
inner_dir_1/tf_3.txt:the sec 2
inner_dir_1/tf_3.txt:the SeCoNd 2
inner_dir_1/tF_5.txt:1
inner_dir_1/tF_5.txt:2
inner_dir_1/tF_5.txt:3
inner_dir_1/tF_5.txt:4
inner_dir_1/tF_5.txt:5
inner_dir_1/tF_5.txt:6
inner_dir_1/tF_5.txt:7
inner_dir_1/tF_5.txt:8
inner_dir_1/tF_5.txt:9
inner_dir_1/tF_5.txt:10
inner_dir_1/tF_5.txt:11
inner_dir_1/tF_5.txt:12
inner_dir_1/tF_5.txt:13
tf_2.txt:- the first 1
tf_2.txt:- the third 3
tf_2.txt:the sec 3
tf_2.txt:the seConD 2

//  32. Найти только название и путь к файлам где нет комбинации “second”:
$ grep -lrv second *
// ответ терминала: 
inner_dir_1/tf_3.txt
inner_dir_1/tF_5.txt
tf_2.txt

//  33. Вывести в терминал 4 последних строк любого текстового файла:
$ tail -n4 inner_dir_1/tf_3.txt
// ответ терминала:
567
the second 2
the sec 2
the SeCoNd 2 

//  34. Вывести в терминал 4 первые строки любого текстового файла.:
$  head -4 inner_dir_1/tF_5.txt
// ответ терминала:
1
2
3
4

//  35. Команда в одну строку. Создать папку и создать текстовый файл с содержиммым.:
$ mkdir a_1 | echo some text > f.txt

//  36. Команда в одну строку. Переместить в любую одну папку текстовые файлы у которых в содержимом есть слово “sec”: 
$ mv -v $(grep -wl sec $(find . -iname "*.txt)") a_1/
// либо:
$ find . -iname "*.txt"| xargs grep -wl "sec"| xargs mv -t a_1

// 37. Команда в одну строку. Скопировать в любую одну папку текстовые файлы у которых в содержимом есть слово “sec”:
$ find . -iname "*.txt"| xargs grep -wl "sec"| xargs cp -t .

// 38. Команда в одну строку. Найти все строки c “sec” во всех текстовых файлах,
// скопировать и вставить эти строки в один новый созданный текстовый файл:
$ grep -h sec $(find . -iname "*.txt") > a.txt
      
//  39. Команда в одну строку. Удалить текстовые файлы у которых в содержимом есть слово “sec”:
$ find -iname "*.txt" | xargs grep -wl sec | xargs rm

//  40. Просто вывести в терминал строку “Good job!!”:
 $ echo “Good job!!”

