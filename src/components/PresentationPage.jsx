import React from 'react'
import cx from 'classnames'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text, SubTitle } from 'cozy-ui/transpiled/react/Text'
import Card from 'cozy-ui/transpiled/react/Card'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { Link } from 'react-router-dom'
import importPasswordsIcon from 'assets/import-passwords.svg'
import CircleIcon from 'components/CircleIcon'
import Wrapper from 'components/Wrapper'
import VerticallyCentered from './VerticallyCentered'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import Infos from 'cozy-ui/transpiled/react/Infos'
import Icon from 'cozy-ui/transpiled/react/Icon'
import getSupportedPlatforms from 'supportedPlatforms'
import { isSupportedBrowser, browserName } from 'currentBrowser'
import BarTitle from 'BarTitle'

const Section1 = () => {
  const { t } = useI18n()
  return (
    <Stack spacing="s">
      <CircleIcon icon="lock" size={32} color="var(--slateGrey)" />
      <Text tag="p">{t('PresentationPage.item1')}</Text>
    </Stack>
  )
}

const Section2 = () => {
  const { t } = useI18n()
  return (
    <Stack spacing="s">
      <CircleIcon icon="password" size={32} color="var(--slateGrey)" />
      <Text tag="p">{t('PresentationPage.item2')}</Text>
    </Stack>
  )
}

const Section3 = () => {
  const { t } = useI18n()
  return (
    <Stack spacing="s">
      <CircleIcon icon="to-the-cloud" size={32} color="var(--slateGrey)" />
      <Text tag="p">{t('PresentationPage.item3')}</Text>
    </Stack>
  )
}

const UnsupportedBrowser = () => {
  const { t } = useI18n()
  const supportedPlatforms = getSupportedPlatforms()
  return (
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
      action={Object.entries(supportedPlatforms)
        .filter(([, infos]) => infos.type === 'browser')
        .map(([platform, infos], index) => (
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
        ))}
    />
  )
}

const PresentationPage = () => {
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()
  return (
    <VerticallyCentered>
      <BarTitle>{t('Nav.presentation')}</BarTitle>
      <Wrapper>
        <Stack>
          <img src={importPasswordsIcon} alt="" />
          <MainTitle>{t('PresentationPage.title')}</MainTitle>
          <Stack spacing="xxl">
            <Text tag="p">{t('PresentationPage.description')}</Text>
            <Stack spacing="m">
              <Card>
                <Grid container spacing={24}>
                  {isMobile ? (
                    <>
                      <Section1 />
                      <Section2 />
                      <Section3 />
                    </>
                  ) : (
                    <>
                      <Grid item xs={4}>
                        <Section1 />
                      </Grid>
                      <Grid item xs={4}>
                        <Section2 />
                      </Grid>
                      <Grid item xs={4}>
                        <Section3 />
                      </Grid>
                    </>
                  )}
                </Grid>
              </Card>
              {!isSupportedBrowser() ? <UnsupportedBrowser /> : null}
            </Stack>
            {isSupportedBrowser() ? (
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
    </VerticallyCentered>
  )
}

export default PresentationPage
