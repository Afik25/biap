import React, { useState } from "react";

const Details = ({ element }) => {
  const [key, setKey] = useState("all");
  return (
    <div className="details">
      <div className="header">
        <div className="nav">
          {element === "analytic" && (
            <>
              <button
                className={key === "all" ? "button active" : "button"}
                onClick={() => setKey("all")}
              >
                All
              </button>
              <button
                className={key === "doc" ? "button active" : "button"}
                onClick={() => setKey("doc")}
              >
                Documents
              </button>
              <button
                className={key === "proc" ? "button active" : "button"}
                onClick={() => setKey("proc")}
              >
                Procédures
              </button>
            </>
          )}
          {element === "forms" && (
            <>
              <div className="item">
                <select>
                  <option value={""}>Choisir un module</option>
                  <option value={"Logistique aérienne import"}>
                    Logistique aérienne import
                  </option>
                  <option value={"Prédédouanement DGRAD"}>
                    Prédédouanement DGRAD
                  </option>
                  <option
                    value={"Prédédouanement import - Banques commerciales"}
                  >
                    Prédédouanement import - Banques commerciales
                  </option>
                  <option value={"Prédédouanement import - Importateurs"}>
                    Prédédouanement import - Importateurs
                  </option>
                  <option value={"Prédédouanement import - Transitaires"}>
                    Prédédouanement import - Transitaires
                  </option>
                  <option value={"Présentation générale du GUICE"}>
                    Présentation générale du GUICE
                  </option>
                </select>
              </div>
              <div className="item">
                <select>
                  <option value={""}>Choisir un acteurs/formateurs</option>
                  <option value={"acteurs"}>Acteurs</option>
                  <optgroup label="Formateurs">
                    <option value={"Corine Lubela"}>Corine Lubela</option>
                    <option value={"Christelle Mopende"}>
                      Christelle Mopende
                    </option>
                    <option value={"Elysee Kaja"}>Elysee Kaja</option>
                    <option value={"Carole Kamuanya"}>Carole Kamuanya</option>
                    <option value={"Maria Bomboko"}>Maria Bomboko</option>
                  </optgroup>
                </select>
              </div>
            </>
          )}
        </div>
        <div className="actions">
          <button className="button">Export to Excel</button>
          <button className="button">Export to CSV</button>
        </div>
      </div>
      <div className="body">
        {element === "analytic" && (
          <table className="table">
            <thead>
              <tr>
                <th className="col-20 text-align-center">Intitulé</th>
                <th className="col-20 text-align-center">Document/Procédure</th>
                <th className="col-20 text-align-center">Entité concernée</th>
                <th className="col-10 text-align-center">Mode</th>
                <th className="col-15 text-align-center">Module</th>
                <th className="col-20 text-align-center">
                  Expression de besoin
                </th>
                <th className="col-20 text-align-center">
                  Rédaction du cahier des charges
                </th>
                <th className="col-20 text-align-center">
                  Validation du cahier des charges
                </th>
                <th className="col-20 text-align-center">
                  Développement informatique
                </th>
                <th className="col-10 text-align-center">Test</th>
                <th className="col-15 text-align-center">Mise en Production</th>
                <th className="col-20 text-align-center">
                  Niveau de dématerialisation
                </th>
                <th className="col-20 text-align-center">Taux d'Utilisation</th>
                <th className="col-20 text-align-center">
                  Année réalisation/Date prévisionnelle livraison
                </th>
                <th className="col-10 text-align-center">Statut</th>
                <th className="col-20 text-align-center">Commentaires</th>
                <th className="col-20 text-align-center">Responsable</th>
              </tr>
            </thead>
            <div className="row"></div>
            <tbody>
              <tr>
                <td className="col-20  text-align-center">
                  Déclaration d'importation
                </td>
                <td className="col-20  text-align-center">Document</td>
                <td className="col-20  text-align-center">
                  Banques Commerciales/BCC
                </td>
                <td className="col-10  text-align-center">Import</td>
                <td className="col-10  text-align-center">Prédouanement</td>
                <td className="col-10  text-align-center">Ok</td>
                <td className="col-10  text-align-center">Ok</td>
                <td className="col-10  text-align-center">Ok</td>
                <td className="col-10  text-align-center">Ok</td>
                <td className="col-10  text-align-center">Ok</td>
                <td className="col-10  text-align-center">Ok</td>
                <td className="col-10  text-align-center">100%</td>
                <td className="col-10  text-align-center">100%</td>
                <td className="col-10  text-align-center">2015</td>
                <td className="col-10  text-align-center">Completed</td>
                <td className="col-10  text-align-center"></td>
                <td className="col-10  text-align-center"></td>
              </tr>
            </tbody>
          </table>
        )}
        {element === "forms" && (
          <table className="table">
            <thead>
              <tr>
                <th className="col-50 text-align-left">Module</th>
                <th className="col-35 text-align-left">Formateurs</th>
                <th className="col-15 text-align-center">Moyenne</th>
              </tr>
            </thead>
            <div className="row"></div>
            <tbody>
              <tr>
                <td className="col-50  text-align-left">
                  Logistique aérienne import
                </td>
                <td className="col-35  text-align-left">Corine Lubela</td>
                <td className="col-15  text-align-center">
                  4
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Details;
