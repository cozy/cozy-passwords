import React from 'react'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text, SubTitle } from 'cozy-ui/transpiled/react/Text'
import Card from 'cozy-ui/transpiled/react/Card'
import Infos from 'cozy-ui/transpiled/react/Infos'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { Link } from 'react-router-dom'
import importPasswordsIcon from 'assets/import-passwords.svg'
import CircleIcon from 'components/CircleIcon'
import Wrapper from 'components/Wrapper'
import supportedPlatforms from 'supportedPlatforms'
import cx from 'classnames'
import { isSupportedBrowser, browserName } from 'currentBrowser'

const DumbPresentationPage = props => {
  const { t } = props

  return (
    <Wrapper>
      <Stack>
        <img src={importPasswordsIcon} alt="" />
        <MainTitle>{t('PresentationPage.title')}</MainTitle>
        <Stack spacing="xxl">
          <Text tag="p">{t('PresentationPage.description')}</Text>
          <Stack spacing="m">
            <Card>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <Stack spacing="s">
                    <CircleIcon
                      icon="lock"
                      size={32}
                      color="var(--slateGrey)"
                    />
                    <Text tag="p">{t('PresentationPage.item1')}</Text>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack spacing="s">
                    <CircleIcon
                      icon="password"
                      size={32}
                      color="var(--slateGrey)"
                    />
                    <Text tag="p">{t('PresentationPage.item2')}</Text>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack spacing="s">
                    <CircleIcon
                      icon="to-the-cloud"
                      size={32}
                      color="var(--slateGrey)"
                    />
                    <Text tag="p">{t('PresentationPage.item3')}</Text>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
            {!isSupportedBrowser ? (
              <Infos
                className="u-ta-left"
                theme="danger"
                description={
                  <>
                    <SubTitle className="u-pomegranate">
                      {t('PresentationPage.notSupportedInfos.title', {
                        browser: browserName
                      })}
                    </SubTitle>
                    <Text>
                      {t('PresentationPage.notSupportedInfos.description', {
                        browser: browserName
                      })}
                    </Text>
                  </>
                }
                action={Object.entries(supportedPlatforms).map(
                  ([platform, infos], index) => (
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
                      className={cx({
                        'u-ml-0': index === 0
                      })}
                    />
                  )
                )}
              />
            ) : null}
          </Stack>
          {isSupportedBrowser ? (
            <NarrowContent className="u-mh-auto">
              <Button
                to="/security"
                label={t('PresentationPage.cta')}
                tag={Link}
                extension="full"
              />
            </NarrowContent>
          ) : null}
        </Stack>
      </Stack>
    </Wrapper>
  )
}

const PresentationPage = translate()(DumbPresentationPage)

export default PresentationPage
