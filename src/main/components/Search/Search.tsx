import React, { useCallback } from 'react'
import styles from './Search.module.css'

interface IProp {
    onChangeCep: any
    onSubmit: any
    cep: string
}

export default function Search({
    onChangeCep,
    onSubmit,
    cep,
}: IProp): JSX.Element {
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
                        <input
                            className={styles.inputCep}
                            id="cep"
                            type="text"
                            name="cep"
                            onChange={(e) => onChangeCep(e.target.value)}
                            value={cep}
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
