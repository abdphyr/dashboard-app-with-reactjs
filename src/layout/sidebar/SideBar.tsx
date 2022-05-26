import { FC, useState } from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { logo, dark } from '../../images';
import SideBarMenuItem from './components/SideBarMenuItem';
import { sdb } from './sdb';
import { useGetTheme } from '../../ThemeContextProvider';

const Sidebar: FC = () => {
  const [tab, setTab] = useState(0)
  const { isDark, setIsDark } = useGetTheme()
  const navigate = useNavigate()
  return (
    <WrapperSC isDark={isDark}>
      <LogoSC>
        <div
          onClick={() => {
            navigate('/')
            setTab(0)
          }}
          style={{ margin: 0, padding: 0 }}
        >
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </LogoSC>
      <SideBarMenuSC>
        {sdb.map((sdbItem, index) => (
          <SideBarMenuItem
            tab={tab} tb={index} setTab={setTab}
            path={sdbItem.path} 
            Icon={sdbItem.Icon}
            key={index}
          />
        ))}
        <SideBarMenuLenSC tab={tab} />
      </SideBarMenuSC>
      <ThemeSC isDark={isDark} onClick={() => setIsDark(!isDark)}>
        <div>
          {
            isDark
              ?
              <div></div>
              :
              <img src={dark} alt="Image" />}
        </div>
      </ThemeSC>
    </WrapperSC>
  );
};

export default Sidebar;

const WrapperSC = styled('div') <{ isDark: boolean }>`
  width: 98px;
  box-sizing: border-box;
  height: 100%;
  transition: all 0.3s ease;
  background-color:${p => p.isDark ? "#282C31" : "#fff"};
  border: 1px solid ${p => p.isDark ? "#4D4D4D" : "#EBEBEB"};
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`

const LogoSC = styled('div')`
  div {
    width: 42px;
    height: 42px;
    cursor: pointer;
  }
`
const SideBarMenuSC = styled('div')`
  width: 100%;
  position: relative;
`
const SideBarMenuLenSC = styled('div') <{ tab: number }>`
  position: absolute;
  top: 40px;
  left: 0;
  width: 4px;
  height: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.3s ease;
  transform: translateY(${p => (p.tab * 80)}px);
  background-color: #7F7FD5;
`

const ThemeSC = styled('div') <{ isDark: boolean }>`
  width: 60px;
  height: 30px;
  transition: all 0.3s ease;
  background-color: ${p => p.isDark ? "#7F7FD5" : "#FDFDFF"};
  border: 0.5px solid ${p => p.isDark ? "#282C31" : "#EBEBEB"};
  border-radius: 50px;
  cursor: pointer;
  & > div {
    width: 20px;
    height: 20px;
    transform: translateX(${p => p.isDark ? "30px" : 0});
    transition: all 0.3s ease;
    margin: 5px;
    background-color: ${p => p.isDark ? "#fff" : "#7F7FD5"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center; 
    & > div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #7F7FD5;
    }
  }
`