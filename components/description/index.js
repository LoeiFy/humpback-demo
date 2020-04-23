/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Descriptions, Badge, Button } from 'antd'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    loading: false,
  }

  onClick = async () => {
    const names = ['aksdj4', 'ccc45', 'mkkl', 'tyysa8']
    this.setState({ loading: true })
    await this.props.dispatch('user', 'setName', names[Date.now() % 4])
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state

    return (
      <Descriptions
        bordered
        style={{ margin: 30 }}
        title={(
          <Button
            loading={loading}
            onClick={this.onClick}
            icon="edit"
          >
            name
          </Button>
        )}
      >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
        <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
        <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="Usage Time" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Running" />
        </Descriptions.Item>
        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    )
  }
}
