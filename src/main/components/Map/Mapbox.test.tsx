import { shallow } from 'enzyme'
import React from 'react'
import Mapbox from './Mapbox'

describe('<Mapbox />', () => {
    it('MainPage starts', () => {
        const address = 'Rua Teste'
        const app = shallow(<Mapbox address={address} />)
        expect(app.find('div').at(0).text()).toEqual('Mapa ')
    })
})
