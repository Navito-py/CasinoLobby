import classes from './Wallet.module.css'
import emeraldCoin from '../../assets/Emerald.png'


function Wallet() {
    return (
        <div className={classes.walletCointainer}>
            <img src={emeraldCoin} rel='emerald coin representation' className={classes.emeraldCoin} />
            <h3>300</h3>
        </div>
    );
}

export default Wallet;