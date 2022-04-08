
import ResponsiveAppBar from './navbar';
import logo from './logo.svg'

const LandingPage = () => {


    return (
        <div style={{ height: '100%' }}>
            <ResponsiveAppBar />
            <div style={{ height: 'calc(100% - 60px)', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%' }}>
                    <h1> ¡Bienvenido a tu web de entrenamiento personal!</h1>
                </div>
                <div style={{ display:'flex',width: '50%' }}>
                    <img src={logo} alt="" style={{width: '100%' }} />

                </div>
            </div>
        </div>
    )
}

export default LandingPage;