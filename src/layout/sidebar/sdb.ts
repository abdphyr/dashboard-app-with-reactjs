import { home, table, users, messages, player, statistics, settings } from '../../images';
import { homeActive, tableActive, usersActive, messagesActive } from '../../images'
import { playerActive, statisticsActive, settingsActive } from '../../images';

interface SDB {
  path: string;
  image: string;
  imageActive: string;
}

export const sdb: SDB[] = [
  {
    path: '/',
    image: home,
    imageActive: homeActive
  },
  {
    path: '/table',
    image: table,
    imageActive: tableActive
  },
  {
    path: '/users',
    image: users,
    imageActive: usersActive
  },
  {
    path: '/messages',
    image: messages,
    imageActive: messagesActive
  },
  {
    path: '/player',
    image: player,
    imageActive: playerActive
  },
  {
    path: '/statistics',
    image: statistics,
    imageActive: statisticsActive
  },
  {
    path: '/settings',
    image: settings,
    imageActive: settingsActive
  },
]