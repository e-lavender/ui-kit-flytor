import s from './language-select.module.scss'

import { Typography } from '../typography'
import { FlagComponentProps } from './language-select-types'

export const FlagComponent = ({ icon, isMobile, language }: FlagComponentProps) => {
  return (
    <div className={s.container}>
      <div className={s.languageSelect}>{icon}</div>
      {!isMobile && (
        <Typography className={s.text} variant={'regular-16'}>
          {language}
        </Typography>
      )}
    </div>
  )
}
