import React from 'react'

import s from './backtoprevious.module.scss'

import { BackToPreviousIcon } from '../../assets/svg/back-to-previous-icon-svg'

type PropsType = {
  href: string
  onClick: () => void
  title: string
}
export const BackToPrevious = ({ href, onClick, title }: PropsType) => {
  const isNextEnv = () => {
    try {
      require.resolve('next/link')

      return true
    } catch (e) {
      return false
    }
  }
  const FallbackLink = ({
    children,
    href,
    ...props
  }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
  const LinkComponent = isNextEnv() ? require('next/link').default : FallbackLink
  const linkHandler = (event: MouseEvent) => {
    event.preventDefault()
    onClick()
  }

  return (
    <div className={s.wrapper}>
      <LinkComponent href={href} onClick={linkHandler}>
        <BackToPreviousIcon />
        <span>{title}</span>
      </LinkComponent>
    </div>
  )
}
