import { ACCESS_TOKEN } from "@/atom/user";
import { BACK_END_REQUEST_URL } from "@/constants/baseUrl";
import axios from "axios";
import { useAtomValue } from "jotai/react";
import { useState } from "react";

type MutateMethod = "post" | "put";
type ContentType = "json" | "form-data";

const CONTENT_TYPE: Record<ContentType, string> = {
  json: "application/json",
  "form-data": "multipart/form-data",
};

export const useMutate = (url: string) => {
  const access_token = useAtomValue(ACCESS_TOKEN);
  const [status, setStatus] = useState<number>();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const mutate = async (method: MutateMethod, requestData: any, contentType: ContentType = "json") => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setError(null);

    try {
      let response;
      if (method === "post") {
        response = await axios.post(`${BACK_END_REQUEST_URL}${url}`, requestData, {
          headers: {
            "Content-Type": CONTENT_TYPE[contentType],
            Authorization: `Bearer ${access_token}`,
          },
        });
      } else if (method === "put") {
        response = await axios.put(`${BACK_END_REQUEST_URL}${url}`, requestData, {
          headers: {
            "Content-Type": CONTENT_TYPE[contentType],
            Authorization: `Bearer ${access_token}`,
          },
        });
      }

      setData(response?.data);
      setStatus(response?.status);
      setIsSuccess(true);
      return true;
    } catch (err: any) {
      setError(err?.response?.data?.message || "An error occurred");
      setIsError(true);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    data,
    status,
    error,
    isLoading,
    isSuccess,
    isError,
  };
};
