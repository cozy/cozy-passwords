import React from 'react'
import { translate } from 'cozy-ui/react/I18n'
import { NavLink } from 'react-router-dom'

export const Sidebar = ({ t }) => (
  <aside className="o-sidebar">
    <nav>
      <ul className="c-nav">
        <li className="c-nav-item">
          <NavLink
            to="/presentation"
            className="c-nav-link"
            activeClassName="is-active"
          >
            <span className="c-nav-number">1.</span>
            {t('Nav.presentation')}
          </NavLink>
        </li>
        <li className="c-nav-item">
          <NavLink
            to="/security"
            className="c-nav-link"
            activeClassName="is-active"
          >
            <span className="c-nav-number">2.</span>
            {t('Nav.security')}
          </NavLink>
        </li>
        <li className="c-nav-item">
          <NavLink
            to="/installation"
            className="c-nav-link"
            activeClassName="is-active"
          >
            <span className="c-nav-number">3.</span>
            {t('Nav.installation')}
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
)

// translate() provide t() to use translations (ex: locales/en.json)
export default translate()(Sidebar)
