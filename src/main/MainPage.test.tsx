import { shallow } from 'enzyme'
import React from 'react'
import Address from './components/Address/Address'
import Mapbox from './components/Map/Mapbox'
import Search from './components/Search/Search'
import MainPage from './MainPage'

describe('<MainPage />', () => {
    it('MainPage starts', () => {
        const app = shallow(<MainPage />)
        expect(app.find(Search)).toHaveLength(1)
        expect(app.find(Address)).toHaveLength(1)
        expect(app.find(Mapbox)).toHaveLength(1)
    })
})
