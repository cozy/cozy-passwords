import React from 'react'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Card from 'cozy-ui/transpiled/react/Card'
import { Text, MainTitle } from 'cozy-ui/transpiled/react/Text'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import Icon from 'cozy-ui/transpiled/react/Icon'
import noAppIcon from 'assets/no-app.svg'
import supportedPlatforms from 'supportedPlatforms'

const NotAvailablePage = () => {
  const { t } = useI18n()

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xl">
          <Stack spacing="m">
            <img src={noAppIcon} alt="" />
            <MainTitle>{t('NotAvailablePage.title')}</MainTitle>
          </Stack>
          <Card>
            <Text>{t('NotAvailablePage.description')}</Text>
            {Object.entries(supportedPlatforms).map(([platform, infos]) => (
              <ButtonLink
                key={platform}
                href={infos.storeUrl}
                icon={
                  <Icon
                    icon={`browser-${platform}`}
                    size={16}
                    color="var(--slateGrey)"
                  />
                }
                theme="secondary"
                label={infos.label}
                extension="full"
                className="u-mt-1"
              />
            ))}
          </Card>
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

export default NotAvailablePage
