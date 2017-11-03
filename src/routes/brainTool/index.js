import React from 'react';

import BrainTool from './BrainTool';
import BrainToolDEPRECATED from './BrainToolDEPRECATED';

const toolToRefactor = [
  'smoking-destroyer',
  'feel-good-generator',
  'grief-to-appreciation',
  'nail-biting-destroyer',
  'perfect-day',
  'trauma-relief',
  'internal-dialog-scrambeler',
  'loved-one-amplifier',
  'reverse-feeling-spin',
  'reverse-feeling-spin2',
  'recurring-time-distortion',
];

async function action({ params }) {
  const tool = await import(`../../brainTools/${params.tool}.js`)
    // .then(module => module) // use an object from `export default`
    .catch(error => {
      if (error.message.startsWith('Cannot find module')) {
        console.error(`module ${params.tool} does not exists`);
        return null; // module (tool) does not exists
      }
      throw error; // loading chunk failed (render error page)
    });
  if (!tool) return null; // go to next route (or render 404)
  const Comp = toolToRefactor.includes(params.tool)
    ? BrainToolDEPRECATED
    : BrainTool;
  return {
    title: tool.title,
    description: tool.description,
    path: `/tools/${params.tool}`,
    component: <Comp tool={tool} />,
  };
}

export default action;
