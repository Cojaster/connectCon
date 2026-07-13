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

<main className="dashboard">

    <div className="cards">

        <div className="card">
            <span className="card-title">Órdenes de Trabajo</span>
            <h2>128</h2>
            <small>+15% este mes</small>
        </div>

        <div className="card">
            <span className="card-title">Actividades Completadas</span>
            <h2>96</h2>
            <small>75% completado</small>
        </div>

        <div className="card">
            <span className="card-title">En Proceso</span>
            <h2>32</h2>
            <small>5 críticas</small>
        </div>

        <div className="card">
            <span className="card-title">Retrasos</span>
            <h2>7</h2>
            <small>Requieren atención</small>
        </div>

    </div>



    <div className="row">

        <div className="panel">

            <div className="panel-header">
                <h3>Órdenes por Estado</h3>
            </div>

            <div className="chart-placeholder donut">

                <div className="donut-circle"></div>

            </div>

        </div>



        <div className="panel">

            <div className="panel-header">
                <h3>Órdenes por Área</h3>
            </div>

            <div className="chart-placeholder bars">

                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
                <div className="bar b5"></div>

            </div>

        </div>

    </div>



    <div className="bottom-grid">

        <div className="panel">

            <div className="panel-header">
                <h3>Actividades Recientes</h3>
            </div>

            <table>

                <thead>

                <tr>

                    <th>Actividad</th>
                    <th>Orden</th>
                    <th>Estado</th>

                </tr>

                </thead>

                <tbody>

                <tr>

                    <td>Inspección</td>
                    <td>OT-1001</td>
                    <td>✔</td>

                </tr>

                <tr>

                    <td>Mantenimiento</td>
                    <td>OT-1002</td>
                    <td>⏳</td>

                </tr>

                <tr>

                    <td>Revisión</td>
                    <td>OT-1003</td>
                    <td>✔</td>

                </tr>

                </tbody>

            </table>

        </div>



        <div className="panel alerts">

            <div className="panel-header">
                <h3>Alertas</h3>
            </div>

            <div className="alert warning">
                Orden OT-1020 retrasada
            </div>

            <div className="alert danger">
                Stock crítico de filtros
            </div>

            <div className="alert success">
                SAP sincronizado correctamente
            </div>

        </div>

    </div>

</main>
      </div>
        





    </div>
  )
}



export default App
