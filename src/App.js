import React from "react";
import { Switch, Route } from "react-router-dom";
import ToolEditor from "./routes/toolEditor/ToolEditor";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/tool-editor">
          <ToolEditor data={{}} url='foo' />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
