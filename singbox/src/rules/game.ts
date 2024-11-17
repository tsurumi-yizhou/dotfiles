import { Config } from "../config/config";
import { Selector } from "../config/out";

export function gamePass(config: Config) {
  config.route.rule_set.push(
    {
      tag: "GameDownload",
      type: "remote",
      format: "binary",
      url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/GameDownload.srs",
      download_detour: "Proxy",
    },
    {
      tag: "Steam",
      type: "remote",
      format: "binary",
      url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Steam.srs",
      download_detour: "Proxy",
    },
  );
  config.route.rules.push(
    {
      rule_set: ["Steam"],
      outbound: "Steam",
    },
    {
      rule_set: ["GameDownload"],
      outbound: "Direct",
    },
    {
      package_name: ["com.heavenburnsred", "com.neowizgames.game.browndust2"],
      outbound: "Proxy",
    },
  );
  config.outbounds.push({
    type: "selector",
    tag: "Steam",
    outbounds: (
      config.outbounds.find((outbound) => outbound.tag == "Proxy") as Selector
    ).outbounds,
    default: "Direct",
  });
  config.dns.rules.push(
    {
      rule_set: ["GameDownload", "Steam"],
      server: "dns-domestic",
    },
    {
      package_name: ["com.heavenburnsred", "com.neowizgames.game.browndust2"],
      server: "dns-oversea",
    },
  );
}
