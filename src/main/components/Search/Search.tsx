import React from 'react';
import styles from './Search.module.css';

export default function Search() {
    return <div>
        <p className={styles.txtSearch}>
            Consultar
        </p>
        <form
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    cep: { value: string };
                };
                const cep = target.cep.value;

                console.log(cep);
            }}
        >
            <div>
                <label>
                    CEP
                    <input type="text" name="cep" />
                </label>
                <input type="submit" value="Buscar" />
            </div>
        </form>
    </div>
}