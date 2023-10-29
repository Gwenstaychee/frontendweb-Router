const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ReactRouterDOM.HashRouter>
                <div className="App">
                    <ul className="App-header">
                        <Ii> <Link to="/">Home</Link></Ii>
                        <Ii> <Link to="/about">About Us</Link></Ii>
                        <Ii> <Link to="/contact">Contact Us</Link></Ii>
                    </ul>

                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </ReactRouterDOM.HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("App"));