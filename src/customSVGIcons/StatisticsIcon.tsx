import { CustomIcon } from './type';
import { CustomSvgSC } from './info';

const StatisticsIcon: CustomIcon = ({ active }) => {
  return (
    <CustomSvgSC active={active} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.2676 23.5352H0.732422C0.327588 23.5352 0 23.8627 0 24.2676C0 24.6724 0.327588 25 0.732422 25H24.2676C24.6724 25 25 24.6724 25 24.2676C25 23.8627 24.6724 23.5352 24.2676 23.5352Z" fill="#DFE6F1" />
      <path d="M6.64062 11.7676H2.19727C1.79243 11.7676 1.46484 12.0952 1.46484 12.5V16.1621H7.37305V12.5C7.37305 12.0952 7.04546 11.7676 6.64062 11.7676Z" fill="#DFE6F1" />
      <path d="M7.37305 17.627H1.46484V22.0703H7.37305V17.627Z" fill="#DFE6F1" />
      <path d="M14.6973 5.9082H10.3027C9.8979 5.9082 9.57031 6.23579 9.57031 6.64062V16.1621H15.4297V6.64062C15.4297 6.23579 15.1021 5.9082 14.6973 5.9082Z" fill="#DFE6F1" />
      <path d="M15.4297 17.627H9.57031V22.0703H15.4297V17.627Z" fill="#DFE6F1" />
      <path d="M22.8027 0H18.3594C17.9545 0 17.627 0.327588 17.627 0.732422V7.37305H23.5352V0.732422C23.5352 0.327588 23.2076 0 22.8027 0Z" fill="#DFE6F1" />
      <path d="M23.5352 8.83789H17.627V22.0703H23.5352V8.83789Z" fill="#DFE6F1" />
    </CustomSvgSC>
  );
};

export default StatisticsIcon;