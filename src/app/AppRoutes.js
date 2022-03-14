import React, { Component,Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './launchpad/redux/store';

import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const MultisenderERC20NFT = lazy(() => import('./launchpad/MultisenderERC20NFT'));
const LaunchpadListings = lazy(() => import('./launchpad/LaunchpadListings'));
const PresaleLive = lazy(() => import('./launchpad/PresaleLive'));
const PresaleComplete = lazy(() => import('./launchpad/PresaleComplete'));
const ManagePresale = lazy(() => import('./launchpad/ManagePresale'));
const MultisenderERC20 = lazy(() => import('./launchpad/MultisenderERC20'));

const Vip = lazy(() => import('./launchpad/Vip'))
const Verification = lazy(() => import('./launchpad/Verification'))
const AboutUs = lazy(() => import('./launchpad/AboutUs'))
const Faq = lazy(() => import('./launchpad/Faq'))

class AppRoutes extends Component {
  render () {
    return (
      // <Provider store={store}>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path="/dashboard" component={ Dashboard } />

            <Route path="/basic-ui/buttons" component={ Buttons } />
            <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
            <Route path="/basic-ui/typography" component={ Typography } />

            <Route path="/form-Elements/basic-elements" component={ BasicElements } />

            <Route path="/tables/basic-table" component={ BasicTable } />

            <Route path="/icons/mdi" component={ Mdi } />

            <Route path="/charts/chart-js" component={ ChartJs } />


            <Route path="/user-pages/login-1" component={ Login } />
            <Route path="/user-pages/register-1" component={ Register1 } />

            <Route path="/error-pages/error-404" component={ Error404 } />
            <Route path="/error-pages/error-500" component={ Error500 } />

            <Route path="/multisender" component={ MultisenderERC20NFT } />
            <Route path="/vip" component={ Vip } />
            <Route path="/verification" component={ Verification } />
            <Route path="/aboutus" component={ AboutUs } />
            <Route path="/faq" component={ Faq } />

            <Route path="/launchpad/launchpad-listings" component={ LaunchpadListings } />
            {/* <Route path="/launchpad/launchpad-listings" component={ MultisenderERC20NFT } /> */}
            <Route path="/launchpad/presale-live/:id" component={ PresaleLive } />
            <Route path="/launchpad/presale-complete" component={ PresaleComplete } />
            {/* <Route path="/launchpad/manage-presale" component={ ManagePresale } /> */}
            <Redirect to="/dashboard" />
          </Switch>
        </Suspense>
      // </Provider>
    );
  }
}

export default AppRoutes;