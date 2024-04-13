import { Select } from '../select'
import { SelectVariant } from '../select/select-types'
import { FlagComponent } from './flag-component'
import { languageSelectOptions } from './language-select-data'

export const LanguageSelect = ({
  changeLangHandler,
  icon,
  isMobile,
  language,
}: {
  changeLangHandler: (value: string) => void
  icon: any
  isMobile: boolean
  language: any
}) => {
  // const { isMobile } = useMatchMedia()
  // const { asPath, locale, pathname, push, query } = useRouter()
  // const typedLocale = locale as LocalType
  // const { t } = useTranslation()
  // const icon = flagIcons[locale]

  //, locale = LocalType.EN
  // const { [typedLocale]: language } = t.navigation.header
  const currentSelectedLocale = FlagComponent({ icon, isMobile, language })

  // const changeLangHandler = (value: string) => {
  //   void push({ pathname, query }, asPath, { locale: value })
  // }

  return (
    <div>
      <Select
        onChange={changeLangHandler}
        options={languageSelectOptions}
        placeholder={currentSelectedLocale}
        value={currentSelectedLocale}
        variant={isMobile ? SelectVariant.LanguageMobile : SelectVariant.Language}
      />
    </div>
  )
}
