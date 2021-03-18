import React from 'react'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { useClient } from 'cozy-client'
import { Link } from 'react-router-dom'
import Wrapper from 'components/Wrapper'

import Button from 'cozy-ui/transpiled/react/Button'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import PasswordExample from 'cozy-ui/transpiled/react/PasswordExample'
import strongPasswordIcon from 'assets/strong-password.svg'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import Card from 'cozy-ui/transpiled/react/Card'
import { UnorderedList, ListItem } from 'cozy-ui/transpiled/react/UnorderedList'
import snarkdown from 'snarkdown'
import VerticallyCentered from './VerticallyCentered'


import ChangePasswordLink from 'components/ChangePasswordLink'

const SecurityStep = ({ onSkip }) => {
  const { t } = useI18n()

  return (
    <VerticallyCentered>
      <Wrapper>
        <NarrowContent>
          <Stack>
            <img src={strongPasswordIcon} alt="" width="204" />
            <MainTitle>{t('SecurityStep.title')}</MainTitle>
            <Stack spacing="xxl">
              <Text>{t('SecurityStep.description')}</Text>
              <Card>
                <UnorderedList className="u-ta-left u-mv-0">
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('SecurityStep.advices.strong_passphrase')
                      )
                    }}
                  />
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(t('SecurityStep.advices.memorize'))
                    }}
                  />
                  <ListItem>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: snarkdown(t('SecurityStep.advices.our_tip'))
                      }}
                    />
                    <PasswordExample password="Cl4ude€st1Nu@ge" />
                  </ListItem>
                </UnorderedList>
              </Card>
              <Stack spacing="xs">
                <ChangePasswordLink
                  label={t('SecurityStep.enhance-password')}
                  successRoute="#/installation/configureExtension"
                  cancelRoute="#/installation/hint"
                  extension="full"
                />
                <Button
                  tag={Link}
                  onClick={onSkip}
                  label={t('SecurityStep.keep-password')}
                  theme="secondary"
                  className="u-mt-half"
                  extension="full"
                />
              </Stack>
            </Stack>
          </Stack>
        </NarrowContent>
      </Wrapper>
    </VerticallyCentered>
  )
}

export default SecurityStep
