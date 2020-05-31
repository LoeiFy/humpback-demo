/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Nycticorax from 'nycticorax'
import { Card, Timeline, Icon, Button } from 'antd'

const {
  createStore,
  connect,
  dispatch,
} = new Nycticorax()

createStore({ value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' })

function T({ value, dispatch: dp, mountedComponents }) {
  return (
    <Card
      title="Status"
      bordered={false}
      extra={mountedComponents.includes('editor') ? (
        <Button onClick={() => dp('editor', 'open', value)}>编辑器</Button>
      ) : null}
    >
      <Timeline mode="alternate">
        <Timeline.Item>
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item color="green">
          Solve initial network problems 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </Timeline.Item>
        <Timeline.Item color="red">
          Network problems being solved 2015-09-01
        </Timeline.Item>
        <Timeline.Item>
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
          Technical testing 2015-09-01
        </Timeline.Item>
      </Timeline>
    </Card>
  )
}

T.editorValue = (value) => dispatch({ value })

export default connect('value')(T)
