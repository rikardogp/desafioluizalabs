import React, { useCallback } from 'react'
import InputMask from 'react-input-mask'
import { IPropSearch } from '../../interfaces/interface'
import styles from './Search.module.css'

export default function Search({
    onChangeCep,
    onSubmit,
    cep,
}: IPropSearch): JSX.Element {
    const handleSubmit = useCallback(
        (e: React.SyntheticEvent): void => {
            e.preventDefault()
            onSubmit()
        },
        [onSubmit]
    )
    return (
        <div>
            <p className={styles.txtSearch}>Consultar</p>
            <form onSubmit={handleSubmit}>
                <div>
                    CEP
                    <InputMask
                        className={styles.inputCep}
                        id="cep"
                        type="text"
                        name="cep"
                        autoComplete="text"
                        onChange={(e) => onChangeCep(e.target.value)}
                        value={cep}
                        mask="99999-999"
                        required
                    />
                    <input
                        className={styles.btn}
                        type="submit"
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    )
}
