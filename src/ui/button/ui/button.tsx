import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from '../styles/button.module.scss'

import { ButtonProps } from '../model/button-types'

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    type = 'button',
    variant = 'primary',
    ...rest
  } = props
  const classNames = clsx(s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} type={type} {...rest} />
}
