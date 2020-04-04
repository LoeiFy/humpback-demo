/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Card } from 'antd'

export default function () {
  return (
    <Card
      hoverable
      style={{ width: 240, height: 393 }}
      cover={<img alt="example" src="https://source.unsplash.com/480x600/?css" />}
    >
      <Card.Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  )
}
