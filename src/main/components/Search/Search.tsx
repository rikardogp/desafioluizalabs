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
                    <label htmlFor="cep">
                        CEP
                        <InputMask
                            className={styles.inputCep}
                            id="cep"
                            type="text"
                            name="cep"
                            onChange={(e) => onChangeCep(e.target.value)}
                            value={cep}
                            mask="99999-999"
                        />
                    </label>

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
