import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import Page, { Header, Footer, NotFoundPage } from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

class PostFormEditPage extends React.Component {
  componentDidMount() {
    const { read, id } = this.props
    read(id)
  }
  render() {
    const { isLoading, isPost } = this.props
    if (!isLoading && !isPost) {
      return <NotFoundPage />
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

PostFormEditPage.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.number,
  isPost: PropTypes.bool,
  read: PropTypes.func,
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
