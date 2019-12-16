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
        <MainTitle>Plus qu&apos;un seul mot de passe à retenir</MainTitle>
        <Stack spacing="xxl">
          <Text tag="p">
            Conservez vos mots de passe en sécurité dans votre Cozy
          </Text>
          <Card>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <Stack spacing="s">
                  <CircleIcon icon="lock" size={32} color="var(--slateGrey)" />
                  <Text tag="p">
                    Vos mots de passe seront enregistrés une bonne fois pour
                    toute dans votre coffre 100% personnel et sécurisé.
                  </Text>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing="s">
                  <CircleIcon
                    icon="password"
                    size={32}
                    color="var(--slateGrey)"
                  />
                  <Text tag="p">
                    Votre Cozy vous connectera automatiquement aux sites web de
                    toutes vos marques lors de vos navigations internet.
                  </Text>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing="s">
                  <CircleIcon
                    icon="to-the-cloud"
                    size={32}
                    color="var(--slateGrey)"
                  />
                  <Text tag="p">
                    Vous pourrez plus facilement connecter vos marques à votre
                    Cozy pour récupérer vos données.
                  </Text>
                </Stack>
              </Grid>
            </Grid>
          </Card>
          <Stack
            spacing="xs"
            tag={NarrowContent}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Button
              to="/security"
              label={t('PresentationPage.lets-go')}
              tag={Link}
              extension="full"
            />
            <Button
              label="Ne plus me proposer"
              extension="full"
              theme="secondary"
              className="u-mt-half"
            />
          </Stack>
        </Stack>
      </Stack>
    </Wrapper>
  )
}

const PresentationPage = translate()(DumbPresentationPage)

export default PresentationPage
