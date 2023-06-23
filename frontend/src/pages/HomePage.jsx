
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import DoctorList from "../components/DoctorList";
import { Row } from "antd";
const HomePage = () => {

  const [doctors, setDoctors] = useState([]);
 // login user data

 const getUserData = async () => {
  try {
    const res = await axios.get(
      "/api/user/getAllDoctors",
      {
        headers: {
          Authorization: "Bearer "+localStorage.getItem("token"),
        },
      }
    );
    if (res.data.success) {
      console.log(res)
      setDoctors(res.data.data);
    
    }
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1 className="text-center">Home Page</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  )
}

export default HomePage