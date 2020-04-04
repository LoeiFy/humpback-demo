/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import Nycticorax from 'nycticorax'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button, Checkbox, Card, Tag, Tooltip } from 'antd'
import classes from './index.module.less'

const {
  createStore,
  connect,
  dispatch,
} = new Nycticorax()

createStore({ data: {} })

class X extends Component {
  static saveState(data) {
    dispatch({ data }, true)
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
  }

  state = {
    local: undefined,
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch('input', 'saveState', { global: values.global })
      }
    })
  }

  onSave = () => {
    this.props.dispatch('global', 'savePath', this.props.match.url)
  }

  render() {
    const { data, form, match } = this.props
    const { local } = this.state
    const { getFieldDecorator } = form

    return (
      <Form onSubmit={this.onSubmit} className={classes.form}>
        <Card
          size="small"
          title="Router"
          extra={(
            <Tooltip placement="bottom" title="save current path">
              <Button onClick={this.onSave}>save</Button>
            </Tooltip>
          )}
          className={classes.card}
        >
          <div className={classes.info}>
            <span>router: </span>
            <Tag>{match.path}</Tag>
          </div>
          <div className={classes.info}>
            <span>params: </span>
            <Tag>{match.params.id}</Tag>
          </div>
        </Card>

        <Form.Item>
          {getFieldDecorator('global', {
            rules: [{ required: true, message: 'Please input' }],
            initialValue: data.global,
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="global state"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('local', {
            rules: [{ required: true, message: 'Please input' }],
            initialValue: local,
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="local state"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className={classes.forgot} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className={classes.button}>
            Save
          </Button>
          Or <a>register now!</a>
        </Form.Item>
      </Form>
    )
  }
}

export default connect('data')(Form.create()(X))
