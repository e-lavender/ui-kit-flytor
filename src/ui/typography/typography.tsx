import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

import { Tags } from './enum'
import { TypographyProps } from './types'

export const Typography = <T extends ElementType>({
  as = 'span',
  className,
  variant = 'regular-14',
  ...rest
}: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const styles = clsx(s[variant], className)

  const Component = as || Tags[variant]

  return <Component className={styles} {...rest} />
}
