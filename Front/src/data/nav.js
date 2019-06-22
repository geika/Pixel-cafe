import Home from 'src/components/Home';
import Menu from 'src/containers/Menu';
import Games from 'src/containers/Games';
import Event from 'src/components/Event';
import LoginPage from 'src/components/LoginPage';

export default [
  {
    route: '/',
    label: 'Le Pixel café',
    page: Home,
    subtitle: 'De délicieux cafés saupoudrés d’une pincée de rétro-gaming ou bien est-ce l’inverse ?',
    title: 'Le Pixel café',
  },
  {
    route: '/menu',
    label: 'Notre Menu',
    page: Menu,
    subtitle: 'Venez savourer nos cafés préparés par notre barista, tout en vous amusant devant nos jeux rétro',
    title: 'Notre Menu',
  },
  {
    route: '/nos-jeux',
    label: 'Nos Jeux',
    page: Games,
    subtitle: 'Venez voir nos consoles de jeux et notre sélection retro',
    title: 'Nos Jeux',
  },
  {
    route: '/evenement',
    label: 'Événements',
    page: Event,
    subtitle: 'Les futurs évènements que le Pixel Café et ses clients vous proposent',
    title: 'Événements',
  },
  {
    route: '/login',
    label: '',
    page: LoginPage,
    subtitle: 'Accedez à votre compte',
    title: 'Login',
  },
];
