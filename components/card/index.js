/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Card, Button } from 'antd'
import PropTypes from 'prop-types'
import classes from './index.module.less'

export default class extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={classes.main}>
        <Card title="Running">
          <Card.Grid className={classes.grid}>
            Content
          </Card.Grid>
        </Card>
      </div>
    )
  }
}
