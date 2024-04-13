import { ReactElement } from 'react'

export type FlagComponentProps = {
  icon: any
  isMobile: boolean
  language: any
  //locale?: LocalType
}

export type FlagSelectOption = { label: ReactElement | string; value: string }
