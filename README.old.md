# Часть интернет-магазина "Султан"

## Задача
Подготовить часть интернет-магазина с использованием React и TypeScript<br>

### Указания
1. Подготовить JSON набор данных, чтобы удобно было проверять работу (17+ товаров должно быть в стартовом наборе)
* URL картинки
* Название
* Тип размера (вес/объем)
* Размер
* Штрихкод
* Производитель
* Бренд
* Описание
* Цена

2. Подготовить страницу Каталога товаров (список товаров)
* Здесь и в других местах верстку обеспечиваем в том числе адаптивную
* Шапка и подвал также должны быть сверстаны (но функциональный там только блок с корзиной)
* Сортировку делаем (4 варианта - по цене и по названию, по убыванию и возрастанию)
* Переключение способа карточек (рядом с сортировкой не делаем - можно даже не верстать)
* Фильтр уход за телом/ Уход за руками - делаем<br>
--- Чтобы нормально тестировать, в карточке товара добавляем поле "тип ухода". Один товар может подходить к нескольким типам (например, одновременно уход за руками и уход за лицом)
* В фильтре слева Достаточно оставить только<br>
--- фильтр по цене<br>
--- по производителю (поиск, чекбоксы, показать все - поле поиск здесь фильтрует самих производителей)<br>
--- Уход за телом (здесь пункты продублировать те же, что и в перечне над каталогом товаров (Уход за телом, уход за руками, уход за ногами...) - нажали сверху, выбралось и слева и наоборот<br>
--- остальное из левого столбца не надо
* Кнопки постраничного перехода
* Нажав на название можно перейти на карточку товара

3. Страница карточки товара
* хлебные крошки пишем упрощенные (Главная - Каталог - Название товара)
* картинка
* блок справа (данные подставляются из JSON/ Local Stroage). Если данных не (Например, "в наличии"), то делаем просто статической версткой<br>
--- поделиться и прайс-лист не активны<br>
--- в корзину и +/- активно
* Похожие товары НЕ ДЕЛАЕМ
* Недавно просмотренные НЕ ДЕЛАЕМ

4. Корзина
* Блок в шапке обновляется при действиях пользователя
* На странице корзины кнопки активны. +/-, удалить из корзины

5. В корзине после кнопки "оформить заказ" сразу отображаем "Спасибо за заказ" и очищаем корзину

6. Предусмотреть микроадминку по управлению списком товаров
* редактировать, добавлять, удалять товары. Сохранять это в localStorage. Если список пуст (админ все удалил или с самого старта), то наполнение из json(см. п.1)
* отдельная возможность работать со списком типов ухода. При добавлении/редактировании тип ухода из выпадающего списка. Типов ухода должна быть возможность задать несколько. Какой именно способ ля этого выбрать - на выше усмотрение

7. Загрузить на githubPages

8. Каждый товар должен открываться по своему url (можно использовать штрихкод в адресации, например)

### ДОПОЛНИТЕЛЬНО
Выделение выбранного в фильтрах, изменения после нажатия на кнопку "в корзину" и прочие эффекты, если в макете не прорисовано делайте просто на свое усмотрение.
