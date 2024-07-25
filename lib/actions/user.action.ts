"use server";
import axios from "axios";

export const fetchHospitalData = async () => {
  try {
    const { data } = await axios({
      // TODO: change to env
      baseURL: process.env.NEXT_PUBLIC_HEALTH_CRED_URL,
      url: "/",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
