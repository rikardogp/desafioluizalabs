import React from 'react';
import styles from './Address.module.css';

export default function Address() {
    return <div className={styles.container}>
                <p className={styles.road}>Rua Miguel Mentem</p>
                <p className={styles.district}>Vila Guilherme</p>
                <p className={styles.city}>São Paulo - SP</p>
                <p className={styles.cep}>02050-010</p>
            </div>;
}