import { Container } from "./styles";
import { Content } from "./styles";
import { MdDoneOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";

const myHabits = [
  {
    id: 2607,
    title: "Calistenia a tarde (15 minutos)",
    category: "Sáude",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
    user: 673,
  },
  {
    id: 2608,
    title: "Andar com os cachorros",
    category: "Lazer",
    difficulty: "Fácil",
    frequency: "Duas vezes por semana",
    achieved: true,
    how_much_achieved: 30,
    user: 673,
  },
  {
    id: 2609,
    title: "Beber um litro de água",
    category: "Sáude",
    difficulty: "Média",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
    user: 673,
  },
  {
    id: 2610,
    title: "Jogar Tênis",
    category: "Esporte",
    difficulty: "Difícil",
    frequency: "Semanalmente",
    achieved: true,
    how_much_achieved: 30,
    user: 673,
  },
];

const HabitsCards = () => {
  return (
    <Container>
      <div>
        <h3>Hábitos</h3>
        <button>+</button>
      </div>
      <Content>
        {myHabits.map((habit) => (
          <tr key={habit.id}>
            <td id="title">{habit.title}</td>
            <td>
              <MdDoneOutline />
            </td>
            <td>
              <MdEdit />
            </td>
            <td>
              <MdClose />
            </td>
          </tr>
        ))}
      </Content>
    </Container>
  );
};
export default HabitsCards;
