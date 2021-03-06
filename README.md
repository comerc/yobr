# YOBR

[DEMO](https://yobr.now.sh/) (если не видно данных, то нужно выполнить [reset-запрос к API](https://yobr-server.now.sh/posts/reset/))

## Статус 

В мастере Альфа-версия, релиз [тут](https://github.com/comerc/yobr/releases/tag/0.2.0).

## TL;DR

Тут можно оценить, как я применяю следующие инструменты: react, typescript, prettier, styled-jsx, ant-design, react-router, redux, redux-thunk, redux-saga, ducks-pattern + redux-act, reselect, feathers, axios, css-анимацию, загрузку данных через API, доменную организацию компонентов, функциональные компоненты, промисы, генераторы, мемоизацию, спреды, оператор расширения, деструкцию, стрелочные функции, шаблонные строки, декораторы, динамический импорт, настройки VSCode и WebStorm.

## Setup

- Установить: [nodejs](https://nodejs.org/), [yarn](https://yarnpkg.com/), [git](https://www.atlassian.com/git/tutorials/install-git).

- Установить typescript:
```bash
$ npm install -g typescript
```

- Клонировать репозиторий:
```bash
$ git clone git@github.com:comerc/yobr.git
```

- Опционально, для управления версиями node, удобно использовать [nvm](https://github.com/creationix/nvm):
```bash
$ cd ~/yobr
$ nvm use
```

- Запустить:
```bash
$ cd ~/yobr
$ yarn install
$ yarn build
$ yarn start:server
```

## Development

```
$ cd ~/yobr
$ yarn start
```

## Абсолютные пути в импорте

Работают относительно папки src:
```javascript
import MyComponent from 'components/MyComponent'
```

### WebStorm

Для папки src в контекстом меню выполнить: Mark Directory as > Resource Root.

### VSCode

Дополнительные настройки не требуются (установлено расширение [Path-Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)).

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
      "prettier --print-width 120 --single-quote --trailing-comma all --no-semi --write",
      "git add"
    ]
  }
}
```

## VSCode Emmet Helper

```
$ npm install vscode-emmet-helper -g
```

## Шрифт Fira Code

[Установить](https://github.com/tonsky/FiraCode) для применения лигатур.

## Общие настройки IDE

### WebStorm

Выполнить 'Import Settings...' из ./webstorm.jar

### VSCode

Чтобы выполнить импорт настроек редактора, нужно установить [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync), потом [Shift]+[Alt]+[D] и ввести ключ: 5166716632eec0d75a90942631a1360e

## Публикации

- [10 шагов настройки Create React App + TypeScript + Ant-Design](https://habrahabr.ru/post/334572/)
- [Redux Business Logic](https://habrahabr.ru/post/332146/)
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
- [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a)
- [SSR with Create React App v2](https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9)

## Визуализация изменений в git

```bash
gource \
--path ./ \
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
./output.mp4
```

## Модификация tsconfig.json из CRA-TS

```diff
{
  "compilerOptions": {
+   "allowSyntheticDefaultImports": true,
+   "baseUrl": "src",
-   "jsx": "react",
+   "jsx": "preserve",
  },
  "exclude": [
+   "config-overrides.js",
  ]
}
```

## Модификация tslint.json из CRA-TS

```diff
-   "no-any": true,
+   "no-any": false,
-   "no-console": [true, "log", "error", "debug", "info", "time", "timeEnd", "trace"],
+   "no-console": [false],
-   "semicolon": [true, "always"],
+   "semicolon": [false],
```
