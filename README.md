1) сделала заготовку сайта:

- папка common - для общего использования(superButton, superInput, уже с пропсами)
- папка components для всех вариаций элементов в выпадающем списке
- папка cover - начальная страница с поиском
- папка headerComponents - для страниц в шапке сайта(login, registration, history, favorite)
- папка main - c Routes , а внутри папка header - с NavLinks
- испробовала запрос на items
- подключила RTK и redux


2) ветка feature_1

- подключение createContext, правда не реализовала еще.
- создание папки logic, а в ней itemsContext с createContext;
- в папке logic все utilities (общие функции)
- редирект по нажатию кнопки search на главном экране(component - MainPageContainer)
- динамичный поиск с debounce по имени элементов (только в items, в ammos, armors)
- переход на каждый элемент(в items -> itemsCart, ammos-> ammoCart, armors-> armorCart)
- api в папке BLL




