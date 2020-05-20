/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import Nycticorax from 'nycticorax'
import BraftEditor from 'braft-editor'
import { Modal } from 'antd'
import 'braft-editor/dist/index.css'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({
  visible: false,
  target: undefined,
  defaultValue: undefined,
})

class X extends Component {
  static async setTarget({ target, defaultValue }) {
    dispatch({ target, visible: true, defaultValue }, true)
  }

  static getDerivedStateFromProps() {
    const { defaultValue } = getStore()
    if (defaultValue !== undefined) {
      dispatch({ defaultValue: undefined }, true)
      return { value: BraftEditor.createEditorState(defaultValue) }
    }
    return null
  }

  state = {
    value: BraftEditor.createEditorState(null),
  }

  onChange = (value) => {
    this.setState({ value })
  }

  onOk = () => {
    const { target } = this.props
    const { value } = this.state
    this.props.dispatch(target, 'editorValue', value.toHTML())
    this.onCancel()
  }

  onCancel = () => {
    this.setState({ value: BraftEditor.createEditorState(null) })
    dispatch({
      visible: false,
      target: undefined,
      defaultValue: undefined,
    }, true)
  }

  render() {
    const { visible } = this.props
    const { value } = this.state

    return (
      <Modal
        visible={visible}
        width={900}
        onCancel={this.onCancel}
        onOk={this.onOk}
      >
        <div style={{ marginTop: 20, border: '1px solid #eee', borderRadius: 5 }}>
          <BraftEditor
            value={value}
            onChange={this.onChange}
          />
        </div>
      </Modal>
    )
  }
}

export default connect('visible', 'target')(X)
