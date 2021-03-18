import React from 'react'
import { Link } from 'react-router-dom'
import snarkdown from 'snarkdown'

import Button from 'cozy-ui/transpiled/react/Button'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import PasswordExample from 'cozy-ui/transpiled/react/PasswordExample'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Card from 'cozy-ui/transpiled/react/Card'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import { UnorderedList, ListItem } from 'cozy-ui/transpiled/react/UnorderedList'
import { useClient } from 'cozy-client'

import Wrapper from 'components/Wrapper'
import VerticallyCentered from 'components/VerticallyCentered'
import strongPasswordIcon from 'assets/strong-password.svg'
import ChangePasswordLink from 'components/ChangePasswordLink'

const SecurityStep = ({ onSkip }) => {
  const { t } = useI18n()

  return (
    <VerticallyCentered>
      <Wrapper>
        <NarrowContent>
          <Stack>
            <img src={strongPasswordIcon} alt="" width={204} height={137} />
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
