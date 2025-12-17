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
            url: "https://github.com/unytco/unyt-moss/releases/download/v0.1.0/unyt.webhapp",
            hashes: {
                happSha256: "b2cd746b0d89ce9246b6d516164796617def2ac1837fb8993aebf8f57cc81004",
                webhappSha256: "d9ccb554c17ceae0c9483b88fbb2a6667881c5923d8cdf68b3e8569430751353",
                uiSha256: "1cfa999a09f867978a7dbbf5e37a0f826ce07d1dc9cf09db9f439b2ae591c6db"
            },
            changelog: "Test release",
            releasedAt: 1764253393292
        }
      ],
    },
    {
      id: "unyt",
      versionBranch: "0.48.x",
      title: "Unyt",
      subtitle: "credit and payment system tooling",
      description: "Unyt is a tool for creating credit and payment systems with Smart Agreement functionality.",
      icon: "https://raw.githubusercontent.com/unytco/unyt-sandbox-tx5/refs/heads/develop/src-tauri/icons/icon.png",
      tags: [
          "community-currency", "accounting", "mutual-credit", "payment systems"
      ],
      versions: [
        {
          "version": "0.48.0",
          "url": "https://github.com/unytco/unyt-moss/releases/download/v0.48.0/unyt.webhapp",
          "hashes": {
            "happSha256": "021da3e9da6819cd6a317b296c2f6f5f33c6b3a166f13972e76ba78a35c81fd3",
            "webhappSha256": "d51e7fab6d495e27a03eb0f9137f26d584e054093e227355ea7e92dd9c74e18c",
            "uiSha256": "79da598dd4412eeb5375fe7319ab4f28b2217c6e83b3f1f0ee63ea624b557cd2"
          },
          "changelog": "Test release 2",
          "releasedAt": 1765992014455
        }
      ],
    },
  ],
});
