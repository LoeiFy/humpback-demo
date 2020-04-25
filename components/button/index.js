/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button, Tooltip } from 'antd'

export default class extends Component {
  onClick = () => {
    const { count } = this.props.store
    this.props.dispatch('global', 'setCount', count + 1)
  }

  render() {
    return (
      <Tooltip placement="right" title="添加消息数量">
        <Button type="primary" onClick={this.onClick} icon="plus-circle">添加</Button>
      </Tooltip>
    )
  }
}
