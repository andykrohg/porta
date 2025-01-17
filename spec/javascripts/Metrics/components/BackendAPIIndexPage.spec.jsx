// @flow

import React from 'react'
import { mount } from 'enzyme'

import { BackendAPIIndexPage } from 'Metrics'

const defaultProps = {
  addMappingRulePath: '/mapping-rule/new',
  createMetricPath: '/metrics/new',
  mappingRulesPath: '/mapping-rules',
  metrics: [],
  metricsCount: 0
}

const mountWrapper = (props) => mount(<BackendAPIIndexPage {...{ ...defaultProps, ...props }} />)

it('should render itself', () => {
  const wrapper = mountWrapper()
  expect(wrapper.exists()).toBe(true)
})
