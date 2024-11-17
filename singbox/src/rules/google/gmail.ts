import { Config } from "../../config/config";

export function gmailPass(config: Config) {
  config.route.rules.push({
    domain: ["smtp.gmail.com", "imap.gmail.com", "pop3.gmail.com"],
    outbound: "Gmail",
  });
  config.outbounds.push({
    server: "proxy.yizhou.ac.cn",
    server_port: 443,
    tls: {
      enabled: true,
      server_name: "proxy.yizhou.ac.cn",
      utls: {
        enabled: true,
        fingerprint: "randomized",
      },
    },
    transport: {
      path: "/?ed=2048",
      type: "ws",
      max_early_data: 4096,
      early_data_header_name: "Sec-WebSocket-Protocol",
    },
    uuid: "f00c2692-ce6c-4d03-935a-ab55aeaee54b",
    tag: "Gmail",
    type: "vless",
  });
  config.dns.rules.push({
    domain: ["pop3.gmail.com", "imap.gmail.com", "smtp.gmail.com"],
    server: "dns-oversea",
  });
}
