# yobr

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

### Статьи

[Организация компонентов в React проекте](https://habrahabr.ru/post/326018/)