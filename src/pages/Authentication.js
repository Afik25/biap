import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
//
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaLogin, wait } from "../utils/utils";
//
const Authentication = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Business Intelligence Platform - Token Checking</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <div className="authentication">
        <div className="container">
          <form>
            <h1 className="title t-1">BIAP</h1>
            <h3 className="title t-2">
              Business Intelligence Analytics Platform
            </h3>
            <p className="title t-3">
              Enter the token that you have received in your e-mail box.
            </p>
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                Token Key
              </label>
              {/* {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )} */}
            </div>
            <button type="submit" className="button validate">
              Checking Token
            </button>
            <br/>
            <br/>
            <br/>
            <Link to={'/analytics'}>Reforme</Link>
            <br/>
            <Link to={'/forms'}>Formation</Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Authentication;
