import { Outbound, Selector } from "./config/out";
import { Config } from "./config/config";
import { RouteRule, RuleSet } from "./config/route";
import { DnsRule } from "./config/dns";
import { countries } from "./constant";
import { adPass } from "./rules/ad";
import { chinaPass } from "./rules/direct";
import { alipayPass } from "./rules/alipay";
import { amazonPass } from "./rules/amazon";
import { applePass } from "./rules/apple";
import { bilibiliPass } from "./rules/bilibili";
import { bingPass } from "./rules/microsoft/bing";
import { gamePass } from "./rules/game";
import { wechatPass } from "./rules/wechat";
import { fcmPass } from "./rules/google/fcm";
import { gmailPass } from "./rules/google/gmail";
import { onedrivePass } from "./rules/microsoft/onedrive";
import { openaiPass } from "./rules/microsoft/openai";
import { microsoftPass } from "./rules/microsoft/microsoft";
import { telegramPass } from "./rules/telegram";
import { gfwPass } from "./rules/gfw";
import { developerPass } from "./rules/developer";
import { redditPass } from "./rules/reddit";

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const nodes = [] as Outbound[];
    const url = new URL(request.url);
    for (const sub of url.searchParams.getAll("sub")) {
      const resp = await fetch(sub, {
        method: "GET",
        headers: {
          "User-Agent": "sing-box",
          Accept: "application/json",
        },
      });
      const body = await resp.json<Config>();
      body.outbounds
        .filter((node) => ["vless", "shadowsocks"].includes(node.type))
        .forEach((node) => nodes.push(node));
    }

    const groups = countries
      .map((country) => {
        return {
          type: "selector",
          tag: country.zh,
          outbounds: nodes
            .filter((node) => node.tag.includes(country.emoji))
            .map((node) => node.tag),
        } satisfies Selector;
      })
      .filter((selector) => selector.outbounds.length != 0);

    const config = {
      log: {
        disabled: false,
        level: "error",
      },
      experimental: {
        cache_file: {
          enabled: true,
          path: "cache.db",
          cache_id: "cache_db",
          store_fakeip: false,
        },
        clash_api: {
          external_controller: "127.0.0.1:9090",
        },
      },
      inbounds: [
        {
          type: "socks",
          tag: "socks-in",
          domain_strategy: "prefer_ipv4",
          sniff: true,
          sniff_override_destination: true,
          listen: "0.0.0.0",
          listen_port: 1080,
        },
        {
          type: "http",
          tag: "http-in",
          domain_strategy: "prefer_ipv4",
          sniff: true,
          sniff_override_destination: true,
          listen: "0.0.0.0",
          listen_port: 7890,
        },
      ],
      outbounds: [
        {
          type: "selector",
          tag: "Proxy",
          outbounds: [
            "Direct",
            "Auto",
            "Block",
            ...groups.map((group) => group.tag),
          ],
          default: "日本",
        },
        {
          type: "urltest",
          tag: "Auto",
          outbounds: nodes.map((node) => node.tag),
        },
        {
          type: "direct",
          tag: "Direct",
        },
        {
          type: "block",
          tag: "Block",
        },
        {
          type: "dns",
          tag: "dns-out",
        },
        ...nodes,
        ...groups,
      ] as Outbound[],
      dns: {
        final: "dns-domestic",
        strategy: "prefer_ipv4",
        servers: [
          {
            tag: "dns-oversea",
            address: "https://1.1.1.1/dns-query",
            detour: "Proxy",
          },
          {
            tag: "dns-domestic",
            address: "https://1.12.12.12/dns-query",
            detour: "Direct",
          },
          {
            tag: "dns-campus",
            address: "10.10.10.10",
            detour: "Direct",
          },
          {
            tag: "dns-block",
            address: "rcode://success",
          },
        ],
        rules: [
          {
            outbound: ["any"],
            server: "dns-domestic",
          },
          {
            clash_mode: "direct",
            server: "dns-domestic",
          },
          {
            clash_mode: "global",
            server: "dns-oversea",
          },
          {
            domain_suffix: ".workers.dev",
            server: "dns-oversea",
          },
          {
            domain_suffix: ".jlu.edu.cn",
            server: "dns-campus",
          },
        ] as DnsRule[],
      },
      route: {
        final: "Direct",
        auto_detect_interface: true,
        rules: [
          {
            protocol: ["dns"],
            outbound: "dns-out",
          } satisfies RouteRule,
          {
            clash_mode: "direct",
            outbound: "Direct",
          } satisfies RouteRule,
          {
            clash_mode: "global",
            outbound: "Proxy",
          } satisfies RouteRule,
          {
            ip_is_private: true,
            outbound: "Direct",
          } satisfies RouteRule,
          {
            domain_suffix: ".workers.dev",
            outbound: "Proxy",
          },
        ] as RouteRule[],
        rule_set: [] as RuleSet[],
      },
    } satisfies Config;

    const ua = request.headers.get("User-Agent");
    if (ua?.includes("android") || ua?.includes("Android")) {
      config.inbounds.push({
        type: "tun",
        tag: "tun-in",
        domain_strategy: "prefer_ipv4",
        sniff: true,
        sniff_override_destination: true,
        stack: "system",
        auto_route: true,
        strict_route: true,
        inet4_address: "172.19.0.1/30",
        exclude_package: [
          "com.huawei.hwid",
          "com.samsung.android.allshare.service.mediashare",
          "com.samsung.android.smartmirroring",
          "com.samsung.android.service.stplatform",
          "com.samsung.android.oneconnect",
          "com.samsung.android.swsportplugin",
          "com.samsung.android.app.sharelive",
          "com.samsung.android.aware.service",
          "com.samsung.android.mdx.kit",
          "com.chinamworld.bocmbci",
          "com.unionpay",
          "cmb.pb",
        ],
        udp_disable_domain_unmapping: true,
      });
    }

    adPass(config);

    // google
    fcmPass(config);
    gmailPass(config);

    // microsoft
    bingPass(config);
    onedrivePass(config);
    openaiPass(config);
    microsoftPass(config);

    wechatPass(config);
    alipayPass(config);
    amazonPass(config);
    applePass(config);
    telegramPass(config);
    bilibiliPass(config);
    gamePass(config);
    redditPass(config);
    gfwPass(config);
    developerPass(config);
    chinaPass(config);

    return new Response(JSON.stringify(config));
  },
} satisfies ExportedHandler<Env>;
