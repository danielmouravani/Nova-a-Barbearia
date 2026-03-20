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
    title: 'NOVAÇA WEEK ( cabelo+ barba )',
    price: '99,99',
    icon: Flame,
    features: [
      { text: 'Corte ilimitado', included: true },
      { text: 'Barba ilimitada', included: true },
      { text: 'Desconto em produtos', included: true },
      { text: 'Descontos em serviços extras', included: true },
      { text: 'Agendamento ilimitado de seg a sab', included: false },
      { text: 'Agendamento de seg a qua', included: true }
    ],
    isPopular: false,
    buttonText: 'Comprar',
    buttonVariant: 'brown' as const,
    link: '#'
  },
  {
    id: 2,
    title: 'NOVAÇA CLUB KIDS',
    price: '84,90',
    icon: User,
    features: [
      { text: 'Corte ilimitado', included: true },
      { text: 'Barba ilimitada', included: false },
      { text: 'Desconto em produtos', included: true },
      { text: 'Descontos em serviços extras', included: true },
      { text: 'Agendamento ilimitado de seg a sab', included: true },
      { text: 'Agendamento de seg a qua', included: true }
    ],
    isPopular: false,
    buttonText: 'Comprar',
    buttonVariant: 'brown' as const,
    link: '#'
  },
  {
    id: 3,
    title: 'NOVAÇA WEEK ( corte )',
    price: '54,90',
    icon: Scissors,
    features: [
      { text: 'Corte ilimitado', included: true },
      { text: 'Barba ilimitada', included: false },
      { text: 'Desconto em produtos', included: true },
      { text: 'Descontos em serviços extras', included: true },
      { text: 'Agendamento ilimitado de seg a sab', included: false },
      { text: 'Agendamento de seg a qua', included: true }
    ],
    isPopular: false,
    buttonText: 'Comprar',
    buttonVariant: 'brown' as const,
    link: '#'
  },
  {
    id: 4,
    title: 'NOVAÇA CLUB- Cabelo+ Barba',
    price: '134,90',
    icon: Flame,
    features: [
      { text: 'Corte ilimitado', included: true },
      { text: 'Barba ilimitada', included: true },
      { text: 'Desconto em produtos', included: true },
      { text: 'Descontos em serviços extras', included: true },
      { text: 'Agendamento ilimitado de seg a sab', included: true },
      { text: 'Agendamento de seg a qua', included: true }
    ],
    isPopular: true,
    buttonText: 'Comprar',
    buttonVariant: 'cream' as const,
    link: 'https://celcash.celcoin.com.br/landingpage6107477/planos/assinar/novaca-club-cabelo-barba/1'
  },
  {
    id: 5,
    title: 'NOVAÇA CLUB- Barba',
    price: '79,90',
    icon: User,
    features: [
      { text: 'Corte ilimitado', included: false },
      { text: 'Barba ilimitada', included: true },
      { text: 'Desconto em produtos', included: true },
      { text: 'Descontos em serviços extras', included: true },
      { text: 'Agendamento ilimitado de seg a sab', included: true },
      { text: 'Agendamento de seg a qua', included: true }
    ],
    isPopular: false,
    buttonText: 'Comprar',
    buttonVariant: 'brown' as const,
    link: 'https://celcash.celcoin.com.br/landingpage6107477/planos/assinar/novaca-club-barba/3'
  },
  {
    id: 6,
    title: 'NOVAÇA CLUB- Corte',
    price: '74,90',
    icon: Scissors,
    features: [
      { text: 'Corte ilimitado', included: true },
      { text: 'Barba ilimitada', included: false },
      { text: 'Desconto em produtos', included: true },
      { text: 'Descontos em serviços extras', included: true },
      { text: 'Agendamento ilimitado de seg a sab', included: true },
      { text: 'Agendamento de seg a qua', included: true }
    ],
    isPopular: false,
    buttonText: 'Comprar',
    buttonVariant: 'brown' as const,
    link: 'https://celcash.celcoin.com.br/landingpage6107477/planos/assinar/novaca-club-corte/2'
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
    name: 'Pedro Moreira',
    instagram: '@rbs_stylebarber',
    image: 'https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2026-03-20-at-12.35.31-3K6pm2YiNEcJeC94.jpeg'
  }
];