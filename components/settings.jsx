const {React} = require('powercord/webpack');
const {TextInput} = require('powercord/components/settings')

module.exports = class settings extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <TextInput onChange={val => this.props.updateSetting('repNick', val)}
                defaultValue={this.props.getSetting('repNick', 'Kirill Medichi')}
                required={true}
                disabled={false}
                note='Введите сюда свой игровой ник' >
                    Ник
                </TextInput>
            </div>
        )
    }
}
