import { Config } from "../config/config";
import { Selector } from "../config/out";

export function amazonPass(config: Config) {
  config.route.rule_set.push({
    tag: "Amazon",
    type: "remote",
    format: "binary",
    url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Amazon.srs",
    download_detour: "Proxy",
  });
  config.route.rule_set.push({
    tag: "AmazonIp",
    type: "remote",
    format: "binary",
    url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/AmazonIp.srs",
    download_detour: "Proxy",
  });
  config.route.rules.push({
    rule_set: ["Amazon", "AmazonIp"],
    outbound: "Amazon",
  });
  config.outbounds.push({
    type: "selector",
    tag: "Amazon",
    outbounds: (
      config.outbounds.find((outbound) => outbound.tag == "Proxy") as Selector
    ).outbounds,
    default: "香港",
  });
  config.dns.rules.push({
    rule_set: ["Amazon", "AmazonIp"],
    server: "dns-amazon",
  });
  config.dns.servers.push({
    tag: "dns-amazon",
    address: "https://1.1.1.1/dns-query",
    detour: "Amazon",
  });
}
