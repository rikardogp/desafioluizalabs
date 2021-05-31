import { shallow } from 'enzyme'
import React from 'react'
import App from './App'
import MainPage from './main'

describe('<App />', () => {
    it('renders Unknown Name when no name entered', () => {
        const app = shallow(<App />)
        expect(app.find(MainPage)).toHaveLength(1)
    })
})
