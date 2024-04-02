import { ComponentPropsWithoutRef, FC } from 'react'

import * as LabelRDX from '@radix-ui/react-label'

import { Typography } from '../typography'

type LabelProps = {
  id?: string
  title?: string
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ children, id, title, ...rest }) => (
  <>
    <LabelRDX.Root htmlFor={id} {...rest}>
      {title && <Typography>{title}</Typography>}

      {children}
    </LabelRDX.Root>
  </>
)
