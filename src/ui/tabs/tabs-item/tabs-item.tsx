import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs-item.module.scss'

type TabsItemProps = {
  asChild?: boolean
  className?: string
  disabled?: boolean
  value: string
}
export const TabsItem = ({ children, className, ...props }: PropsWithChildren<TabsItemProps>) => {
  return (
    <Tabs.Trigger className={clsx(s.item, className)} {...props}>
      {children}
    </Tabs.Trigger>
  )
}
