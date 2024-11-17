import { Config } from "../config/config";
import { Selector } from "../config/out";

export function wechatPass(config: Config) {
  const domain_proxy = [
    "dns.wechat.com",
    "short.wechat.com",
    "long.wechat.com",
    "sgshort.wechat.com",
    "sgquic.wechat.com",
    "sglong.wechat.com",
    "sgilinkshort.wechat.com",
    "sgminorshort.wechat.com",
    "sgfindershort.wechat.com",
    "dns.weixin.qq.com",
    "short.weixin.qq.com",
    "long.weixin.qq.com",
    "szshort.weixin.qq.com",
    "szlong.weixin.qq.com",
    "szilinkshort.weixin.qq.com",
    "szminorshort.weixin.qq.com",
    "szfindershort.weixin.qq.com",
  ];
  const domain_direct = [
    "mp.weixin.qq.com",
    "apd-pcdnwxlogin.teg.tencent-cloud.net",
    "btrace.qq.com",
    "dl.wechat.com",
    "dldir1.qq.com",
    "slife.xy-asia.com",
    "soup.v.qq.com",
    "tencentmap.wechat.com",
    "vweixinf.tc.qq.com",
    "weixin110.qq.com",
    "wup.imtt.qq.com",
    "wx.tenpay.com",
    "wxapp.tc.qq.com",
  ];
  const suffix_direct = [
    ".iot-tencent.com",
    ".lbs.gtimg.com",
    ".map.qq.com",
    ".qlogo.cn",
    ".qpic.cn",
    ".servicewechat.com",
    ".tenpay.com",
    ".up-hl.3g.qq.com",
    ".vweixinthumb.tc.qq.com",
    ".wechat.com",
    ".wechatlegal.net",
    ".wechatos.net",
    ".wechatpay.com",
    ".weixin.com",
    ".weixinbridge.com",
    ".weixinsxy.com",
    ".wx.gtimg.com",
    ".wx.qq.com",
    ".wxapp.tc.qq.com",
    ".wxs.qq.com",
    ".yun-hl.3g.qq.com",
  ];
  config.route.rules.push(
    {
      domain: domain_proxy,
      outbound: "WeChat",
    },
    {
      ip_cidr: [
        "14.112.0.0/12",
        "43.129.192.0/18",
        "43.155.64.0/18",
        "61.151.128.0/17",
        "101.226.0.0/16",
        "101.227.0.0/16",
        "117.89.176.0/21",
        "119.144.0.0/14",
        "180.101.240.0/21",
        "183.0.0.0/10",
      ],
      outbound: "WeChat",
    },
    {
      domain: domain_direct,
      outbound: "Direct",
    },
    {
      domain_suffix: suffix_direct,
      outbound: "Direct",
    },
  );
  config.outbounds.push({
    type: "selector",
    tag: "WeChat",
    outbounds: (
      config.outbounds.find((outbound) => outbound.tag == "Proxy") as Selector
    ).outbounds,
    default: "Direct",
    interrupt_exist_connections: true,
  });
  config.dns.rules.push(
    {
      domain: domain_proxy,
      server: "dns-oversea",
    },
    {
      domain: domain_direct,
      server: "dns-domestic",
    },
    {
      domain_suffix: suffix_direct,
      server: "dns-domestic",
    },
  );
}
