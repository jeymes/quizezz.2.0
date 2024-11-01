const quizData: any = {
    title: 'Quiz sobre Programação',
    quizLink: 'https://example.com/quiz',
    quizId: 'quiz_12345',
    userId: 'user_67890',
    color: '#ff5733',
    pages: [
        {
            page: 0,
            elements: [ // Elementos dentro da questão
                {
                    index: 0,
                    type: 'header',
                    content: 'Bem-vindo ao Quiz!',
                    model: 'model01',
                },
                {
                    index: 1,
                    type: 'progress',
                    content: 50, // 50% de progresso
                    model: 'model02',
                },
                {
                    index: 0,
                    type: 'options',
                    options: [
                        { index: 0, text: 'HTML' },
                        { index: 1, text: 'CSS' },
                        { index: 2, text: 'JavaScript', imageUrl: 'https://example.com/js_image.png' },
                        { index: 3, text: 'Python' },
                    ],
                    model: 'model04',
                },
                {
                    index: 4,
                    type: 'button',
                    content: 'Enviar Respostas',
                    model: 'model07',
                },
            ],
        },
        {
            page: 1,
            elements: [ // Elementos dentro da nova questão
                {
                    index: 0,
                    type: 'header',
                    content: 'Bem-vindo ao Quiz!',
                    model: 'model01',
                },
                {
                    index: 1,
                    type: 'progress',
                    content: 50, // 50% de progresso
                    model: 'model02',
                },
                {
                    index: 0,
                    type: 'options',
                    options: [
                        { index: 0, text: 'Berlim' },
                        { index: 1, text: 'Madri' },
                        { index: 2, text: 'Paris' },
                        { index: 3, text: 'Lisboa' },
                    ],
                    model: 'model06',
                },
                {
                    index: 4,
                    type: 'button',
                    content: 'Enviar Respostas',
                    model: 'model07',
                },
            ],
        },
    ]
};
