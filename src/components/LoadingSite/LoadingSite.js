import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHourGlass from '@fortawesome/fontawesome-free-regular/faHourglass'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './LoadingSite.css'

const LoadingSite = () => (
  <div
    className={s.container}
    style={{
 width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
}}>
    <FontAwesomeIcon style={{ fontSize: 200 }} icon={faHourGlass} />
  </div>
)

export default withStyles(s)(LoadingSite)
