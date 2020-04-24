import React, { Component } from 'react'
import { Card, Input } from 'antd'

export default class extends Component {
  render() {
    const { match } = this.props

    return (
      <Card title={`Current params: ${match.params.id}`} style={{ width: 300, margin: 20 }}>
        <Input />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Card>
    )
  }
}
