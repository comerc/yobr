import React from 'react'
import isFunction from 'lodash/isFunction'
import memoize from 'fast-memoize'

export const pure = (fn) => {
  class Wrapper extends React.PureComponent {
    render() {
      return fn(this.props, this.context)
    }
  }
  // не надо, т.к. подписывает на контекст как и функциональный компонент,
  // так и оболочку-PureComponent; лучше назначать сразу оболочке (снаружи)
  // Wrapper.contextTypes = fn.contextTypes
  Wrapper.displayName = `pure(${fn.name})`
  return Wrapper
}

export const withState = (fn, defaultState = {}) => {
  class Wrapper extends React.Component {
    render() {
      return fn({
        ...this.props,
        state: this.state || defaultState,
        setState: this.setState.bind(this)
      }, this.context)
    }
  }
  Wrapper.displayName = `withState(${fn.name})`
  return Wrapper
}

export const withLog = BaseComponent => (props, context) => {
  console.log(`Rendering ${BaseComponent.name}`)
  return <BaseComponent {...props} context={context} />
}

export const onCheck = memoize((key, input) => (event, isInputChecked) => {
  input({ key, value: isInputChecked })
})

export const onChange = memoize((key, input, isValidate) => (event, newValue) => {
  input({ key, value: newValue, isValidate })
})

export const onSelectFieldChange = memoize((key, input, options, isValidate) => (event, index) => {
  input({ key, value: options[index], isValidate })
})

export const onSubmit = memoize((isSubmitting, save) => (event) => {
  event.preventDefault()
  if (!isSubmitting) {
    save()
  }
})

export const ga = memoize((eventCategory, eventAction, eventLabel) => () => {
  if (isFunction(window.ga)) {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
})

export const plural = (value, form1, form2, form3) => {
  // formatjs.io
  return value
}

export const formatDateTime = (dateTime) => {
  // formatjs.io
  // Intl.DateTimeFormat
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

export const msgBoxYesNo = (s) => new Promise((yes, no) =>
  confirm(s) ? yes() : no()
)

export const inputHintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }