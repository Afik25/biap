import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "../middlewares/icons";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Helmet>
        <title>Business Intelligence Platform - Page Not Found</title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
      </Helmet>
      <div className="not-found">
        <div className="containers">
          <h1 className="title t-1">404</h1>
          <h1 className="title t-2">{t("notFound.text-1")}</h1>
          <h1 className="title t-3">
          {t("notFound.text-2")}
          </h1>
          <div>
            <Link to="/" className="link">
              <IoArrowBack />
              <span>{t("notFound.text-3")}</span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
