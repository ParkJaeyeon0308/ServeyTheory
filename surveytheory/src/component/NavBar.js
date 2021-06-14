import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';
import Login, {user_id} from "../pages/Login/login";

// 로그인 하기 전
function NavBar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const history = useHistory();

  const logout = () => {
    console.log('logout 실행됨')
    alert('정상적으로 로그아웃 되었습니다.')
    user_id.user_id = 'novalue'
}

  const selectCollect = () => {
    console.log('collect에서 user_id: ' + user_id.user_id);
    const textbox = {
        inText: user_id.user_id
    };

    if(user_id.user_id == 'novalue'){
        alert('먼저 로그인 하세요.')   
        history.push('/login')      
    } else {
        fetch("http://localhost:3001/collect", { // server.js의 collect 메소드 사용
        method: "post", //통신방법
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(textbox) // 위에 정의한 textbox
      })
        .then((res) => res.json())
        .then((json) => {
          history.push('/collect')
          console.log('survey_title: ' + json.survey_title)
          console.log('result_url:' + json.result_url)
          console.log('result_date: ' + json.result_date)
        });
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='navbar-img'>
          {/* <Link to='#' className='GoHome'> */}
            <img className="logo" src="/images/logo.png" alt="logo" />
          {/* </Link> */}
          </div>
        </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                        <li className= 'nav-text'>
                            <Link to= '/'>
                                <span>홈</span>
                            </Link>
                        </li>     
                        <li className= 'nav-text'>
                            <Link to= '/login'>
                                <span>로그인 / 회원가입</span>
                            </Link>
                        </li>          
                        <li className= 'nav-text' onClick={selectCollect}>
                            <Link to='#'>
                                <span>내 결과 모아보기</span>
                            </Link>
                        </li>     
                        <li className= 'fixnav-text'>
                            <Link to= '/'>
                                <span>계정설정</span>
                            </Link>
                        </li>     
                        <li className= 'mini-nav-text'>
                            <Link to= '/pass_change'>
                                <span>암호변경</span>
                            </Link>
                        </li>     
                        <li className= 'mini-nav-text'>
                            <Link to= '/quit_account'>
                                <span>회원탈톼</span>
                            </Link>
                        </li>     
                        <li className= 'nav-text'>
                            <Link to= '/developer_intro'>
                                <span>Developer Intro</span>
                            </Link>
                        </li> 

                        <li className = 'nav-text'>
                            <Link to='/' onClick={logout}>
                                <span>          </span>
                            </Link>    
                        </li>             
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar