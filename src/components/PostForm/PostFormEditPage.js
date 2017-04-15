// @flow
import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import Page, { Header, Footer, NotFound } from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

class PostFormEditPage extends React.Component {
  props: Props
  _isMounted: boolean
  componentDidMount() {
    this._isMounted = true
    const { read, id } = this.props
    setImmediate(() =>
      read(id)
    )
  }
  render() {
    if (!this._isMounted) {
      return null
    }
    const { isLoading, isPost } = this.props
    if (!isLoading && !isPost) {
      return <NotFound />
    }
    return (
      <Page>
        <Helmet
          title="Yobr"
        />
        <Header><h1>Редактирование публикации</h1></Header>
        {isLoading
          ?
            <div>Загрузка...</div>
          :
            <PostForm />
        }
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

// PostFormEditPage.propTypes = {
//   isLoading: PropTypes.bool,
//   id: PropTypes.number,
//   isPost: PropTypes.bool,
//   read: PropTypes.func,
// }

type Props = {
  isLoading: boolean,
  id: number,
  isPost: boolean,
  read: Function,
}

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
  id: parseInt(props.match.params.id, 10),
  isPost: !!state.postForm.id,
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostFormEditPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostFormEditPage)
