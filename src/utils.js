import React from 'react'
import isFunction from 'lodash/isFunction'

export const pureComponent = (fn) => {
  class Wrapper extends React.PureComponent {
    render() {
      return fn(this.props, this.context)
    }
  }
  // не надо, т.к. подписывает на контекст как и функциональный компонент,
  // так и оболочку-PureComponent; лучше назначать сразу оболочке (снаружи)
  // Wrapper.contextTypes = fn.contextTypes
  Wrapper.displayName = fn.name
  return Wrapper
}

// функции handle* возвращают новые функции - следует применять в PureComponent
// для обработчиков вложенных компонентов, но не для обработчиков PureComponent

export const handleCheck = (key, input) => (event, isInputChecked) => {
  input({ key, value: !isInputChecked })
}

export const handleChange = (key, input, isValidate) => (event, newValue) => {
  input({ key, value: newValue, isValidate })
}

export const handleSelectFieldChange = (key, input, options, isValidate) => (event, index) => {
  input({ key, value: options[index], isValidate })
}

export const handleSubmit = (isLoading, save) => (event) => {
  event.preventDefault()
  if (!isLoading) {
    save()
  }
}

export const ga = (eventCategory, eventAction, eventLabel) => () => {
  if (isFunction(window.ga)) {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
}

export const plural = (value, form1, form2, form3) => {
  return value
}

export const urlencode = (s) => {
  return s
}

export const formatDateTime = (dateTime) => {
  return dateTime + ''
}

export const sleep = (ms, reason = null) => new Promise((resolve, reject) =>
  setTimeout(() => {
    if (reason) {
      reject(reason)
      return
    }
    resolve()
  }, ms)
)
