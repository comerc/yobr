# yobr

[DEMO](https://yobr.now.sh/) (если не видно данных, то нужно выполнить [reset-запрос к API](https://yobr-server.now.sh/posts/reset/))

### SETUP

- Поставить: [nodejs](https://nodejs.org/), [yarn](https://yarnpkg.com/), [git](https://www.atlassian.com/git/tutorials/install-git).
- Клонировать и запустить проект:
```bash
$ git clone git@github.com:comerc/yobr.git
$ cd yobr
$ yarn install
$ yarn server
$ yarn start
```

### Абсолютные пути в импорте

Работают относительно папки src:
```javascript
import MyComponent from 'components/MyComponent'
```

##### Настройка WebStorm
Для папки src в контекстом меню выполнить: Mark Directory as > Resource Root.

##### Настройка Atom
- Установить плагин [js-hyperclick](https://atom.io/packages/js-hyperclick).
- Для доменных компонентов прописывать в package.json путь до src:
```json
{
  "moduleRoots": [
    "../.."
  ]
}
```

##### Настройка VSCode

Нужно добавить jsconfig.json в корень проекта: 
```javascript
{
  "compilerOptions": {
    "target": "ES6"
  },
  "exclude": [
    "node_modules"
  ]
}
```

### Форматирование кода

Выполняется автоматически при коммите в git, благодаря [Prettier](https://github.com/prettier/prettier) - все настройки в package.json:
```json
{
  "devDependencies": {
    "husky": "^0.13.3",
    "lint-staged": "^3.4.1",
    "prettier": "^1.3.1",
  },
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "prettier --print-width 100 --single-quote --trailing-comma all --no-semi --write",
      "git add"
    ]
  }
}
```

### Общие настройки VSCode

Чтобы выполнить импорт настроек редактора, нужно установить [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync), потом [Shift]+[Alt]+[D] и ввести ключ: 37f6bb06dfd1b4bc93efbfbf19d60cea

### Общие настройки WebStorm

Выполнить 'Import Settings...' из ./webstorm.jar

### Публикации

- [Быстрый старт на React Native](https://habrahabr.ru/post/327668/)
- [Загрузка данных из REST API](https://habrahabr.ru/post/327422/)
- [Способы отладки JS на клиенте](https://habrahabr.ru/post/327190/)
- [Функциональные компоненты](https://habrahabr.ru/post/326610/)
- [Flow + tcomb = типизированный JS](https://habrahabr.ru/post/326538/)
- [Организация компонентов в проекте](https://habrahabr.ru/post/326018/)
- [Блог а-ля Хабр, выбор платформы](https://habrahabr.ru/post/325088/)
- [React Native — одного JS мало](https://habrahabr.ru/post/323214/)

### Литература

- [Введение в JavaScript итераторы на ES6](https://habrahabr.ru/post/264345/)
- [Редакс в реальной жизни](https://iamakulov.com/talks/redux-in-real-life/)
