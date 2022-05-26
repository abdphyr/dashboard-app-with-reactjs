import { FC, Dispatch, SetStateAction } from 'react';
import { IconButton } from '@mui/material';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { CustomIcon } from '../../../customSVGIcons/type';

interface ISideBarProps {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
  tb: number;
  path: string;
  Icon: CustomIcon;
}


const SideBarMenuItem: FC<ISideBarProps> = (props) => {
  const { tab, setTab, tb } = props
  const { path, Icon } = props
  const navigate = useNavigate()
  return (
    <SideBarMenuItemSC>
      <IconButton onClick={() => {
        setTab(tb)
        navigate(path)
      }}>
        <Icon active={tab === tb}/>
      </IconButton>
    </SideBarMenuItemSC>
  );
};

export default SideBarMenuItem;

const SideBarMenuItemSC = styled('div')`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  div {
    width: 25px;
    height: 25px;
  }
  margin: 40px 0;
`