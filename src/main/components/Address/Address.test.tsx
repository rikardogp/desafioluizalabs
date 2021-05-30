import { shallow } from 'enzyme'
import React from 'react'
import { IAddress } from '../../interfaces/interface'
import Address from './Address'

describe('<Search />', () => {
    it('MainPage starts', () => {
        const address = null
        const app = shallow(<Address address={address} />)
        expect(app.find('p').at(0).text()).toEqual('')
    })

    it('MainPage starts with error in address ', () => {
        const address: IAddress | null = {
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: '',
            ibge: '',
            gia: '',
            ddd: '',
            siafi: '',
            erro: 'CEP não encontrado',
        }
        const app = shallow(<Address address={address} />)
        expect(app.find('p').at(0).text()).toEqual('')
    })
})
