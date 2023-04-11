# Часть интернет-магазина "Султан"

## Задача
Написать 10 максимально разноплановых теста в проекте магазина - придумать самостоятельно, что тестировать<br>

### Примечание
Это отдельный с тестами. Вот [ссылка на репозиторий](https://github.com/damirios/hotels_frontend_online-store) самого проекта  

Ссылки на файлы с тестами (эти файлы лежат рядом с файлами компонент, которые тестируются, а название дополнено ".test"):

1. [App](https://github.com/damirios/hotels_frontend_online-store_tests/blob/main/src/App.test.js)
* тесты на рендер корректного компонента в зависимости от url (2 теста)
2. [Cart](https://github.com/damirios/hotels_frontend_online-store_tests/blob/main/src/store/slices/cartReducer.test.js)
* тесты редюсеров состояния корзины (4 теста)
3. [Product](https://github.com/damirios/hotels_frontend_online-store_tests/blob/main/src/store/slices/productReducer.test.js)
* тесты редюсеров состояния товара (2 теста)
4. [DetailedProductPage](https://github.com/damirios/hotels_frontend_online-store_tests/blob/main/src/components/ProductFullPage.test.js)
* тесты рендера корректного компонента (страницы товара и потом снова главной страницы) при клике на ссылки (1 тест)
5. [AdminPage](https://github.com/damirios/hotels_frontend_online-store_tests/blob/main/src/components/AdminPage/AdminPage.test.js)
* тесты рендера корректного компонента (панели админа и потом снова главной страницы) при клике на ссылки (1 тест)
