import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar, ToolBar, SideBar } from './layout';
import { useGetTheme } from './ThemeContextProvider';

const App: FC = () => {
  const navigate = useNavigate()
  const { isDark } = useGetTheme()
  useEffect(() => { navigate('/') }, [])
  return (
    <AppSC>
      <SideBar />
      <MainBarSC isDark={isDark}>
        <div>
          <NavBar />
          <ToolBar />
        </div>
      </MainBarSC>
    </AppSC>
  );
}

export default App;

const AppSC = styled('div')`
  display: flex;
  @media(min-width: 1400px){
    width: 1280px;
    margin: 0 auto;
    height: 880px;
    display: flex;
    padding: 20px;
  }
`
const MainBarSC = styled('div')<{isDark: boolean}>`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  background-color: ${p => p.isDark ? "#212427" : "#EFF3F9"};
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  & > div{
    padding: 40px 50px;
  }
` 