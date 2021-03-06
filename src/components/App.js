import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () => {
    return (
        <div className="ui container-fluid">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/stream/create" exact component={StreamCreate} />
                <Route path="/stream/delete" exact component={StreamDelete} />
                <Route path="/stream/edit" exact component={StreamEdit} />
                <Route path="/stream/show" exact component={StreamShow} />
            </BrowserRouter>

        </div>
    )
}

export default App