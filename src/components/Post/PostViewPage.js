import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postView'
import Page, { Header, Footer, NotFoundPage } from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'

class PostViewPage extends React.Component {
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
    const { isLoading, post } = this.props
    if (!isLoading && !post.id) {
      return <NotFoundPage />
    }
    return (
      <Page>
        <Helmet
          title="Yobr"
        />
        <Header>Header</Header>
        {isLoading
          ?
            <div>Загрузка...</div>
          :
            <Post {...post} />
        }
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

PostViewPage.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.number,
  post: PropTypes.object,
  read: PropTypes.func,
}

const isEdit = (state) =>
  state.postView.author && state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
  id: parseInt(props.match.params.id, 10),
  post: { ...state.postView, isEdit: isEdit(state) },
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostViewPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostViewPage)