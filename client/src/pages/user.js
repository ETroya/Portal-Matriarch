import React, { useState, useEffect } from "react";
import Feed from "../components/feed/index";
import NextDay from "../components/nextDay/index";

function User() {
  return (
    <div className="row">
      <div className="col-md-6">
        <Feed />
      </div>
      <div className="col-md-6">
        <NextDay />
      </div>
    </div>
  );
}

export default User;
