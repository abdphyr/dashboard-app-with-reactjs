import { CustomIcon } from './type';
import { CustomSvgSC } from './info';

const PlayerIcon: CustomIcon = ({ active }) => {
  return (
    <CustomSvgSC active={active} width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6 10.1785L3.5472 0.671863C2.89822 0.232521 2.24432 0 1.7008 0C0.65001 0 0 0.833353 0 2.22828V22.775C0 24.1683 0.649191 25 1.69752 25C2.24186 25 2.88532 24.7673 3.53574 24.3267L17.5951 14.8203C18.4993 14.2079 19 13.3838 19 12.4989C19.0002 11.6145 18.5052 10.7907 17.6 10.1785Z" fill="#DFE6F1" />
    </CustomSvgSC>
  );
};

export default PlayerIcon;