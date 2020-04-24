import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd'

export default class extends Component {
  state = {
    list: [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ],
  }

  render() {
    const { list } = this.state

    return (
      <List
        style={{ margin: 20 }}
        bordered
        dataSource={list}
        renderItem={(item, i) => (
          <List.Item>
            <Link to={`/posts/${i + 1}`}>{item}</Link>
          </List.Item>
        )}
      />
    )
  }
}
