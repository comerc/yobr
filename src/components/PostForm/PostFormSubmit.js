import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { pureComponent } from 'utils'

const PostFormSubmit = ({ isSubmitting }) => (
  <RaisedButton
    label="Отправить"
    primary={true}
    disabled={isSubmitting}
    containerElement="label"
  >
    <button className="ghostButton" />
    <style jsx>{`
      .ghostButton {
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        opacity: 0;
      }
    `}</style>
  </RaisedButton>
)

PostFormSubmit.propTypes = {
  isSubmitting: PropTypes.bool,
}

export default pureComponent(PostFormSubmit)
