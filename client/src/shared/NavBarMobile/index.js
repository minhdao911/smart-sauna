import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import { FiMonitor } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';

import logo from '../../assets/images/logo-small.png';
import * as ROUTES from '../../constants/routes';

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState(window.location.pathname);
  const history = useHistory();

  return (
    <>
    <div style={{textAlign: "center"}}>
        <img src={logo} alt="logo" className="menu-logo"/>
    </div>
    <div
      style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 100 }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor={'#6A81DD'}
        barTintColor="white"
      >
        <TabBar.Item
          title="Monitoring"
          key="Monitoring"
          icon={
            <FiMonitor
              style={{
                width: 24,
                height: 24,
                color: '#949494'
              }}
            />
          }
          selectedIcon={
            <FiMonitor
              style={{
                width: 24,
                height: 24,
                color: `${'#6A81DD'}`
              }}
            />
          }
          selected={selectedTab === ROUTES.MONITORING}
          onPress={() => {
            setSelectedTab(ROUTES.MONITORING);
            history.push(ROUTES.MONITORING);
          }}
        />
        <TabBar.Item
          icon={
            <FaRegCalendarCheck
              style={{
                fontSize: 24
              }}
            />
          }
          selectedIcon={
            <FaRegCalendarCheck
              style={{
                fontSize: 24,
                color: `${'#6A81DD'}`
              }}
            />
          }
          title="Reservation"
          key="Reservation"
          selected={selectedTab === ROUTES.RESERVATION}
          onPress={() => {
            setSelectedTab(ROUTES.RESERVATION);
            history.push(ROUTES.RESERVATION);
          }}
        />
        <TabBar.Item
          icon={
            <AiOutlineSetting
              style={{
                fontSize: 24
              }}
            />
          }
          selectedIcon={
            <AiOutlineSetting
              style={{
                fontSize: 24,
                color: `${'#6A81DD'}`
              }}
            />
          }
          title="Management"
          key="Management"
          tintColor={'#6A81DD'}
          selected={selectedTab === ROUTES.MANAGEMENT}
          onPress={() => {
            setSelectedTab(ROUTES.MANAGEMENT);
            history.push(ROUTES.MANAGEMENT);
          }}
        />
      </TabBar>
    </div>
    </>
  );
};

export default NavBar;