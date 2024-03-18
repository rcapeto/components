import { ReactElement, Children } from 'react'
import { Component, ElseParams, ShowProps, WhenProps } from './types'

function Show(props: ShowProps) {
  let when: Component = null
  let otherwise: Component = null

  Children.forEach(props.children, (children) => {
    const component = children as ReactElement<WhenProps>

    if (component.props.isTrue === undefined) {
      otherwise = component
    } else if (!when && component.props.isTrue) {
      when = component
    }
  })

  return when || otherwise
}

export default {
  Root: Show,
  When: ({ isTrue, children }: WhenProps) => (isTrue ? children : null),
  Else: ({ children }: ElseParams) => children,
}
