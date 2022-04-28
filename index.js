const { Plugin } = require("powercord/entities");
const { getModule } = require("powercord/webpack")
const Settings = require("./components/settings.jsx")

const message =async(args, nick)=>{
    const moment = await getModule(['parseZone'])
    let ammo = args.slice(1).join(' ')
    
    let store = args[0].replace('_', ' ')
    return `1.${nick}\n2.${store}\n3.${ammo}\n4.${moment.utc().add(3,'h').format("DD.MM.YYYY HH:mm")}`
}

module.exports = class GtaGunReport extends Plugin {
    startPlugin() {
        const settings = this.settings
        let nick = settings.get('repNick')
        powercord.api.settings.registerSettings(this.entityID,{
            category: this.entityID,
            label: 'GTA5RP Gun Rep',
            render: Settings
        })



        powercord.api.commands.registerCommand(
            {
                command: 'report',
                description: 'Отправляет отчет по складу',
                usage: '{c} [место взятия, амуниция]',
                executor: async(args) => ({
                  send: true,
                  result: await message(args, nick)
                })
              }
        )
    }
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand('report')
    powercord.api.settings.unregisterSettings(this.entityID)
  }
}