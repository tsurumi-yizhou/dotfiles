import { Config } from "../../config/config";
import { Selector } from "../../config/out";

export function microsoftPass(config: Config) {
  config.route.rule_set.push({
    type: "remote",
    tag: "Microsoft",
    format: "binary",
    url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Microsoft.srs",
    download_detour: "Proxy",
  });
  config.route.rules.push({
    rule_set: ["Microsoft"],
    outbound: "Micro$oft",
  });
  config.outbounds.push({
    tag: "Micro$oft",
    type: "selector",
    outbounds: (
      config.outbounds.find((outbound) => outbound.tag == "Proxy") as Selector
    ).outbounds,
    default: "香港",
  });
  config.dns.rules.push({
    rule_set: ["Microsoft"],
    server: "dns-oversea",
  });
}
