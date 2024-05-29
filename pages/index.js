import { useState } from "react";

function Home(){
    return <div>
    <h1 className="homeTitle">Mensagem especial!</h1>
    <Declaracao />
    </div> 
}

// function sortMegaSena(){
//     const listSorted = [];
//     let i = 0;
    
//     while(i<5){
//         const sortedNumber = Math.floor(Math.random() * 60) + 1;
//         const formattedNumber = sortedNumber.toLocaleString('en-us', {
//             minimumIntegerDigits: 2,
//             useGrouping: false
//         });
//         listSorted.push(formattedNumber)
//     }

//     return (
//         <div>
//             <div>Seu palpite para megasena é: </div>
//             <button onClick={sortMegaSena}>Sortear</button>
//         </div>
//     )
// }

function Declaracao(){
    const[msg, setMsg] = useState(`Clica ai embaixo só pra testar um negócio`);
    
    function mudaMsg(){
        setMsg(`Obrigado por todo seu apoio e carinho, é algo besta mas queria arrumar uma forma diferente de te agradecer por dispor do seu tempo para me ajudar, você é ótima!`);
    }

    return(
        <div>
            <div className="responseMsg">{msg}</div>
            <div className="buttonContainer">
                <button onClick={mudaMsg}>Clique para ver a mensagem</button>
            </div>
        </div>
    )
}

export default Home