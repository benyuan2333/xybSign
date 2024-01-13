const axios = require("axios");
const { config } = require("../config.js");

const sendMsg = async (msg) => {
  let data = { msg };
  if (config.qmsgTo) {
    data.qq = config.qmsgTo;
  }
  axios
    .post("https://qmsg.zendee.cn/send/" + config.qmsgKey, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      console.log("qmsg消息发送成功");
    })
    .catch((err) => {
      console.log("qmsg消息发送失败");
    });
};

module.exports = { sendMsg };
