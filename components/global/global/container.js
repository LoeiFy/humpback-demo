import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Badge, Tabs, Collapse, Button, message } from 'antd'
import PropTypes from 'prop-types'
import classes from './index.module.less'

class M extends Component {
  state = {
    collapsed: false,
    loading: false,
  }

  onCollapse = () => {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
  }

  onClick = async () => {
    const names = ['Lorem', 'YIpsum', 'Acciuy', 'Sahyame']
    this.setState({ loading: true })
    try {
      await this.props.dispatch('card', 'setName', names[Date.now() % 4])
    } catch (e) {
      message.error(e)
    }
    this.setState({ loading: false })
  }

  render() {
    const { collapsed, loading } = this.state
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
              routes.map(({ name, path, icon }) => {
                let to = path
                if (name === 'form') {
                  to = '/form/5'
                }
                if (Array.isArray(path)) {
                  [to] = path
                }

                return (
                  <Menu.Item>
                    <Link to={to}>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon type={icon} />
                        <span>{name}</span>
                      </span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Layout.Sider>

        <Layout>
          <Layout.Header className={classes.header}>
            <div>
              <Icon
                className="trigger"
                style={{ fontSize: 30 }}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.onCollapse}
              />
              <Button
                loading={loading}
                style={{ marginLeft: 10 }}
                icon="edit"
                onClick={this.onClick}
              >
                name
              </Button>
            </div>

            <div>
              { store.paths.length ? 'Shortcut:' : '' }
              {
                store.paths.map((path) => (
                  <Link key={path} to={path}>
                    <Button type="link">{path}</Button>
                  </Link>
                ))
              }
            </div>

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
    config: PropTypes.object.isRequired,
  }

  componentDidMount() {
    document.documentElement.classList.remove('loading')
  }

  render() {
    const {
      Routes,
      dispatch,
      componentCreator,
      config,
      store,
    } = this.props

    const routesComponent = config.routes.map(({ path, components }) => {
      const routeComponent = () => {
        const { type, left, right } = components

        if (type === 'index') {
          return (
            <div className={classes.index}>
              <div className={classes.left}>
                {
                  left.map((name) => {
                    const C = componentCreator(name)
                    return (
                      <div className={classes.component}>
                        <C />
                      </div>
                    )
                  })
                }
              </div>
              <div className={classes.right}>
                <Collapse bordered={false} defaultActiveKey={[0]}>
                  {
                    right.map((name, i) => {
                      const C = componentCreator(name)
                      return (
                        <Collapse.Panel header={name} key={i}>
                          <C />
                        </Collapse.Panel>
                      )
                    })
                  }
                </Collapse>
              </div>
            </div>
          )
        }

        if (type === 'user') {
          const L = componentCreator(left)
          return (
            <div className={classes.user}>
              <div className={classes.left}>
                <L />
              </div>
              <div className={classes.right}>
                <Tabs>
                  {
                    right.map((name, i) => {
                      const C = componentCreator(name)
                      return (
                        <Tabs.TabPane tab={name} key={i}>
                          <C />
                        </Tabs.TabPane>
                      )
                    })
                  }
                </Tabs>
              </div>
            </div>
          )
        }

        return (
          <div className={classes.index}>
            {
              components.map((name) => {
                const C = componentCreator(name)
                return (
                  <div style={{ width: '100%' }} className={classes.component}>
                    <C />
                  </div>
                )
              })
            }
          </div>
        )
      }

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
      <M routes={config.routes} store={store} dispatch={dispatch}>
        <Routes>{routesComponent}</Routes>
      </M>
    )
  }
}
