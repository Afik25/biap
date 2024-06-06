import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Modal from "../components/modal/Modal";
import Details from "../components/details/Details";

const Analytics = () => {
  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);
  const [data, setData] = useState({
    demarterialisation: {
      series: [74],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
          },
        },
        labels: ["Prog. Global"],
      },
    },
    deploiement: {
      series: [53],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "100px",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
          },
        },
        labels: ["Prog. Global"],
      },
    },
  });
  return (
    <>
      <div className="analytics">
        <div className="container">
          <div className="head">
            <h1 className="title t-1">Suivi de l'Évolution de la Reforme</h1>
          </div>
          <div className="body">
            <div className="section-1">
              <div className="left">
                <div className="header">
                  <h3 className="title t-2">
                    Démartérialisation documents et procédures
                  </h3>
                </div>
                <div className="content">
                  <div className="left-analytics">
                    <div className="row"></div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="col-50 text-align-right">Planning</th>
                          <th className="col-20  text-align-right">
                            Documents
                          </th>
                          <th className="col-20  text-align-right">
                            Procédures
                          </th>
                          <th className="col-10  text-align-right">Global</th>
                        </tr>
                      </thead>
                      <div className="row"></div>
                      <tbody>
                        <tr>
                          <th className="col-50  text-align-right">
                            Identifiés
                          </th>
                          <td className="col-20  text-align-right">80</td>
                          <td className="col-20  text-align-right">20</td>
                          <td className="col-10  text-align-right">100</td>
                        </tr>
                        <tr>
                          <th className="col-50  text-align-right">
                            Mise en Production
                          </th>
                          <td className="col-20  text-align-right">54</td>
                          <td className="col-20  text-align-right">20</td>
                          <td className="col-10  text-align-right">74</td>
                        </tr>
                        <tr>
                          <th className="col-50  text-align-right">
                            Prévision 2024
                          </th>
                          <td className="col-20  text-align-right">1</td>
                          <td className="col-20  text-align-right">1</td>
                          <td className="col-10  text-align-right"></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="progress">
                      <div className="row">
                        <div className="progress-item">
                          <h3 className="title t-2">Avancement Document</h3>
                        </div>
                        <div className="progress-item">
                          <div
                            className="progress-bar"
                            style={{ width: "68%" }}
                          >
                            <span>68%</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="progress-item">
                          <h3 className="title t-2">Avancement Procédure</h3>
                        </div>
                        <div className="progress-item">
                          <div
                            className="progress-bar"
                            style={{ width: "100%" }}
                          >
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-analytics">
                    <ReactApexChart
                      options={data?.demarterialisation?.options}
                      series={data?.demarterialisation?.series}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="header">
                  <h3 className="title t-2">Déploiement SEGUCE</h3>
                </div>
                <div className="content">
                  <div className="left-analytics">
                    <div className="row"></div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="col-40 text-align-right">Planning</th>
                          <th className="col-30  text-align-right">
                            Centre local
                          </th>
                          <th className="col-20  text-align-right">Bureau</th>
                          <th className="col-10  text-align-right">Global</th>
                        </tr>
                      </thead>
                      <div className="row"></div>
                      <tbody>
                        <tr>
                          <th className="col-40  text-align-right">
                            Identifiés
                          </th>
                          <td className="col-30  text-align-right">9</td>
                          <td className="col-20  text-align-right">21</td>
                          <td className="col-10  text-align-right">30</td>
                        </tr>
                        <tr>
                          <th className="col-40  text-align-right">
                            Implantés
                          </th>
                          <td className="col-30  text-align-right">7</td>
                          <td className="col-20  text-align-right">9</td>
                          <td className="col-10  text-align-right">16</td>
                        </tr>
                        <tr>
                          <th className="col-40  text-align-right">
                            Prévision
                          </th>
                          <td className="col-30  text-align-right">1</td>
                          <td className="col-20  text-align-right">1</td>
                          <td className="col-10  text-align-right">2</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="progress">
                      <div className="row">
                        <div className="progress-item">
                          <h3 className="title t-2">Avancement centres</h3>
                        </div>
                        <div className="progress-item">
                          <div
                            className="progress-bar"
                            style={{ width: "78%" }}
                          >
                            <span>78%</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="progress-item">
                          <h3 className="title t-2">Avancement bureaux</h3>
                        </div>
                        <div className="progress-item">
                          <div
                            className="progress-bar"
                            style={{ width: "43%" }}
                          >
                            <span>43%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-analytics">
                    <ReactApexChart
                      options={data?.deploiement?.options}
                      series={data?.deploiement?.series}
                      type="radialBar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-2">
              <div className="header">
                <h3 className="title t-2">
                  Vue Globale sur la Démartérialisation
                </h3>
              </div>
              <div className="body">
                <div className="item" onClick={() => setOpenModal(true)}>
                  <span className="title t-1">
                    <span className="counter">100</span>
                  </span>
                  <p className="title t-3">Totale Documents/Procédures</p>
                </div>
                <div className="item" onClick={() => setOpenModal(true)}>
                  <h3 className="title t-1">
                    <span className="counter">100</span>/
                    <span className="percent">100%</span>
                  </h3>
                  <p className="title t-3">Démartérialisation Complète</p>
                </div>
                <div className="item" onClick={() => setOpenModal(true)}>
                  <h3 className="title t-1">
                    <span className="counter">100</span>/
                    <span className="percent">100%</span>
                  </h3>
                  <p className="title t-3">Démartérialisation Partielle.</p>
                </div>
                <div className="item" onClick={() => setOpenModal(true)}>
                  <h3 className="title t-1">
                    <span className="counter">100</span>/
                    <span className="percent">100%</span>
                  </h3>
                  <p className="title t-3">Démartérialisation En Attente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          visibility={true}
          open={close}
          height="auto"
          maxHeight={"90%"}
          width="80%"
          title="Détails sur l'analyse relative à l'Évolution de la Reforme"
          content={<Details element={'analytic'}/>}
        />
      )}
    </>
  );
};

export default Analytics;
