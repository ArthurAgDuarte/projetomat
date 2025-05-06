import Card from '../Components/Card/Card.jsx';
import Header from '../Components/Header/Header.jsx';

export default function Home(){
    return(
    <>
        <Header title={"Conjuntos"}/>
        <main className='conjuntos'>
        <div>
           <h2 className='titulo-conjuntos'>O que são Conjuntos?</h2>
           <p>Um conjunto é um agrupamento de objetos bem definidos, que indicamos por uma letra maiúscula (A, B, C), em que os objetos são chamados de elementos do conjunto. Os elementos dos conjuntos são os objetos que formam o conjunto, que indicamos por uma letra minúscula (x, y, z). Não se encaixam nesse conceito o conjunto vazio e o unitário</p>
           <h2 className='titulo-conjuntos'>Como descrever conjuntos</h2>
           <p>Podemos descrever os elementos de um conjunto citando todos os seus elementos ou através de uma propriedade. Exemplo: Seja B o conjunto dos números naturais menores ou iguais a 100, logo: B = <img src="public/Captura de tela 2025-05-06 144308.png" alt="" /></p>
           <h2 className='titulo-conjuntos'>Representação por diagramas de Venn</h2>
           <p>Uma maneira visual de representar um conjunto é através dos diagramas de Venn, que são curvas fechadas que não se cruzam. Tais diagramas servem de base para resolver diversos exercícios.</p>
           <img src="./public/Venn_A_intersect_B.svg.png" alt="" className='imgtipo'/>
       </div>
        <div>
        <h2 className='titulo-funcao'>Tipos de Funções</h2>
        <div className="tipos">
        <h3 className="tipoconjunto">Unitário</h3>
        <p>É o Conjunto formado por um só elemento.</p>
        <img src="public/images.png" alt=""  className="imgtipo"/>
        <h3 className="tipoconjunto">Vazio</h3>
        <p>Conjunto vazio é aquele que não possui elementos.</p>
        <img src="public/conjunto-vazio.png" alt=""  className="imgtipo"/>
        <h3 className="tipoconjunto">Finito</h3>
        <p>É o conjunto com número limitado de elementos.</p>
        <img src="public/finito.png" alt=""  className="imgtipo"/>
        <h3 className="tipoconjunto">Infinito</h3>
        <p>É o conjunto com número ilimitado de elementos.</p>
        <img src="public/infinito.png" alt=""  className="imgtipo"/>
        <h3 className="tipoconjunto">Universo</h3>
        <p>É Conjunto mais amplo ao qual pertencem todos os elementos em determinado assunto.</p>
        <img src="public/universo.png" alt=""  className="imgtipo"/>
        <h2 className='titulo-funcao'>Subconjuntos</h2>
        <p>Dizemos que o conjunto A é subconjunto de um conjunto B ( A B ⊂ ), se cada elemento do conjunto A é também elemento do conjunto B. Em símbolos, temos: <br />
                <strong>A ⊂ B ⇔(∀x)(x ∈ A ⇒ x ∈ B)</strong></p>
        <img src="public/subconjuntos.png" alt=""  className="imgtipo"/>
        </div>
        
        </div>
       </main>
    </>
    );
}
