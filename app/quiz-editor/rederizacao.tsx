// import React from 'react';
// import { useFormController } from './useFormController';

// const QuizForm: React.FC = () => {
//     const {
//         register,
//         control,
//         handleSubmit,
//         addHeader,
//         addProgress,
//         addNewQuestion,
//         addOptions,
//         addButton,
//         onSubmit,
//         elements,
//     } = useFormController();

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <h1>Quiz Form</h1>

//             {elements.map((element, index) => {
//                 switch (element.type) {
//                     case 'header':
//                         return (
//                             <div key={index}>
//                                 <h2>Cabeçalho</h2>
//                                 <img src={element.content} alt="Cabeçalho" />
//                             </div>
//                         );
//                     case 'progress':
//                         return (
//                             <div key={index}>
//                                 <h2>Progresso</h2>
//                                 <progress value={element.content} max="100" />
//                             </div>
//                         );
//                     case 'question':
//                         return (
//                             <div key={index}>
//                                 <h2>Pergunta</h2>
//                                 <input
//                                     {...register(`elements.${index}.content`)}
//                                     placeholder="Digite sua pergunta"
//                                 />
//                                 <img src={element.imageUrl} alt="Modelo" />
//                             </div>
//                         );
//                     case 'options':
//                         return (
//                             <div key={index}>
//                                 <h2>Opções</h2>
//                                 {element.options?.map((option, idx) => (
//                                     <div key={idx}>
//                                         <input
//                                             {...register(`elements.${index}.options.${idx}.text`)}
//                                             placeholder={`Opção ${idx + 1}`}
//                                         />
//                                         {option.imageUrl && <img src={option.imageUrl} alt="Opção" />}
//                                     </div>
//                                 ))}
//                             </div>
//                         );
//                     case 'button':
//                         return (
//                             <div key={index}>
//                                 <button type="button">{element.content}</button>
//                             </div>
//                         );
//                     default:
//                         return null;
//                 }
//             })}

//             <button type="button" onClick={() => addHeader('url-da-imagem.jpg')}>Adicionar Cabeçalho</button>
//             <button type="button" onClick={() => addProgress(50)}>Adicionar Progresso</button>
//             <button type="button" onClick={addNewQuestion}>Adicionar Nova Pergunta</button>
//             <button type="button" onClick={() => addButton('Enviar')}>Adicionar Botão</button>
//             <button type="submit">Salvar Quiz</button>
//         </form>
//     );
// };

// export default QuizForm;
