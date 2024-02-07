import React from 'react';
import { observer } from 'mobx-react';
import Login from './Login';
import AdminHome from './AdminHome';
import dataStore from '../../store/store.js';

const Admin = observer(() => {

  return (

    <div>

      {dataStore.isLogin ? <AdminHome /> : <Login />}

    </div>

  );
});

export default Admin;
