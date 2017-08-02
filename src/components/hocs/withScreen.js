/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { setDisplayName } from 'recompose'

export const withScreen = (options = {
  hasNoWideScreen: true,
}) => (WrappedComponent) => setDisplayName('ScreenProvider')(
    class extends Component {
      state = {
        windowWidth: window.innerWidth,
      }

      componentDidMount() {
        window.addEventListener('resize', this.handleResize)
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }

      handleResize = () => {
        this.setState({ windowWidth: window.innerWidth })
      }

      render() {
        const { windowWidth } = this.state
        const {
          mobile = 768,
          tablet = 979,
          desktop = 1179,
          hasNoWideScreen,
        } = options
        const screen = (
          windowWidth <= mobile
            ? (
            'mobile'
          ) : (
            windowWidth > mobile && windowWidth <= tablet
              ? (
              'tablet'
            ) : (
              windowWidth > tablet && windowWidth <= desktop
                ? (
                'desktop'
              ) : (
                hasNoWideScreen ? 'desktop' : 'widescreen'
              )
            )
          )
        )
        const isMobile = screen === 'mobile'
        const isTablet = screen === 'tablet'
        const isDesktop = screen === 'desktop'
        const isWideScreen = screen === 'widescreen'
        return (
          <WrappedComponent
            {...this.props}
            screen={screen}
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            isWideScreen={isWideScreen}
          />
        )
      }
    },
  )
