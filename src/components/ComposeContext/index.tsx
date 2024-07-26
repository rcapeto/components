interface Props {
  contexts: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
  children: React.ReactNode
}

export function ComposeContext(props: Props) {
  const { children, contexts } = props

  return (
    <>
      {contexts.reduceRight(
        (acc, Context) => (
          <Context>{acc}</Context>
        ),
        children,
      )}
    </>
  )
}
