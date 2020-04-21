import React from 'react'
import cx from 'classnames'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { Text, SubTitle } from 'cozy-ui/transpiled/react/Text'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import importPasswordsIcon from 'assets/import-passwords.svg'
import CircleIcon from 'components/CircleIcon'
import Wrapper from 'components/Wrapper'
import VerticallyCentered from './VerticallyCentered'
import Infos from 'cozy-ui/transpiled/react/Infos'
import Icon from 'cozy-ui/transpiled/react/Icon'
import getSupportedPlatforms from 'supportedPlatforms'
import { isSupportedBrowser, browserName } from 'currentBrowser'
import BarTitle from 'BarTitle'
import Hero, {
  Title,
  Section,
  Sections,
  CTA
} from 'cozy-ui/transpiled/react/Hero'

const Section1 = () => {
  const { t } = useI18n()
  return (
    <Section>
      <CircleIcon icon="lock" size={32} color="var(--slateGrey)" />
      <Text tag="p">{t('PresentationStep.item1')}</Text>
    </Section>
  )
}

const Section2 = () => {
  const { t } = useI18n()
  return (
    <Section>
      <CircleIcon icon="password" size={32} color="var(--slateGrey)" />
      <Text tag="p">{t('PresentationStep.item2')}</Text>
    </Section>
  )
}

const Section3 = () => {
  const { t } = useI18n()
  return (
    <Section>
      <CircleIcon icon="to-the-cloud" size={32} color="var(--slateGrey)" />
      <Text tag="p">{t('PresentationStep.item3')}</Text>
    </Section>
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
            {t('PresentationStep.notSupportedInfos.title', {
              browser: browserName
            })}
          </SubTitle>
          <Text>
            {t('PresentationStep.notSupportedInfos.description', {
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

const PresentationStep = ({ onLetsGo }) => {
  const { t } = useI18n()
  return (
    <VerticallyCentered>
      <BarTitle>{t('Nav.presentation')}</BarTitle>
      <Wrapper>
        <Stack>
          <img src={importPasswordsIcon} alt="" />
          <Hero>
            <Title className="u-mb-0">{t('PresentationStep.title')}</Title>
            <Text className="u-mb-3" tag="p">
              {t('PresentationStep.description')}
            </Text>
            <Sections className="u-mb-2">
              <Section1 />
              <Section2 />
              <Section3 />
            </Sections>
            {isSupportedBrowser() ? (
              <CTA>
                <Button
                  onClick={onLetsGo}
                  label={t('PresentationStep.cta')}
                  extension="full"
                />
              </CTA>
            ) : (
              <UnsupportedBrowser />
            )}
          </Hero>
        </Stack>
      </Wrapper>
    </VerticallyCentered>
  )
}

export default PresentationStep
