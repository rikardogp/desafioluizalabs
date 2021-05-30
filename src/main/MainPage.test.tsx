import { shallow } from 'enzyme'
import React from 'react'
import Search from './components/Search/Search'
import MainPage from './MainPage'

describe('<MainPage />', () => {
    it('MainPage starts', () => {
        const app = shallow(<MainPage />)
        expect(app.find(Search)).toHaveLength(1)
    })
})
