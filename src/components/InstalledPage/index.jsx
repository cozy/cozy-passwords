import React from 'react'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import snarkdown from 'snarkdown'
import CloudIcon from 'components/CloudIcon'
import setupTutorialIllustration from 'assets/setup-tutorial.gif'
import VerticallyCentered from '../VerticallyCentered'
import Help from '../Help'
import './styles.css'

const DumbInstalledPage = props => {
  const { t, client } = props
  const cozyURL = new URL(client.getStackClient().uri)

  return (
    <VerticallyCentered>
      <Wrapper>
        <NarrowContent>
          <Stack spacing="xxl">
            <div className="InstalledPage__illustration">
              <img
                src={setupTutorialIllustration}
                alt=""
                width="512"
                height="220"
              />
              <Icon icon="drawing-arrow-up" width={96} height={86} />
            </div>
            <Stack spacing="m">
              <MainTitle className="InstalledPage__title">
                {t('InstalledPage.title')}
              </MainTitle>
              <Text className="InstalledPage__description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: snarkdown(
                      t('InstalledPage.descriptionStart', {
                        address: cozyURL.host
                      })
                    )
                  }}
                />{' '}
                <CloudIcon />{' '}
                <span
                  dangerouslySetInnerHTML={{
                    __html: snarkdown(
                      t('InstalledPage.descriptionEnd', {
                        address: cozyURL.host
                      })
                    )
                  }}
                />
              </Text>
            </Stack>
            <Help />
          </Stack>
        </NarrowContent>
      </Wrapper>
    </VerticallyCentered>
  )
}

const InstalledPage = compose(withClient, translate())(DumbInstalledPage)

export default InstalledPage
