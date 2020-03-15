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
            })
        })
    }

    renderAuthButon() {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if we are siged in</div>
        }
        else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>
        }
        else {
            return <div>I am not signed in</div>
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