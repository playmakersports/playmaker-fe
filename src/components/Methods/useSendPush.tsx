import axios from "axios";

export const useSendPush = () => {
  const sendPush = async ({
    title,
    body,
    click_action,
    token,
  }: {
    title: string;
    body: string;
    click_action: string;
    token: string;
  }) => {
    const message = {
      data: {
        title,
        body,
        image: "/public/icons/manifest/icon-192x192.png",
        click_action,
      },
    };

    axios.request({
      method: "POST",
      url: window?.location?.origin + "/api/fcm",
      data: { message },
    });
  };

  return sendPush;
};
