/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import Nycticorax from 'nycticorax'
import { Card, Button, Icon } from 'antd'
import PropTypes from 'prop-types'
import classes from './index.module.less'

const {
  createStore,
  connect,
  dispatch,
} = new Nycticorax()

createStore({ name: 'Running' })

class X extends Component {
  static async setName(name) {
    await new Promise((r) => setTimeout(r, 1000))
    dispatch({ name }, true)
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
  }

  state = {
    items: [
      { icon: 'ie', name: 'Internet Explorer' },
      { icon: 'chrome', name: 'Google Chrome' },
      { icon: 'github', name: 'Github' },
      { icon: 'html5', name: 'HTML5' },
      { icon: 'twitter', name: 'Twitter' },
      { icon: 'apple', name: 'Apple' },
    ],
  }

  onClick = () => {
    const { count } = this.props.store
    this.props.dispatch('global', 'setCount', count - 1)
  }

  render() {
    const { items } = this.state
    const { name } = this.props

    return (
      <div className={classes.main}>
        <Card
          title={name}
          extra={(
            <Button
              type="primary"
              icon="minus-circle"
              onClick={this.onClick}
            >
              count
            </Button>
          )}
        >
          {
            items.map(({ icon, name }) => (
              <Card.Grid className={classes.grid}>
                <div>
                  <Icon className={classes.icon} type={icon} />
                  <h3>{name}</h3>
                </div>
                <p>Eros nostrum sea in, mea libris percipit et, an eos vide fugit. Has vide ludus persecuti ex, eu mea virtute vivendo. </p>
              </Card.Grid>
            ))
          }
        </Card>
      </div>
    )
  }
}

export default connect('name')(X)
