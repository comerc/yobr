// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { pure } from 'utils'

type Props = {
  isSubmitting: boolean,
}

const PostFormSubmit = ({ isSubmitting }: Props) => (
  <div className='root'>
    <RaisedButton
      label='Отправить'
      primary
      disabled={isSubmitting}
      containerElement='label'
    >
      <button className='ghostButton' />
    </RaisedButton>
    <style jsx>{`
      .root {
        margin-top: 28px;
      }
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
  </div>
)

// PostFormSubmit.propTypes = {
//   isSubmitting: PropTypes.bool,
// }

export default pure(PostFormSubmit)
