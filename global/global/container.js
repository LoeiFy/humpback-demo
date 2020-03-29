import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import classes from './index.module.less'
import homeSvg from './home.svg'
import nextSvg from './integral.svg'
import flodSvg from './flod.svg'
import unflodSvg from './unflod.svg'

class M extends Component {
  state = {
    flod: false,
  }

  onFlod = () => {
    const { flod } = this.state
    this.setState({ flod: !flod })
  }

  render() {
    const { flod } = this.state
    const { children, routes } = this.props

    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Sider
          trigger={null}
          collapsible
          width={220}
          collapsed={flod}
        >
          <div className={classes.logo}>Humpback</div>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['/']}
          >
            {
              routes.map(({ name, path }) => (
                <Menu.Item>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: path === '/' ? homeSvg : nextSvg
                    }}
                  />
                  <Link key={path} to={path}>{name}</Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Layout.Sider>

        <Layout>
          <Layout.Header className={classes.header}>
            <div
              onClick={this.onFlod}
              dangerouslySetInnerHTML={{
                __html: flod ? flodSvg : unflodSvg,
              }}
            />
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
    return false
  }

  render() {
    const {
      Routes,
      componentCreator,
      CONFIG,
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
      <M routes={CONFIG.routes}>
        <Routes config={routesComponent} />
      </M>
    )
  }
}
