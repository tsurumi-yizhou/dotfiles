import { Config } from "../config/config";
import { Selector } from "../config/out";

export function applePass(config: Config) {
  config.route.rule_set.push(
    {
      tag: "Apple",
      type: "remote",
      format: "binary",
      url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Apple.srs",
      download_detour: "Proxy",
    },
    {
      tag: "AppleNews",
      type: "remote",
      format: "binary",
      url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/AppleNews.srs",
      download_detour: "Proxy",
    },
    {
      tag: "AppleTV",
      type: "remote",
      format: "binary",
      url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/AppleTV.srs",
      download_detour: "Proxy",
    },
  );
  config.route.rules.push({
    rule_set: ["Apple", "AppleNews", "AppleTV"],
    outbound: "Apple",
  });
  config.outbounds.push({
    type: "selector",
    tag: "Apple",
    outbounds: (
      config.outbounds.find((outbound) => outbound.tag == "Proxy") as Selector
    ).outbounds,
    default: "Direct",
  });
  config.dns.rules.push({
    rule_set: ["Apple", "AppleNews", "AppleTV"],
    server: "dns-oversea",
  });
}
