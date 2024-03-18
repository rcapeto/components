import { PropsWithChildren, ReactElement } from 'react'

export type Component = ReactElement | null

type ChildrenElement = {
  children: ReactElement
}

export type ShowProps = PropsWithChildren<unknown>

export type WhenProps = ChildrenElement & {
  isTrue?: boolean
}

export type ElseParams = ChildrenElement
