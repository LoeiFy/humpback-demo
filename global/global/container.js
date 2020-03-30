import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Badge } from 'antd'
import PropTypes from 'prop-types'
import classes from './index.module.less'

class M extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = () => {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
  }

  render() {
    const { collapsed } = this.state
    const { children, routes, store } = this.props

    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Sider
          trigger={null}
          collapsible
          width={220}
          collapsed={collapsed}
        >
          <div className={classes.logo}>
            {collapsed ? '' : 'Humpback'}
          </div>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['/']}
          >
            {
              routes.map(({ name, path, icon }) => (
                <Menu.Item>
                  <Link to={path}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <Icon type={icon} />
                      <span>{name}</span>
                    </span>
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Layout.Sider>

        <Layout>
          <Layout.Header className={classes.header}>
            <Icon
              className="trigger"
              style={{ fontSize: 30 }}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.onCollapse}
            />

            <Badge count={store.count}>
              <Icon type="bell" />
            </Badge>
          </Layout.Header>
          <Layout.Content>
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default class extends Component {
  static propTypes = {
    Routes: PropTypes.element.isRequired,
    componentCreator: PropTypes.func.isRequired,
    CONFIG: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    // return false
    return true
  }

  render() {
    const {
      Routes,
      componentCreator,
      CONFIG,
      store,
    } = this.props

    const routesComponent = CONFIG.routes.map(({ path, components }) => {
      const routeComponent = () => components.map((name) => {
        const C = componentCreator(name)
        return (
          <div className={classes.component}>
            <C />
          </div>
        )
      })

      return (
        <Route
          key={path}
          exact
          path={path}
          component={routeComponent}
        />
      )
    })

    return (
      <M routes={CONFIG.routes} store={store}>
        <Routes config={routesComponent} />
      </M>
    )
  }
}
