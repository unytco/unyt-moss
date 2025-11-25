import { defineDevCollectiveToolList } from "@theweave/moss-types";

export default defineDevCollectiveToolList({
  developerCollective: {
    id: "unytco",
    name: "Unyt Accounting",
    description: "Building accounting infrastructure for the next economy",
    icon: "https://unyt.co/logo.png",
    contact: {
      website: "https://unyt.co",
    },
  },
  tools: [
    {
        id: "unyt",
        versionBranch: "0.1.x",
        title: "Unyt",
        subtitle: "credit and payment system tooling",
        description: "Unyt is a tool for creating credit and payment systems with Smart Agreement functionality.",
        icon: "https://raw.githubusercontent.com/unytco/unyt-sandbox-tx5/refs/heads/develop/src-tauri/icons/icon.png",
        tags: [
            "community-currency", "accounting", "mutual-credit", "payment systems"
        ],
        versions: [
            {
                version: "0.1.0",
                url: "https://github.com/lightningrodlabs/moss/releases/download/unyt-happ-v0.1.0/unyt.webhapp",
                hashes: {
                    "happSha256": "53f78dc0c686f90f1e5d8010b90780ce6b269b8a71eb27b8664f11f3b4e9be4b",
                    "webhappSha256": "586ac7e381e4ccd8b936cf775432c8ed4f557c90dd6586f101ebbdb3dea3b858",
                    "uiSha256": "e496a8a7576a4ab895c9271cb0105aee1ab5c766c50f6f6ee61e4875c956b4d2"
                },
                changelog: "Initial release",
                releasedAt: 1763861420732
            }
        ],
    },
  ],
});
