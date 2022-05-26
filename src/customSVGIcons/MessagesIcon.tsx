import { CustomIcon } from './type';
import { CustomSvgSC } from './info';

const MessagesIcon: CustomIcon = ({ active }) => {
  return (
    <CustomSvgSC active={active} width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5719 8.62673L25 13.8967V3.13418L16.5719 8.62673Z" fill="#DFE6F1" />
      <path d="M0 3.13418V13.8967L8.42813 8.62673L0 3.13418Z" fill="#DFE6F1" />
      <path d="M23.4375 0H1.5625C0.782812 0 0.164062 0.574909 0.046875 1.31518L12.5 9.43036L24.9531 1.31518C24.8359 0.574909 24.2172 0 23.4375 0Z" fill="#DFE6F1" />
      <path d="M15.1406 9.56018L12.9297 11.0005C12.7984 11.0855 12.65 11.1273 12.5 11.1273C12.35 11.1273 12.2016 11.0855 12.0703 11.0005L9.85938 9.55864L0.05 15.6956C0.170313 16.4297 0.785937 17 1.5625 17H23.4375C24.2141 17 24.8297 16.4297 24.95 15.6956L15.1406 9.56018Z" fill="#DFE6F1" />
    </CustomSvgSC>
  );
};

export default MessagesIcon;