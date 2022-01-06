import { useGetTagsQuery } from '../../../../services/EmotionsApi';
import { useAppSelector } from '../../../../utils/hooks';
import { isValidArray } from "../../../../utils/Helper";
import Loading from '../../../loading/Loading';
import styles from "./Sidebar.module.scss";
import { signOut, isLogged } from '../../../../utils/Auth'
import { useState } from 'react';

const Sidebar = () => {

  const menuOpened = useAppSelector((state) => state.menuOpener.menuOpened);

  const { data, isLoading } = useGetTagsQuery({});

  const _data = data as Array<any>;
  
  const [logged] = useState(isLogged());

  let _html = isValidArray(_data) ? _data.map(
    (emotion) => {
      return <div className="sidebar-nav-element" id="default-sidebar-element-javascript" key={emotion}>
        <a className="c-link c-link--block" href={`/t/${emotion.replace('#', '')}`}>
          {emotion}
        </a>
      </div>
    }
  ) : <></>;

  return (
    <nav className={`sidebar sidebar-offcanvas ${menuOpened ? 'active' : ""}`} id="sidebar">
      {logged ?
        <>
          <h3 className="crayons-subtitle-3">Welcome, X!</h3>
          <div className="sidebar-nav-element" id="default-sidebar-element-javascript" >
            <a className="c-link c-link--block" href='/emotion'>
              Create new emotion
            </a>
          </div>
          <div className="sidebar-nav-element" id="default-sidebar-element-javascript" >
            <a className="c-link c-link--block" href='/emotion/list'>
              My Emotions
            </a>
          </div>
          <div className="sidebar-nav-element" id="default-sidebar-element-javascript" >
            <a className="c-link c-link--block" href="#" onClick={signOut}>
              Log out
            </a>
          </div>
        </> : <></>}

      <h3 className="crayons-subtitle-3 populartag_title">Popular Tags</h3>
      <div id="sidebar-nav-default-tags" className="overflow-y-auto" >
        {isLoading ? <Loading
          fullScreen={false}
          quantityDot={3}
          className={styles.loading}
        /> : _html}
      </div>
    </nav>
  );
};

export default Sidebar;
