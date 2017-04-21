// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import { handleSubmit } from 'utils'
import PostFormIsTutorial from './PostFormIsTutorial'
import PostFormFlow from './PostFormFlow'
import PostFormTitle from './PostFormTitle'
import PostFormContent from './PostFormContent'
import PostFormSearchHub from './PostFormSearchHub'
import PostFormHubs from './PostFormHubs'
import PostFormIsTranslation from './PostFormIsTranslation'
import PostFormSourceAuthor from './PostFormSourceAuthor'
import PostFormSourceLink from './PostFormSourceLink'
import PostFormSubmit from './PostFormSubmit'
import PostFormAddPage from './PostFormAddPage'
import PostFormEditPage from './PostFormEditPage'

// Q: можно ли объявить компонент чистым, если в props - router?
// A: да, PureComponent применяет неглубокое сравнение
//
// применение defaultValue нарушает работу Redux DevTools TimeTravel
//
// применение value без onChange={doChange} ругается (но не Material-UI):
// Warning: Failed form propType: You provided a `value` prop to a form field
// without an `onChange` handler. This will render a read-only field.
// If the field should be mutable use `defaultValue`. Otherwise, set either
// `onChange` or `readOnly`.

type Props = {
  id?: number,
  flow: {
    id?: string,
    name: string,
  },
  title: string,
  content: string,
  hubs: Array<{
    id: string,
    name: string,
  }>,
  isTranslation: boolean,
  sourceAuthor: string,
  sourceLink: string,
  isTutorial: boolean,
  errors: { [string]: string },
  isSubmitting: boolean,
  mainError: string,
  sourceFlows: Array<{
    id: string,
    name: string,
  }>,
  searchHub: string,
  sourceHubs: Array<{
    id: string,
    name: string,
  }>,
  input: Function,
  save: Function,
}

const PostForm = ({
  id, flow, title, content, hubs, isTranslation, sourceAuthor, sourceLink,
  isTutorial, searchHub, sourceFlows, sourceHubs, errors, isSubmitting, mainError,
  input, save
}: Props) => (
  <div>
    <h2>{!!id ? 'Редактирование публикации' : 'Хочу разместить публикацию'}</h2>
    <form onSubmit={handleSubmit(isSubmitting, save)} autoComplete="off">
      <PostFormIsTutorial {...{ isTutorial, input }} />
      <PostFormFlow {...{ flowId: flow.id, sourceFlows, input, error: errors.flow }} />
      <PostFormTitle {...{ title, input, error: errors.title }} />
      <PostFormContent {...{ content, input, error: errors.content }} />
      <PostFormSearchHub {...{ searchHub, sourceHubs, hubs, input, error: errors.searchHub }} />
      <PostFormHubs {...{ hubs, input, error: errors.searchHub }} />
      <PostFormIsTranslation {...{ isTranslation, input }} />
      <PostFormSourceAuthor {...{ sourceAuthor, isTranslation, input, error: errors.sourceAuthor }} />
      <PostFormSourceLink {...{ sourceLink, isTranslation, input, error: errors.sourceLink }} />
      <PostFormSubmit {...{ isSubmitting }} />
    </form>
    <br/>
    {!!mainError && <div>{mainError}</div>}
  </div>
)

// PostForm.propTypes = {
//   id: PropTypes.number,
//   flow: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }),
//   title: PropTypes.string,
//   content: PropTypes.string,
//   hubs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   isTranslation: PropTypes.bool,
//   sourceAuthor: PropTypes.string,
//   sourceLink: PropTypes.string,
//   isTutorial: PropTypes.bool,
//   errors: PropTypes.object,
//   isSubmitting: PropTypes.bool,
//   mainError: PropTypes.string,
//   sourceFlows: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   searchHub: PropTypes.string,
//   sourceHubs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   input: PropTypes.func,
//   save: PropTypes.func,
// }

const mapStateToProps = (state) => ({
  ...state.postForm,
  mainError: state.app.mainError,
  sourceFlows: state.flows,
  sourceHubs: state.hubs,
})

const mapDispatchToProps = (dispatch) => {
  const { input, save } = actions
  return bindActionCreators({ input, save }, dispatch)
}

export { PostFormAddPage, PostFormEditPage }
export { PostForm } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
