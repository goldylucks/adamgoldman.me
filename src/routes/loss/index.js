import React from 'react'

import Loss from './Loss'

import Layout from '../../components/Layout'

const props = {
  title: 'Resourceful Response To Loss',
  description:
    'Proven protocol to experience a more peacful, resourceful response to loss',
  path: '/loss',
}

async function action() {
  return {
    chunks: ['loss'],
    ...props,
    component: (
      <Layout path={props.path}>
        <Loss sections={sections()} {...props} />
      </Layout>
    ),
  }
}

export default action

function sections() {
  return [
    {
      title: 'The protocol',
      url: 'protocol',
      description:
        'The steps to experience a more resourceful response to loss',
    },
    {
      title: 'Softening shock response',
      url: 'shock-response',
      description:
        "In addition to the loss, there's often a shock response to the moment of death itself",
    },
    {
      title: 'Regret, guilt, anger & blame',
      url: 'releasing-mixed-feelings',
      description:
        'In case of "unresolved issues" with the loss, we attend to those first',
    },
    {
      title: 'Types of loss',
      url: 'types',
      description:
        'Commonalities and differences of differnet type of loss, and how we attend to each',
    },
    {
      title: 'Common loss pitfalls',
      url: 'common-pitfalls',
      description:
        'Since no one "taught" us how to grieve in a healthy way, we are apt to get "stuck" in unuseful patterns',
    },
    {
      title: 'Resourceful response to loss',
      url: 'resourceful-response',
      description:
        '"They could speak about the lost person with softness, caring and happiness. One woman said, “When I think of Joe, it’s as if he is right here with me."',
    },
    {
      title: 'FAQ',
      url: 'faq',
      description:
        'Some questions many share about experiencing loss in a more resourceful way',
    },
    {
      title: 'Get started',
      url: 'participate',
      description:
        "When you are ready to start, we'll schedule a session and explore how you can make use of the protocol",
    },
  ]
}
