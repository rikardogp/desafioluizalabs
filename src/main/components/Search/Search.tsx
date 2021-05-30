import React, { useCallback, useState } from 'react'
import styles from './Search.module.css'

interface IProp {
    cep: any
}

export default function Search(props: IProp): JSX.Element {
    const [cep, setCep] = useState('')
    const handleSubmit = useCallback(
        (e: React.SyntheticEvent): void => {
            e.preventDefault()
            const target = e.target as typeof e.target & {
                cep: { value: string }
            }
            setCep(target.cep.value)
            props.cep(target.cep.value)
        },
        [props]
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
                            onChange={(e) => setCep(e.target.value)}
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
