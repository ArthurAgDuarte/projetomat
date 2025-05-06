import Card from '../Components/Card/Card.jsx';
import Header from '../Components/Header/Header.jsx';

export default function Home(){
    return(
    <>
       <Header title={"Relações"}/>
       <main className='relacoes'>
       <div>
           <h2 className='titulo-relacao'>O que são Relações?</h2>
           <p>Uma relação binária é uma comparação entre dois objetos tomados em uma ordem definida. Os objetos podem estar ou não relacionados de acordo com alguma regra. Toda relação é um conjunto de pares ordenados onde o primeiro elemento pertence ao conjunto de partida, e o segundo elemento pertence ao conjunto de chegada.</p>
        <img src="public/unnamed.png" alt=""  className="imgtipo"/>
       </div>
        <div>
        <h2 className='titulo-relacao'>Como representar Relações</h2>
           <p>Considere os conjuntos A e B. Uma relação R de A em B, representada por <strong>R: A → B(lê-se: R de A em B)</strong>, é um subconjunto do produto cartesiano A x B, ou seja, um conjunto de pares ordenados do tipo <strong>(x, y)</strong>, onde <strong>x ∈ A e y ∈ B</strong>.</p>
        <img src="public/DiagramasComposição.png" alt=""  className="imgtipo"/>
        <h2 className='titulo-relacao'>Tipos de Relações</h2>
        <div className="tipos">
        <h3 className="tiporelacao">Reflexiva</h3>
        <p>Uma relação R é reflexiva em A se para todo x ∈ A, então (x, x) ∈ R. Caso (x, x) ∉ R,
        dizemos que R não é reflexiva, qualquer que seja x ∈ A.</p>
        <img src="public/reflexiva.png" alt=""  className="imgtipo2"/>
        <h3 className="tiporelacao">Simétrica</h3>
        <p>Uma relação R é simétrica em A se (x, y) ∈ R, então (y, x) ∈ R. Caso (x, y) ∈ R, mas
        (y, x) ∉ R, dizemos que R não é simétrica.</p>
        <img src="public/simetrica.png" alt=""  className="imgtipo2"/>
        <h3 className="tiporelacao">Antissimétrica</h3>
        <p>Uma relação R é antissimétrica em A se (x, y) ∈ R e (y, y) ∈ R, então x = y. Caso
        (x, y) ∈ R e (x, y) ∈ R, mas x ≠ y, dizemos que R não é antissimétrica.</p>
        <img src="public/antisimetrica.png" alt=""  className="imgtipo2"/>
        <h3 className="tiporelacao">Transitiva</h3>
        <p>Uma relação R é transitiva em A se (x, y) ∈ R e (y, z) ∈ R, então (x, z) ∈ R. Caso
        (x, y) ∈ R e (y, z) ∈ R, mas (x, z) ∉ R, dizemos que R não é transitiva.</p>
        <img src="public/transitiva.png" alt=""  className="imgtipo2"/>
        </div>
        
        </div>
       </main>
    </>
    );
}
