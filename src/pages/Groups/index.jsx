// import { Container } from './styles';
import { useMyGroups } from "../../providers/mygroups";
import MiniCardGroup from "../../components/MiniCardGroup";

const Groups = () => {
  /* const { myGroups } = useMyGroups(); */
  /* usar o myGroups para fazer o map dos cards e incluir as props no miniCard.
  É necessário criar numa nova função no provider e importar aqui para que seja possívei fazer a 
  edição ou saída do grupo */

  return (
    <div>
      <MiniCardGroup
        /* own */ //se ausente, significa que o grupo não foi criado pelo usuário
        name={"Harry Potter"}
        category={"Entretenimento"}
        action //função que vem do provider useMyGroups para fazer a unSubscribe => Usar o ID do grupo como parâmetro
        description={
          "Este grupo é fictício e foi criado somente para encher linguiça e poder estilizar este card. Este grupo é fictício e foi criado somente para encher linguiça e poder estilizar este card."
        }
        numberOfMembers={5} //Aqui é um length do array de participantes
        numberOfActivies={12} //Aqui é um length do array de atividades
      />
    </div>
  );
};

export default Groups;
