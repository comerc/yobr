// @flow
import React from 'react'
import isFunction from 'lodash/isFunction'
import memoize from 'fast-memoize'

export const pure = (fn: Function) => {
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

export const withState = (fn: Function, defaultState: Object = {}) => {
  class Wrapper extends React.Component {
    render() {
      return fn(
        {
          ...this.props,
          state: this.state || defaultState,
          setState: this.setState.bind(this),
        },
        this.context,
      )
    }
  }
  Wrapper.displayName = `withState(${fn.name})`
  return Wrapper
}

export const withLog = (BaseComponent: typeof React.Component) => (
  props: Object,
  context: Object,
) => {
  console.log(`Rendering ${BaseComponent.name}`)
  return <BaseComponent {...props} context={context} />
}

export const onCheck = (key, input) => (event, isInputChecked) => {
  input({ key, value: isInputChecked })
}

export const onChange = (key, input, isValidate) => (event, newValue) => {
  input({ key, value: newValue, isValidate })
}

export const onSelectFieldChange = (key, input, options, isValidate) => (event, index) => {
  input({ key, value: options[index], isValidate })
}

export const onSubmit = (isSubmitting, save) => event => {
  event.preventDefault()
  if (!isSubmitting) {
    save()
  }
}

export const ga = memoize((eventCategory, eventAction, eventLabel) => () => {
  if (isFunction(window.ga)) {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
})

export const plural = (value: number, form1: string, form2: string, form3: string) => {
  // formatjs.io
  return value
}

export const formatDateTime = (dateTime: number) => {
  // formatjs.io
  // Intl.DateTimeFormat
  return new Date(dateTime).toLocaleString()
}

export const sleep = (ms: number) => new Promise((resolve, reject) => setTimeout(resolve, ms))

export const msgBoxYesNo = (s: string) =>
  new Promise((resolve, reject) => (window.confirm(s) ? resolve() : reject(new Error('No'))))

export const inputHintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }
