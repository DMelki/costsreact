import ProjectForm from '../projects/ProjectForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto(){
    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    )
}

export default NovoProjeto