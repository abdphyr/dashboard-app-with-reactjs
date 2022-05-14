import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import audioSrc from '../music/S_HW_Touch.mp3'

const colors = {
  "qizil": "red",
  "sariq": "yellow",
  "oq": "white",
  "qora": "black",
  "yaxshil": "green",
  "ko'k": "blue"
}

type Color = keyof typeof colors

const Navbar: FC = () => {
  const [audio] = useState(new Audio(audioSrc))
  const [color, setColor] = useState<Color | null>()
  const [tab, setTab] = useState(0)

  const fetchColor = async () => {
    const response = await fetch("https://54.uz/rang.php")
    const data = await response.json() as { status: Color }
    return data
  }

  useEffect(() => {
    fetchColor()
      .then(res => {
        setColor(res.status)
      })
      .catch(err => {
        alert(err)
      })
    if (color) {
      document.body.style.backgroundColor = colors[color]
    }
  }, [tab, color])

  return (
    <div className='navbar'>
      <Link to='/one'
        onClick={() => {
          setTab(0)
          audio.play()
        }}
        className={(tab === 0 && "active") + (" navbarItem")}>
        One
      </Link>
      <Link to='/two'
        onClick={() => {
          setTab(1)
          audio.play()
        }}
        className={(tab === 1 && "active") + (" navbarItem")}>
        Two
      </Link>
      <Link to='/three'
        onClick={() => {
          setTab(2)
          audio.play()
        }}
        className={(tab === 2 && "active") + (" navbarItem")}>
        Three
      </Link>
    </div>
  );
};

export default Navbar;
