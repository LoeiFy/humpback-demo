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
  render() {
    const { match, value } = this.props

    return (
      <Card
        extra={(
          <Button
            type="primary"
            onClick={() => this.props.dispatch('global', 'savePath', match.url)}
          >
            保存快捷方式
          </Button>
        )}
        title={`路由参数: ${match.params.id}`}
        style={{ width: 'auto', margin: 20 }}
      >
        <Input
          placeholder="在此输入的内容会保存，但不是保存到全局"
          style={{ marginBottom: 10 }}
          value={value}
          onChange={(e) => dispatch({ value: e.target.value }, true)}
        />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Input placeholder="默认输入框，切换路由会丢失" />
      </Card>
    )
  }
}

export default connect('value')(R)
