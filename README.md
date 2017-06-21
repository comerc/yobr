# YOBR

[DEMO](https://yobr.now.sh/) (если не видно данных, то нужно выполнить [reset-запрос к API](https://yobr-server.now.sh/posts/reset/))

## TL;DR

Тут можно оценить, как я применяю следующие инструменты: react, styled-jsx + postcss, material-ui, css-анимацию, axios, express, react-router, flow + tcomb, prettier, redux, reselect, recompose, thunk, saga, ducks-pattern + redux-act, загрузку данных через API, доменную организацию компонентов, функциональные компоненты, промисы, генераторы, мемоизацию, спреды, оператор расширения, деструкцию, стрелочные функции, шаблонные строки, настройки VSCode и WebStorm.

## SETUP

- Поставить: [nodejs](https://nodejs.org/), [yarn](https://yarnpkg.com/), [git](https://www.atlassian.com/git/tutorials/install-git).
- Клонировать репозиторий:
```bash
$ git clone git@github.com:comerc/yobr.git
```
- Запустить сервер (console #1):
```bash
$ cd ~/yobr/server 
$ yarn install
$ yarn start
```
- Запустить клиент (console #2):
```bash
$ cd ~/yobr
$ yarn install
$ yarn start
```

## Абсолютные пути в импорте

Работают относительно папки src:
```javascript
import MyComponent from 'components/MyComponent'
```

### VSCode

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

### WebStorm
Для папки src в контекстом меню выполнить: Mark Directory as > Resource Root.

### Atom
- Установить плагин [js-hyperclick](https://atom.io/packages/js-hyperclick).
- Для доменных компонентов прописывать в package.json путь до src:
```json
{
  "moduleRoots": [
    "../.."
  ]
}
```

## Форматирование кода

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

## Общие настройки IDE

### VSCode

Чтобы выполнить импорт настроек редактора, нужно установить [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync), потом [Shift]+[Alt]+[D] и ввести ключ: 37f6bb06dfd1b4bc93efbfbf19d60cea

### WebStorm

Выполнить 'Import Settings...' из ./webstorm.jar

## Публикации

- [Интеграция React и DataTables (jQuery)](https://habrahabr.ru/post/330656/)
- [Быстрый старт на React Native](https://habrahabr.ru/post/327668/)
- [Загрузка данных из REST API](https://habrahabr.ru/post/327422/)
- [Способы отладки JS на клиенте](https://habrahabr.ru/post/327190/)
- [Функциональные компоненты](https://habrahabr.ru/post/326610/)
- [Flow + tcomb = типизированный JS](https://habrahabr.ru/post/326538/)
- [Организация компонентов в проекте](https://habrahabr.ru/post/326018/)
- [Блог а-ля Хабр, выбор платформы](https://habrahabr.ru/post/325088/)
- [React Native — одного JS мало](https://habrahabr.ru/post/323214/)

## Литература

- [Введение в JavaScript итераторы на ES6](https://habrahabr.ru/post/264345/)
- [Редакс в реальной жизни](https://iamakulov.com/talks/redux-in-real-life/)

## Визуализация изменений в git

```bash
gource \
--path ~/yobr \
--seconds-per-day 0.15 \
--title "YOBR" \
-1280x720 \
--file-idle-time 0 \
--auto-skip-seconds 0.75 \
--multi-sampling \
--stop-at-end \
--highlight-users \
--hide filenames,mouse,progress \
--max-files 0 \
--background-colour 000000 \
--disable-bloom \
--font-size 24 \
--output-ppm-stream - \
--output-framerate 30 \
-o - \
| ffmpeg \
-y \
-r 60 \
-f image2pipe \
-vcodec ppm \
-i - \
-vcodec libx264 \
-preset ultrafast \
-pix_fmt yuv420p \
-crf 1 \
-threads 0 \
-bf 0 \
~/yobr/output.mp4
```
