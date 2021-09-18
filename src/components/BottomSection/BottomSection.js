import React from 'react'

import FbComments from '../FbComments'

const BottomSection = () => (
  <div style={{ background: '#fafafa', paddingTop: 20, paddingBottom: 20 }}>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xs-12">
          <FbComments />
        </div>
      </div>
    </div>
  </div>
)

export default BottomSection
