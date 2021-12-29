import { useAppSelector } from '../../../../utils/hooks';

const Sidebar = () => {   

  const menuOpened = useAppSelector((state) => state.menuOpener.menuOpened);

  return (
    <nav className={`sidebar sidebar-offcanvas ${menuOpened ? 'active' : "" }`} id="sidebar">
     <h3 className="crayons-subtitle-3">Popular Tags</h3>
    <div id="sidebar-nav-default-tags" className="overflow-y-auto" >
        <div className="sidebar-nav-element" id="default-sidebar-element-javascript">
          <a className="c-link c-link--block" href="/t/javascript">
            #javascript
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-webdev">
          <a className="c-link c-link--block" href="/t/webdev">
            #webdev
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-beginners">
          <a className="c-link c-link--block" href="/t/beginners">
            #beginners
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-programming">
          <a className="c-link c-link--block" href="/t/programming">
            #programming
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-react">
          <a className="c-link c-link--block" href="/t/react">
            #react
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-tutorial">
          <a className="c-link c-link--block" href="/t/tutorial">
            #tutorial
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-css">
          <a className="c-link c-link--block" href="/t/css">
            #css
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-python">
          <a className="c-link c-link--block" href="/t/python">
            #python
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-productivity">
          <a className="c-link c-link--block" href="/t/productivity">
            #productivity
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-html">
          <a className="c-link c-link--block" href="/t/html">
            #html
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-devops">
          <a className="c-link c-link--block" href="/t/devops">
            #devops
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-node">
          <a className="c-link c-link--block" href="/t/node">
            #node
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-career">
          <a className="c-link c-link--block" href="/t/career">
            #career
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-android">
          <a className="c-link c-link--block" href="/t/android">
            #android
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-codenewbie">
          <a className="c-link c-link--block" href="/t/codenewbie">
            #codenewbie
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-discuss">
          <a className="c-link c-link--block" href="/t/discuss">
            #discuss
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-typescript">
          <a className="c-link c-link--block" href="/t/typescript">
            #typescript
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-codepen">
          <a className="c-link c-link--block" href="/t/codepen">
            #codepen
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-java">
          <a className="c-link c-link--block" href="/t/java">
            #java
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-aws">
          <a className="c-link c-link--block" href="/t/aws">
            #aws
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-opensource">
          <a className="c-link c-link--block" href="/t/opensource">
            #opensource
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-php">
          <a className="c-link c-link--block" href="/t/php">
            #php
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-news">
          <a className="c-link c-link--block" href="/t/news">
            #news
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-github">
          <a className="c-link c-link--block" href="/t/github">
            #github
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-security">
          <a className="c-link c-link--block" href="/t/security">
            #security
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-testing">
          <a className="c-link c-link--block" href="/t/testing">
            #testing
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-showdev">
          <a className="c-link c-link--block" href="/t/showdev">
            #showdev
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-database">
          <a className="c-link c-link--block" href="/t/database">
            #database
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-angular">
          <a className="c-link c-link--block" href="/t/angular">
            #angular
          </a>
        </div>
        <div className="sidebar-nav-element" id="default-sidebar-element-algorithms">
          <a className="c-link c-link--block" href="/t/algorithms">
            #algorithms
          </a>
        </div>
    </div>
    </nav> 
  );
};

export default Sidebar;
