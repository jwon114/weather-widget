import React from 'react';
import renderer from 'react-test-renderer';
import WeatherWidget from '../components/WeatherWidget';

test('renders WeatherWidget', () => {
  const tree = renderer
    .create(<WeatherWidget />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
