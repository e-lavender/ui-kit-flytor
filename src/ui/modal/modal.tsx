import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { DismissableLayerProps } from '@radix-ui/react-dismissable-layer'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { CloseIcon } from '../../assets'
import { Typography } from '../typography'

type ModalProps = {
  children: ReactNode
  onChange?: (open: boolean) => void

  open?: boolean
}
type ModalContentProps = {
  children: ReactNode
  className?: string
  isModified?: boolean
  onClose?: () => void
  title?: string
}
export const Modal = ({ children, onChange, open }: ModalProps) => {
  return (
    <Dialog.Root onOpenChange={onChange} open={open}>
      {children}
    </Dialog.Root>
  )
}

const ModalContent = ({
  children,
  className,
  isModified = false,
  onClose,
  title,
  ...props
}: DismissableLayerProps & ModalContentProps) => {
  const styles = clsx(s.main, className)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay}>
        <Dialog.Content className={s.content} {...props}>
          {!isModified && (
            <>
              <div className={s.header}>
                <Dialog.Title>
                  <Typography className={s.title} variant={'h1'}>
                    {title}
                  </Typography>
                </Dialog.Title>

                <Dialog.Close aria-label={'Close'} className={s.close} onClick={onClose}>
                  <CloseIcon />
                </Dialog.Close>
              </div>

              <div className={s.separator}></div>
            </>
          )}

          <div className={styles}>{children}</div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}

Modal.Button = Dialog.Trigger
Modal.Close = Dialog.Close
Modal.Content = ModalContent
