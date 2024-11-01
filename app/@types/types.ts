export type User = {
  token: string;
  uid: string;
  name: string;
  email: string;
  password?: any;
}

// Definindo tipo para opções de pergunta
export type Option = {
  index: number; // Índice da opção
  text: string; // Texto da opção
  imageUrl?: string; // URL da imagem opcional
};

// Definindo tipo para os elementos da página
export type PageElement =
  | {
    index: number;
    type: 'header';
    content: string;
    model?: string;
  }
  | {
    index: number;
    type: 'progress';
    content: number;
    model?: string;
  }
  | {
    index: number;
    type: 'options';
    options: Option[];
    model?: string;
  }
  | {
    index: number;
    type: 'button';
    content: string;
    model?: string;
  };

// Definindo tipo para uma página do quiz
export type Page = {
  page: number; // Índice da página
  elements: PageElement[]; // Elementos dentro da página
};

// Definindo tipo para os dados do quiz
export interface QuizData {
  title: string; // Título do quiz
  quizLink: string; // Link do quiz
  quizId: string; // ID do quiz
  userId: string; // ID do usuário
  color: string; // Cor associada ao quiz
  pages: Page[]; // Array de páginas
}

export interface QuizCard {
  id: string;
  title: string;
  description: string;
  questions: {
    question: string;
    correctOption: string;
    options: string[];
  }[];
}
// Tipo para Buyer com todas as propriedades combinadas
export interface Subscriptions {
  buyer: {
    checkout_phone: string; // Exemplo: "99999999900"
    email: string; // Exemplo: "testeComprador271101postman15@example.com"
    name: string; // Exemplo: "Teste Comprador"
    createdAt: Date; // Exemplo: data e hora do timestamp convertido para Date
    id: string; // Exemplo: "sbtOgKqntgb42STdbRSP"
    address: {
      zipcode: string; // Exemplo: "30150101"
      country: string; // Exemplo: "Brasil"
      number: string; // Exemplo: "499"
      address: string; // Exemplo: "Avenida Assis Chateaubriand"
      city: string; // Exemplo: "Belo Horizonte"
      state: string; // Exemplo: "MG"
      neighborhood: string; // Exemplo: "Floresta"
      complement?: string; // Campo opcional, Exemplo: "a complement"
      country_iso: string; // Exemplo: "BR"
    };
  };
  product: {
    has_co_production: boolean; // Exemplo: false
    id: number; // Exemplo: 213344
    name: string; // Exemplo: "Produto test postback2"
    ucode: string; // Exemplo: "fb056612-bcc6-4217-9e6d-2a5d1110ac2f"
  };
  purchase: {
    approved_date: number; // Exemplo: timestamp em milissegundos
    order_date: number; // Exemplo: timestamp em milissegundos
    full_price: {
      value: number; // Exemplo: 134.0
      currency_value: string; // Exemplo: "BRL"
    };
    price: {
      value: number; // Exemplo: 150.6
      currency_value: string; // Exemplo: "BRL"
    };
    original_offer_price: {
      value: number; // Exemplo: 150.6
      currency_value: string; // Exemplo: "EUR"
    };
    offer: {
      code: string; // Exemplo: "n82b9jqz"
    };
    status: string; // Exemplo: "STARTED"
    transaction: string; // Exemplo: "HP02316330308193"
    payment: {
      billet_barcode?: string; // Exemplo: "03399.33335 33823.303087 19802.801027"
      billet_url?: string; // Exemplo: "https://billet-link.com"
      pix_code?: string; // Exemplo: "00020101021226780014br.gov.bcb.pix2556..."
      pix_qrcode?: string; // Exemplo: "https://sandbox-local-latam.ebanx.com/pix/checkout"
      pix_expiration_date?: number; // Exemplo: timestamp
      installments_number: number; // Exemplo: 2
      type: string; // Exemplo: "CREDIT_CARD"
    };
  };
  subscription: {
    plan: {
      id: number; // Exemplo: 711459
      name: string; // Exemplo: "Plano de teste"
    },
    subscriber: {
      code: string; // Exemplo: "I9OT62C3"
    },
    status: string; // Exemplo: "ACTIVE"
  };
  commissions?: Array<{
    value: number; // Exemplo: 0.65
    currency_value: string; // Exemplo: "BRL"
    source: string; // Exemplo: "MARKETPLACE"
    currency_conversion?: {
      converted_value: number; // Exemplo: 16.34
      converted_to_currency: string; // Exemplo: "BRL"
      conversion_rate: number; // Exemplo: 5.271103
    };
  }>;
}


