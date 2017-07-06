// @flow
import React from 'react'
import { connect } from 'react-redux'
import { input, save } from 'ducks/postForm'
import { onSubmit } from 'utils'
import PostFormCIsTutorial from './PostFormCIsTutorial'
import PostFormCFlow from './PostFormCFlow'
import PostFormCTitle from './PostFormCTitle'
import PostFormCContent from './PostFormCContent'
import PostFormCSearchHub from './PostFormCSearchHub'
import PostFormCHubs from './PostFormCHubs'
import PostFormCIsTranslation from './PostFormCIsTranslation'
import PostFormCSourceAuthor from './PostFormCSourceAuthor'
import PostFormCSourceLink from './PostFormCSourceLink'
import PostFormCSubmit from './PostFormCSubmit'

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
  id,
  flow,
  title,
  content,
  hubs,
  isTranslation,
  sourceAuthor,
  sourceLink,
  isTutorial,
  searchHub,
  sourceFlows,
  sourceHubs,
  errors,
  isSubmitting,
  mainError,
  input,
  save,
}: Props) =>
  <div>
    <h2>
      {id ? 'Редактирование публикации' : 'Хочу разместить публикацию'}
    </h2>
    <form onSubmit={onSubmit(isSubmitting, save)} autoComplete="off">
      <PostFormCIsTutorial {...{ isTutorial, input }} />
      <PostFormCFlow {...{ flowId: flow.id, sourceFlows, input, error: errors.flow }} />
      <PostFormCTitle {...{ title, input, error: errors.title }} />
      <PostFormCContent {...{ content, input, error: errors.content }} />
      <PostFormCSearchHub {...{ searchHub, sourceHubs, hubs, input, error: errors.searchHub }} />
      <PostFormCHubs {...{ hubs, input, error: errors.searchHub }} />
      <PostFormCIsTranslation {...{ isTranslation, input }} />
      <PostFormCSourceAuthor
        {...{ sourceAuthor, isTranslation, input, error: errors.sourceAuthor }}
      />
      <PostFormCSourceLink {...{ sourceLink, isTranslation, input, error: errors.sourceLink }} />
      <PostFormCSubmit {...{ isSubmitting }} />
    </form>
    <br />
    {!!mainError &&
      <div>
        {mainError}
      </div>}
    <style jsx>{`
      h2 {
        font-weight: normal;
        padding-bottom: .3em;
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 1.5em;
        line-height: 1.334;
        border-bottom: 1px solid #eee;
      }
    `}</style>
  </div>

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

const mapStateToProps = state => ({
  ...state.postForm,
  mainError: state.app.mainError,
  sourceFlows: state.flows,
  sourceHubs: state.hubs,
})

const mapDispatchToProps = { input, save }

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
