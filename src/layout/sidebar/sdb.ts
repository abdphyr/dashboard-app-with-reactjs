import { HomeIcon, TableIcon, UsersIcon, MessagesIcon } from '../../icons';
import { PlayerIcon, StatisticsIcon, SettingsIcon } from '../../icons';
import { CustomIcon } from '../../icons/type';

interface SDB {
  path: string;
  Icon: CustomIcon;
}

export const sdb: SDB[] = [
  {
    path: '/',
    Icon: HomeIcon
  },
  {
    path: '/table',
    Icon: TableIcon
  },
  {
    path: '/users',
    Icon: UsersIcon
  },
  {
    path: '/messages',
    Icon: MessagesIcon
  },
  {
    path: '/player',
    Icon: PlayerIcon
  },
  {
    path: '/statistics',
    Icon: StatisticsIcon
  },
  {
    path: '/settings',
    Icon: SettingsIcon
  },
]