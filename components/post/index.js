import React, { Component } from 'react'
import { Card, Input, Button } from 'antd'
import Nycticorax from 'nycticorax'

const {
  connect,
  createStore,
  dispatch,
} = new Nycticorax()

createStore({ value: '' })

class R extends Component {
  // save state and save quick path
  render() {
    const { match } = this.props

    return (
      <Card
        extra={(
          <Button type="primary">保存快捷方式</Button>
        )}
        title={`路由参数: ${match.params.id}`}
        style={{ width: 'auto', margin: 20 }}
      >
        <Input
          placeholder="输入保存内容"
          style={{ marginBottom: 10 }}
        />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Card>
    )
  }
}

export default connect('value')(R)
