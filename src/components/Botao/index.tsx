import * as React from 'react';
import style from './Botao.module.scss'

class Botao extends React.Component<{type?:"button" | "submit" | "reset" | undefined}> {
    state = {}
    render() {
        const {type="button"} = this.props;
        return (
            <button type={type} className={style.botao}>{this.props.children}</button>
        );
    }
}

export default Botao;