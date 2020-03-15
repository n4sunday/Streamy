import React from 'react'

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth', () => {
            window.gapi.client.init({
                clientId: '707226975770-8ifl9mkd03j7htbnnifhfkuk9elcdnr6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButon() {
        if (this.state.isSignedIn === null) {
            return null
        }
        else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        }
        else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon"></i>
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButon()}
            </div>
        )
    }
}

export default GoogleAuth