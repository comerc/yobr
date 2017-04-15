// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postView'
import Page, { Header, Footer, NotFound } from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import type { Props as PostProps } from './Post.Props'

class PostViewPage extends React.Component {
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
    const { isLoading, post } = this.props
    if (!isLoading && !post.id) {
      return <NotFound />
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

// PostViewPage.propTypes = {
//   isLoading: PropTypes.bool,
//   id: PropTypes.number,
//   post: PropTypes.object,
//   read: PropTypes.func,
// }

type Props = {
  isLoading: boolean,
  id: number,
  post: PostProps,
  read: Function,
}

const isMy = (state) =>
  state.postView.author && state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
  id: parseInt(props.match.params.id, 10),
  post: { ...state.postView, isMy: isMy(state) },
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostViewPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostViewPage)
