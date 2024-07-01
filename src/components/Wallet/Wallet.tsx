import './Wallet.css'
import emeraldCoin from '../../assets/Emerald.png'


function Wallet() {
    return (
        <div className='walletCointainer'>
            <img src={emeraldCoin} rel='emerald coin representation' className='emeraldCoin' />
            <h3>300</h3>
        </div>
    );
}

export default Wallet;