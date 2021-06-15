import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "../styles/Home.module.css";

export default function Carga() {

  return (
    <div className={styles.carga}>
      <CircularProgress color="secondary" />
    </div>
  );
}