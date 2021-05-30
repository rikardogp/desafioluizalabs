import React from 'react'
import { IPropAddress } from '../../interfaces/interface'
import styles from './Address.module.css'

export default function Address({ address }: IPropAddress): JSX.Element {
    return (
        <div className={styles.container}>
            <p className={styles.road}>{address?.logradouro}</p>
            <p className={styles.district}>{address?.bairro}</p>
            <p className={styles.city}>
                {address?.localidade} - {address?.uf}
            </p>
            <p className={styles.cep}>{address?.cep}</p>
        </div>
    )
}
