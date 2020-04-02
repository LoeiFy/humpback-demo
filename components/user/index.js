/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Tag } from 'antd'
import Nycticorax from 'nycticorax'
import PropTypes from 'prop-types'
import classes from './index.module.less'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({ name: 'Megaptera' })

class X extends Component {
  static getName() {
    return getStore().name
  }

  static async setName(name) {
    await new Promise((r) => setTimeout(r, 1000))
    dispatch({ name }, true)
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    const { name } = this.props

    return (
      <div className={classes.main}>
        <div className={classes.top}>
          <img src="https://source.unsplash.com/480x480/?javascript" />
          <h3>{name}</h3>
          <p>Why is the pigeon so big</p>
        </div>

        <div className={classes.bottom}>
          <h3>Label</h3>
          <div>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#87d068">#87d068</Tag>
            <Tag color="#108ee9">#108ee9</Tag>
          </div>
        </div>
      </div>
    )
  }
}

export default connect('name')(X)
