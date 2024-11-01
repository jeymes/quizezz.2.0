import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import useModelManager from './useModelManagerController';
import { PageElement, QuizData, Option } from '../@types/types'; // Ajuste o caminho conforme sua estrutura de pastas

export function useFormController() {
    const { modelPreview, openModal, closeModal } = useModelManager();

    const { register, control, handleSubmit, reset, setValue } = useForm<QuizData>({
        defaultValues: {
            title: '',
            quizLink: '',
            quizId: '',
            userId: '',
            color: '',
            questions: { elements: [] }, // Mudança para incluir questions
        },
    });

    const { fields: elements, append: appendElement } = useFieldArray({
        control,
        name: 'questions.elements', // Atualizando o nome do campo para refletir a nova estrutura
    });

    // Função para adicionar uma nova pergunta
    const addNewQuestion = () => {
        const nextModelIndex = elements.length % modelPreview.length; // Seleciona um modelo baseado no índice atual
        const selectedModel = modelPreview[nextModelIndex]; // Obtém o modelo correspondente

        appendElement({
            index: elements.length,
            type: 'question',
            content: '', // Texto da pergunta
            model: selectedModel.model, // Salva o modelo
            imageUrl: selectedModel.props.imageUrl, // Salva a imagem do modelo
            elements: [], // Inicializa os elementos da pergunta
        });
    };

    // Função para adicionar opções a uma pergunta
    const addOptions = (questionIndex: number, options: { text: string; imageUrl?: string }[]) => {
        const currentOptions: Option[] = options.map((option, index) => ({
            index,
            ...option,
        }));

        const currentQuestion = elements[questionIndex];

        // Adiciona as opções dentro da pergunta correspondente
        if (currentQuestion && currentQuestion.type === 'question') {
            const updatedElements: PageElement[] = [
                ...currentQuestion.elements,
                {
                    index: currentQuestion.elements.length,
                    type: 'options',
                    options: currentOptions,
                    model: currentQuestion.model, // Associar o modelo da pergunta
                },
            ];

            // Atualiza o campo da pergunta com as novas opções
            setValue(`questions.elements.${questionIndex}.elements`, updatedElements);
        }
    };

    // Função para salvar todos os elementos
    const saveElementsInOrder = (data: QuizData) => {
        const updatedElements = data.questions.elements.map((element) => ({
            ...element,
            // Adicione lógica adicional conforme necessário
        }));

        // Aqui você pode salvar os dados conforme necessário
        console.log({ ...data, questions: { elements: updatedElements } });
    };

    const onSubmit: SubmitHandler<QuizData> = async (data) => {
        const quizData: QuizData = {
            ...data, // Adiciona as propriedades do data ao quizData
        };

        await saveElementsInOrder(quizData); // Salva todos os elementos na ordem correta
    };

    return {
        register,
        control,
        handleSubmit,
        reset,
        setValue,
        addNewQuestion,
        addOptions,
        onSubmit,
        openModal,
        closeModal,
    };
}
