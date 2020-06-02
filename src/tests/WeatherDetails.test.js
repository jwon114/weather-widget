import React from 'react';
import renderer from 'react-test-renderer';
import WeatherDetails from '../components/WeatherDetails';

test('renders WeatherDetails', () => {
  const tree = renderer
    .create(<WeatherDetails 
              icon={'01d'}
              temperature={20}
              precipitation={0}
              humidity={20}
              windSpeed={5}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});