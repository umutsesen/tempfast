import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import 'rc-slider/assets/index.css';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
/* import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; */
import { AuthProvider } from "./context/AuthProvider";
ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('sizeandme-widget')
);
