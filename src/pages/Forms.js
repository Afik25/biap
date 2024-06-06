import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import Modal from "../components/modal/Modal";
import Details from "../components/details/Details";

const Forms = () => {
  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);
  const [data, setData] = useState({
    general: {
      series: [
        {
          name: "Kinshasa",
          data: [0, 24, 46, 62, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Lubumbashi",
          data: [0, 38, 20, 16, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Boma + Matadi",
          data: [0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Goma",
          data: [0, 0, 4, 25, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Kisangani",
          data: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          //   type: "datetime",
          categories: [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
          ],
        },
        // tooltip: {
        //   x: {
        //     format: "dd/MM/yy HH:mm",
        //   },
        // },
      },
    },
    general_percent: {
      series: [132, 74, 5, 29, 1],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false,
                total: {
                  showAlways: true,
                  show: true,
                },
              },
            },
          },
        },
        legend: {
          show: true,
          position: "right",
          offsetY: 0,
          height: 230,
        },
        labels: [
          "Kinshasa",
          "Lubumbashi",
          "Boma + Matadi",
          "Goma",
          "Kisangani",
        ],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8,
          },
        },
      },
    },
    formation_module: {
      series: [2, 5, 3, 45, 2, 5],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false,
                total: {
                  showAlways: true,
                  show: true,
                },
              },
            },
          },
        },
        legend: {
          show: false,
          position: "right",
          offsetY: 0,
          height: 230,
        },
        labels: [
          "Logistique aérienne import",
          "Prédédouanement DGRAD",
          "Prédédouanement import - Banques commerciales",
          "Prédédouanement import - Importateurs",
          "Prédédouanement import - Transitaires",
          "Présentation générale du GUICE",
        ],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8,
          },
        },
      },
    },
    formation: {
      series: [{ name: "Total", data: [2, 5, 3, 45, 2, 5] }],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Logistique aérienne import",
            "Prédédouanement DGRAD",
            "Prédédouanement import - Banques commerciales",
            "Prédédouanement import - Importateurs",
            "Prédédouanement import - Transitaires",
            "Présentation générale du GUICE",
          ],
        },
      },
    },
  });
  return (
    <>
      <div className="forms">
        <div className="container">
          <div className="head">
            <h1 className="title t-1">
              Évaluation Volumétrique de la Formation
            </h1>
          </div>
          <div className="body">
            <div className="section-1">
              <div className="header">
                <h1 className="title t-2">
                  Volumétries mensuelles de personnes formées par bureau
                </h1>
              </div>
              <div className="filter">
                <div className="item">
                  <select>
                    <option value={""}>All</option>
                    <option value={"2024"}>2024</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2022"}>2022</option>
                  </select>
                </div>
                <button className="button" onClick={() => setOpenModal(true)}>
                  Details
                </button>
              </div>
              <div className="content">
                <div className="left">
                  <Chart
                    options={data?.general_percent?.options}
                    series={data?.general_percent?.series}
                    type="donut"
                    width="380"
                  />
                </div>
                <div className="right">
                  <ReactApexChart
                    options={data?.general?.options}
                    series={data?.general?.series}
                    type="area"
                    height={350}
                  />
                  {/* <table className="table">
                  <thead>
                    <tr>
                      <th className="col-30 text-align-left">Mois</th>
                      <th className="col-10  text-align-center">KINSHASA</th>
                      <th className="col-10  text-align-center">LUBUMBASHI</th>
                      <th className="col-10  text-align-center">BOMA+MATADI</th>
                      <th className="col-10  text-align-center">GOMA</th>
                      <th className="col-10  text-align-center">KISANGANI</th>
                      <th className="col-10  text-align-center">Total</th>
                      <th className="col-10  text-align-center">Prop.%</th>
                    </tr>
                  </thead>
                  <div className="row"></div>
                  <tbody>
                    <tr>
                      <th className="col-30  text-align-left">Janvier</th>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Février</th>
                      <td className="col-10  text-align-center">24</td>
                      <td className="col-10  text-align-center">38</td>
                      <td className="col-10  text-align-center">3</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">65</td>
                      <td className="col-10  text-align-center">27%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Mars</th>
                      <td className="col-10  text-align-center">46</td>
                      <td className="col-10  text-align-center">20</td>
                      <td className="col-10  text-align-center">2</td>
                      <td className="col-10  text-align-center">4</td>
                      <td className="col-10  text-align-center">1</td>
                      <td className="col-10  text-align-center">73</td>
                      <td className="col-10  text-align-center">30%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Avril</th>
                      <td className="col-10  text-align-center">62</td>
                      <td className="col-10  text-align-center">16</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">25</td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">103</td>
                      <td className="col-10  text-align-center">43%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Mai</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Juin</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Juillet</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Août</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Septembre</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Octobre</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Novembre</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr>
                      <th className="col-30  text-align-left">Décembre</th>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center"></td>
                      <td className="col-10  text-align-center">0</td>
                      <td className="col-10  text-align-center">0%</td>
                    </tr>
                    <tr className="bgc-2">
                      <th className="col-30  text-align-left">Total</th>
                      <td className="col-10  text-align-center">132</td>
                      <td className="col-10  text-align-center">74</td>
                      <td className="col-10  text-align-center">5</td>
                      <td className="col-10  text-align-center">29</td>
                      <td className="col-10  text-align-center">1</td>
                      <td className="col-10  text-align-center">241</td>
                      <td className="col-10  text-align-center">100%</td>
                    </tr>
                    <tr className="bgc-2">
                      <th className="col-30  text-align-left">Prop.% Centre</th>
                      <td className="col-10  text-align-center">55%</td>
                      <td className="col-10  text-align-center">31%</td>
                      <td className="col-10  text-align-center">2%</td>
                      <td className="col-10  text-align-center">12%</td>
                      <td className="col-10  text-align-center">0%</td>
                      <td className="col-10  text-align-center">100%</td>
                      <td className="col-10  text-align-center">###</td>
                    </tr>
                  </tbody>
                </table> */}
                </div>
              </div>
            </div>
            <div className="section-2">
              <div className="header">
                <h1 className="title t-2">
                  Volumétries mensuelles des formations par modules
                </h1>
              </div>
              <div className="filter">
                <div className="item">
                  <select>
                    <option value={""}>All</option>
                    <option value={"2024"}>2024</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2022"}>2022</option>
                  </select>
                </div>
                <div className="item">
                  <select>
                    <option value={""}>All</option>
                    <option value={"janvier"}>Janvier</option>
                    <option value={"fevrier"}>Février</option>
                    <option value={"mars"}>Mars</option>
                    <option value={"avril"}>Avril</option>
                    <option value={"mai"}>Mai</option>
                    <option value={"juin"}>Juin</option>
                    <option value={"juillet"}>Juillet</option>
                    <option value={"aout"}>Août</option>
                    <option value={"septembre"}>Septembre</option>
                    <option value={"octobre"}>Octobre</option>
                    <option value={"novembre"}>Novembre</option>
                    <option value={"decembre"}>Décembre</option>
                  </select>
                </div>
              </div>
              <div className="content">
                <div className="left">
                  {/* <table className="table">
                    <thead>
                      <tr>
                        <th className="col-90 text-align-left">
                          Formation dispensées
                        </th>
                        <th className="col-10  text-align-center">Nombre</th>
                      </tr>
                    </thead>
                    <div className="row"></div>
                    <tbody>
                      <tr>
                        <th className="col-90  text-align-left">
                          Logistique aérienne import
                        </th>
                        <td className="col-10  text-align-center">2</td>
                      </tr>
                      <tr>
                        <th className="col-90  text-align-left">
                          Prédédouanement DGRAD
                        </th>
                        <td className="col-10  text-align-center">5</td>
                      </tr>
                      <tr>
                        <th className="col-90  text-align-left">
                          Prédédouanement import - Banques commerciales
                        </th>
                        <td className="col-10  text-align-center">3</td>
                      </tr>
                      <tr>
                        <th className="col-90  text-align-left">
                          Prédédouanement import - Importateurs
                        </th>
                        <td className="col-10  text-align-center">45</td>
                      </tr>
                      <tr>
                        <th className="col-90  text-align-left">
                          Prédédouanement import - Transitaires
                        </th>
                        <td className="col-10  text-align-center">2</td>
                      </tr>
                      <tr>
                        <th className="col-90  text-align-left">
                          Présentation générale du GUICE
                        </th>
                        <td className="col-10  text-align-center">5</td>
                      </tr>
                      <tr className="bgc-2">
                        <th className="col-90  text-align-left">Total</th>
                        <td className="col-10  text-align-center">62</td>
                      </tr>
                    </tbody>
                  </table> */}
                  <ReactApexChart options={data?.formation?.options} series={data?.formation?.series} type="bar" height={350} />
                </div>
                <div className="right">
                  <Chart
                    options={data?.formation_module?.options}
                    series={data?.formation_module?.series}
                    type="donut"
                    width="380"
                  />
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
          title="Détails sur l'analyse relative à la Volumetrie des Formations"
          content={<Details element={"forms"} />}
        />
      )}
    </>
  );
};

export default Forms;
