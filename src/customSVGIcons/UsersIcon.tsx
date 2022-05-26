import { CustomIcon } from './type';
import { CustomSvgSC } from './info';

const UsersIcon: CustomIcon = ({ active }) => {
  return (
    <CustomSvgSC active={active} width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5923 10.9366C20.3989 11.9356 18.8707 12.5365 17.2071 12.5365C16.6313 12.5365 16.0717 12.4644 15.5367 12.329C16.4934 13.8086 17.0509 15.5772 17.0509 17.4757V20.2642C17.0509 21.3072 16.6759 22.2623 16.0568 23H22.3064C23.7917 23 25 21.7728 25 20.2642V17.4757C25 14.7618 23.6479 12.3629 21.5923 10.9366Z" fill="#DFE6F1" />
      <path d="M7.79308 11.0487C10.7924 11.0487 13.2325 8.57059 13.2325 5.52447C13.2325 2.47816 10.7924 0 7.79308 0C4.79377 0 2.3537 2.47816 2.3537 5.52447C2.3537 8.57059 4.79377 11.0487 7.79308 11.0487Z" fill="#DFE6F1" />
      <path d="M17.2069 11.0487C20.2062 11.0487 22.6465 8.57059 22.6465 5.52447C22.6465 2.47816 20.2062 0 17.2069 0C15.756 0 14.4361 0.579973 13.4597 1.52354C14.2392 2.65908 14.6972 4.03831 14.6972 5.52447C14.6972 7.01043 14.2392 8.38966 13.4597 9.5252C14.4361 10.4688 15.756 11.0487 17.2069 11.0487Z" fill="#DFE6F1" />
      <path d="M12.1782 10.9366C10.985 11.9356 9.45683 12.5365 7.79305 12.5365C6.12927 12.5365 4.6011 11.9358 3.40767 10.9366C1.35212 12.3629 0 14.7618 0 17.4757V20.2642C0 21.7728 1.20831 23 2.69375 23H12.8922C14.3776 23 15.5859 21.7728 15.5859 20.2642V17.4757C15.5859 14.7618 14.234 12.3629 12.1782 10.9366Z" fill="#DFE6F1" />
    </CustomSvgSC>
  );
};

export default UsersIcon;