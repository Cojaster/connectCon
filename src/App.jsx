import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import connectconLogo from './assets/logoConnectCon.png'
import { IconMenu2, IconHome,
  IconCalendarEvent, IconFileCheck, IconReportAnalytics, IconChartCovariate, IconBell, IconSettingsCode, IconUser,
  IconQuestionMark


} from '@tabler/icons-react';
import './App.css'

function App() {
  return (
    <div className="app">

      <aside className="sidebar">

        <h2 className="logo">

          <img src={connectconLogo} alt="ConnectCon" />

        </h2>

        <nav>

          <a className="active nav-link"><IconHome stroke={2} /> Inicio</a>
          <a className="nav-link"><IconCalendarEvent stroke={2} /> Órdenes de Trabajo</a>
          <a className="nav-link"><IconFileCheck stroke={2} /> Actividades</a>
          <a className="nav-link"><IconReportAnalytics stroke={2} /> Reportes</a>
          <a className="nav-link"><IconChartCovariate stroke={2} /> Dashboards</a>
          <a className="nav-link"><IconBell stroke={2} /> Alertas</a>
          <a className="nav-link"><IconSettingsCode stroke={2} /> Integraciones</a>
          <a className="nav-link"><IconUser stroke={2} /> Usuarios</a>

        </nav>

      </aside>

      <div className="content">
        <header>

          <h2>Centro de Integración</h2>

          <div className="top-right">
            <IconBell stroke={2} />
            <IconQuestionMark stroke={2} />

            <div className="user">

              <div className="avatar">
                  DT
              </div>

              <div className="user-info">
                  <span className="name">Daniel Toloza</span>
                  <span className="role">Administrador</span>
              </div>

            </div>
          </div>

        </header>

        <main>



        <section className="cards">

          <div className="card">
            <p>Órdenes de Trabajo</p>
            <h1>128</h1>
          </div>

          <div className="card">
            <p>Completadas</p>
            <h1>96</h1>
          </div>

          <div className="card">
            <p>En Proceso</p>
            <h1>32</h1>
          </div>

          <div className="card">
            <p>Retrasos</p>
            <h1>7</h1>
          </div>

        </section>

        <section className="grid">

          <div className="panel">
            <h3>Órdenes por Estado</h3>
          </div>

          <div className="panel">
            <h3>Órdenes por Área</h3>
          </div>

          <div className="panel">
            <h3>Actividades Recientes</h3>
          </div>

          <div className="panel">
            <h3>Alertas Activas</h3>
          </div>

        </section>

        </main>
      </div>
        





    </div>
  )
}



export default App
