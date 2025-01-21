const utils = './Client/'
const handlers = '../Handlers/'

module.exports = function(client) {
    require(`${utils}AntiCrash`)(client)
    require(`${utils}PackageChecker`)(client)
    require(`${utils}HotReload`)(client)
    require(`${utils}SqliteLoader`)(client)
    require(`${utils}FileTemplate`)(client)

    require(`${handlers}SlashHandling`)(client)
    require(`${handlers}EventHandling`)(client)
    require(`${handlers}PrefixHandling`)(client)
    require(`${handlers}ComponentHandling`)(client)
}