import { FunctionComponent, ReactNode } from 'react'

type PropsWithChildren<Props = object> = Props & {
  children: ReactNode
}

type Component = FunctionComponent<PropsWithChildren<any>>
type ComponentWithProps = [Component, Record<string, any>]

export function buildProvidersTree(components: ComponentWithProps[]) {
  function initialComponent(props: PropsWithChildren) {
    return <>{props.children}</>
  }

  return components.reduce((AccumulatedComponents, [Provider, props = {}]) => {
    // eslint-disable-next-line react/display-name
    return ({ children }: PropsWithChildren) => {
      return (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      )
    }
  }, initialComponent)
}
