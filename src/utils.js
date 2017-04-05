import React, { PropTypes } from 'react'

export const pureComponent = (fn) => {
  class Wrapper extends React.PureComponent {
    render() {
      return fn(this.props, this.context)
    }
  }
  // сомнительно, т.к. подписывает на контекст как и функциональный компонент,
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
    // .then(() => console.log('true')).catch(() => console.log('false'))
  }
}

export const ga = (eventCategory, eventAction, eventLabel) => () => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
}

export const plural = (value, form1, form2, form3) => {
  // TODO реализовать plural
  return value
}

export const urlencode = (s) => {
  // TODO реализовать urlencode
  return s
}

export const formatDateTime = (dateTime) => {
  // TODO реализовать formatDateTime
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
