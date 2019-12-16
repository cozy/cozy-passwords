import React from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import Card from 'cozy-ui/transpiled/react/Card'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { Link } from 'react-router-dom'
import importPasswordsIcon from 'assets/import-passwords.svg'
import CircleIcon from 'components/CircleIcon'
import Wrapper from 'components/Wrapper'

const DumbPresentationPage = props => {
  const { t } = props

  return (
    <Wrapper>
      <Stack>
        <img src={importPasswordsIcon} alt="" />
        <MainTitle>{t('PresentationPage.title')}</MainTitle>
        <Stack spacing="xxl">
          <Text tag="p">{t('PresentationPage.description')}</Text>
          <Card>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <Stack spacing="s">
                  <CircleIcon icon="lock" size={32} color="var(--slateGrey)" />
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
          <Stack spacing="xs" tag={NarrowContent} className="u-mh-auto">
            <Button
              to="/security"
              label={t('PresentationPage.cta')}
              tag={Link}
              extension="full"
            />
          </Stack>
        </Stack>
      </Stack>
    </Wrapper>
  )
}

const PresentationPage = translate()(DumbPresentationPage)

export default PresentationPage
