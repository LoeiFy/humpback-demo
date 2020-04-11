/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button, Tooltip } from 'antd'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { count } = this.props.store
    this.props.dispatch('global', 'setCount', count + 1)
  }

  render() {
    return (
      <Tooltip placement="bottom" title="click to add count">
        <Button type="primary" onClick={this.onClick} icon="plus-circle">count</Button>
      </Tooltip>
    )
  }
}
