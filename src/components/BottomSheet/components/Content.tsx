import { ReactNode } from 'react'
import '../styles.scss'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return <main className="scroll-view">{children}</main>
}
