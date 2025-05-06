import Card from '../Components/Card/Card.jsx';
import Header from '../Components/Header/Header.jsx';

export default function Home(){
    return(
    <>
       <Header title={"Funções"}/>
       <main className='funcoes'>
       <div>
           <h2 className='titulo-funcao'>O que são Funções?</h2>
           <p>Uma função matemática é uma relação que associa a cada elemento de x ∈ A, um único elemento y ∈ B. De modo que: <strong>𝑓 A : → B(lê-se: f de A em B).</strong></p>
            <p>Exemplo: <br/>
            Imagine a função:
            <strong>
                𝑓(𝑥) = 𝑥 + 2
            </strong></p>
            <p>Se você colocar o número 3 no lugar de x, a conta fica assim:
            <strong>
             𝑓(3)= 3 + 2 = 5
            </strong></p>
            <p>Ou seja, o número 3 se transforma no número 5. Isso é o que uma função faz: pega um valor e devolve outro.</p>
       </div>
        <div>
        <h2 className='titulo-funcao'>Tipos de Funções</h2>
        <div className="tipos">
        <h3 className="tipofuncao">Injetora</h3>
        <p>𝑓 é injetora se ↔ ∀ x1,x2 ∈ A, se x1 ≠ x2 → 𝑓(x1) ≠ 𝑓(x2). Ou, equivalentemente, se  𝑓(x1) = 𝑓(x2) → x1 = x2.</p>
        <img src="public/injetora.webp" alt=""  className="imgtipo"/>
        <h3 className="tipofuncao">Sobrejetora</h3>
        <p>𝑓 é sobrejetora ↔ ∀y ∈ B, ∃x ∈ A → 𝑓(x) = y.</p>
        <img src="public/grafico-funcao-sobrejetora.webp" alt=""  className="imgtipo"/>
        <h3 className="tipofuncao">Bijetora</h3>
        <p>𝑓 é bijetora se é injetora e sobrejetora.</p>
        <img src="public/grafico-funcao-bijetora.webp" alt=""  className="imgtipo"/>
        <h3 className="tipofuncao">Teto</h3>
        <p>A função teto é a função f dos reais nos inteiros que associa a cada x o menor inteiro maior que ou igual a x. Notação: 𝑓(x)=⌈x⌉</p>
        <img src="public/grafico-de-funcao-teto.webp" alt=""  className="imgtipo"/>
        <h3 className="tipofuncao">Piso</h3>
        <p>A função piso é a função f dos reais nos inteiros que associa a cada x o maior inteiro menos que ou igual a x. Notação: 𝑓(x)=⌊x⌋</p>
        <img src="public/grafico-de-funcao-piso.webp" alt=""  className="imgtipo"/>
        </div>
        
        </div>
        

       </main>
    </>
    );
}
