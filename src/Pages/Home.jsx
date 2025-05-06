import Card from '../Components/Card/Card.jsx';
import Header from '../Components/Header/Header.jsx';

export default function Home(){
    return(
    <>
       <Header title={"Conjuntos, Relações e Funções"}/>
       <main className='home'>
        <Card
        titulo={"Conjuntos"}
        link={"/conjuntos"}
        imagem={"./public/Venn_A_intersect_B.svg.png"}
        />
        <Card
        titulo={"Relações"}
        link={"/relacoes"}
        imagem={"public/Relación_binaria_12.svg.png"}
        />
        <Card
        titulo={"Funções"}
        link={"/funcoes"}
        imagem={"public/Graph_of_a_function.svg.png"}
        />
       </main>
    </>
    );
}
