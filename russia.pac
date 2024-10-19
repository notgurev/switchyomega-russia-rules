function FindProxyForURL(url, host) {
    // List of domains to proxy
    var domains = [
        "oaistatic.com",
        "chatgpt.com",
        "openai.com",
        "oaiusercontent.com",
        "rutracker.org",
        "thepiratebay.org",
        "rutor.is",
        "instagram.com",
        "cdninstagram.com",
        "twimg.com",
        "x.com",
        "twitter.com",
        "t.co",
        "ads-twitter.com",
        "ggpht.com",
        "protonmail.com",
        "proton.me",
        "mangadex.org",
        "gstatic.com",
        "swagger.io",
        "dell.com",
        "dellcdn.com",
        "intel.com",
        "spotify.com",
        "scdn.co",
        "spotifycdn.com",
        "docker.com",
        "buf.build",
        "knowyourmeme.com",
        "claude.ai",
        "anthropic.com",
        "quora.com",
        "ntc.party",
        "2ip.io" // for testing
    ];

    // Check if the host matches any of the domains
    for (var i = 0; i < domains.length; i++) {
        if (shExpMatch(host, "*." + domains[i]) || host == domains[i]) {
            return "SOCKS5 localhost:1050";
        }
    }

    // If no match, connect directly
    return "DIRECT";
}
