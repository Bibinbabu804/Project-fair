import { serverUrl } from "./serverUrl";
import { commonAPI } from "./commonAPI";



//register api call => po
export const registerAPI = async (user) => {
  return await commonAPI("post", `${serverUrl}/api/register`, user, "");
};
