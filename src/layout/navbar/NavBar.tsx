import { FC, useState } from 'react';
import styled from 'styled-components';
import { search, profImage } from '../../images';
import { useGetTheme } from '../../ThemeContextProvider';
import { IconButton } from '@mui/material';
import { ProfIcon } from '../../customSVGIcons';
import { NotificationIcon } from '../../customSVGIcons';

const NavBar: FC = () => {
  const [text, setText] = useState('')
  const { isDark } = useGetTheme()
  return (
    <NavBarSC>
      <LeftNavSC>
        <TitleSC isDark={isDark}>
          Statistics
        </TitleSC>
        <TextFieldSC isDark={isDark}>
          <img src={search} alt="Image" />
          <InputSC
            type='text'
            value={text}
            placeholder='Search'
            isDark={isDark}
            onChange={(e) => setText(e.target.value)} />
        </TextFieldSC>
        <NotificationSC>
          <IconButton>
            <NotificationIcon isDark={isDark} />
          </IconButton>
        </NotificationSC>
      </LeftNavSC>
      <RightNavSC>
        <ProfileTitleSC isDark={isDark}>
          Anya
        </ProfileTitleSC>
        <ProfInfoSC>
          <ProfileAvatarSC>
            <img src={profImage} alt="Image" />
          </ProfileAvatarSC>
          <ProfIconSC>
            <ProfIcon isDark={isDark} />
          </ProfIconSC>
        </ProfInfoSC>
      </RightNavSC>
    </NavBarSC>
  );
};

export default NavBar;

const NavBarSC = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LeftNavSC = styled('div')`
  display: flex;
  align-items: center;
`
const RightNavSC = styled('div')`
  display: flex;
  align-items: center;
`
const TitleSC = styled('div') <{ isDark: boolean }>`
  color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  margin: 0;
  transition: all 0.3s ease;
`
const TextFieldSC = styled('div') <{ isDark: boolean }>`
  width: 153px;
  height: 32px;
  background: ${p => p.isDark ? "#282C31" : "#FDFDFF"};
  border: 1px solid ${p => p.isDark ? "#4D4D4D" : "#EBEBEB"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-left: 45px;
  margin-right: 24px;
  transition: all 0.3s ease;
  img {
    margin-left: 18px;
    margin-right: 11px;
  }
`
const InputSC = styled('input') <{ isDark: boolean }>`
  border: none;
  outline: none;
  width: 100%;
  background: ${p => p.isDark ? "#282C31" : "#FDFDFF"};
  color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
  transition: all 0.3s ease;
  padding: 6px 0;
  &:focus{
    border: none;
    outline: none;
  }
  &::placeholder{
    opacity: 0.8;
    font-family: 'Raleway', sans-serif;
    color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
    transition: all 0.3s ease;
  }
`
const NotificationSC = styled('div')`
`
const ProfileTitleSC = styled('div') <{ isDark: boolean }>`
  color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-right: 11px;
  transition: all 0.3s ease;
`
const ProfInfoSC = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
`
const ProfileAvatarSC = styled('div')`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 9px;
`
const ProfIconSC = styled('div')`
  width: 8;
  height: 8;
  display: 'flex';
  align-items: 'center';
`