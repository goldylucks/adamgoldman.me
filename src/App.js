import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ToolEditor from './routes/toolEditor/ToolEditor'
import ToolViewer from './routes/toolViewer/ToolViewer'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/tool-editor/:tool' component={ToolEditor} />
        <Route path='/tool-viewer/:tool' component={ToolViewer} />
      </Switch>
    </div>
  )
}

export default App
