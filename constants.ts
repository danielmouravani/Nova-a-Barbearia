import { Scissors, User, Flame } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Club Novaça', href: '#club' },
  { label: 'Planos', href: '#planos' },
  { label: 'Barbeiros', href: '#barbeiros' },
  { label: 'Localização', href: '#localizacao' },
];

// SUBSTITUA ESTE LINK PELA URL DA SUA LOGO PNG (Fundo Transparente)
export const COMPANY_LOGO = 'https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/image-removebg-preview-3-fr0e8Xm7FS5KZGbw.png';

export const PLANS = [
  {
    id: 1,
    title: 'Novaça Club Corte',
    price: '74,90',
    icon: Scissors, 
    features: [
      'Agendamento de segunda a sábado',
      'Corte de cabelo quando quiser',
      'Pezinho quando quiser',
      'Desconto em produtos e serviços'
    ],
    isPopular: false,
    buttonText: 'Assine Agora',
    buttonVariant: 'brown' as const,
    link: 'https://celcash.celcoin.com.br/landingpage6107477/planos/assinar/novaca-club-corte/2'
  },
  {
    id: 2,
    title: 'Novaça Club Barba',
    price: '79,90',
    icon: User, 
    features: [
      'Agendamento de segunda a sábado',
      'Faça a barba quando quiser',
      'Desconto em produtos e serviços extras'
    ],
    isPopular: false,
    buttonText: 'Assine Agora',
    buttonVariant: 'brown' as const,
    link: 'https://celcash.celcoin.com.br/landingpage6107477/planos/assinar/novaca-club-barba/3'
  },
  {
    id: 3,
    title: 'Novaça Club Completo',
    price: '134,90',
    icon: Flame,
    features: [
      'Agendamento de segunda a sábado',
      'Corte de cabelo quando quiser',
      'Faça a barba quando quiser',
      'Pezinho quando quiser',
      'Descontos em produtos e serviços extras'
    ],
    isPopular: true,
    buttonText: 'Assine Agora',
    buttonVariant: 'cream' as const,
    link: 'https://celcash.celcoin.com.br/landingpage6107477/planos/assinar/novaca-club-cabelo-barba/1'
  }
];

export const BARBERS = [
  {
    id: 1,
    name: 'Weslley Gomes',
    instagram: '@weslleygomessss',
    image: 'https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-10-30-at-13.51.53-QfceoFboD1K2fzlu.jpeg'
  },
  {
    id: 2,
    name: 'Emanuel Alves',
    instagram: '@emanuel_barber01',
    image: 'https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-10-30-at-13.51.53-2-BEkwNslRFa0ripls.jpeg'
  },
  {
    id: 3,
    name: 'Samuel Borges',
    instagram: '@samuel.barbeiro',
    image: 'https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-10-30-at-13.51.53-1-MRy7NGZ88zpgMM9T.jpeg'
  },
  {
    id: 4,
    name: 'Robson Oliveira',
    instagram: '@rbs_stylebarber',
    image: 'https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2025-11-18-at-14.58.12-q1mejF8OTrcJXJRb.jpeg'
  }
];