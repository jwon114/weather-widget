import React from 'react'
import renderer from 'react-test-renderer';
import Header from '../components/Header';

test('renders Header', () => {
  const tree = renderer
    .create(<Header 
              location={'London'} 
              datetime={'1591092083'}
              summary={'cloudy with a chance of meatballs'}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});