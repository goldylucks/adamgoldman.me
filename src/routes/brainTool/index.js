import React from 'react';

import BrainTool from './BrainTool';

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
  return {
    title: tool.title,
    description: tool.description,
    path: `/tools/${params.tool}`,
    component: <BrainTool tool={tool} />,
  };
}

export default action;
