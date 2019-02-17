import React from 'react';
import 'bulma/css/bulma.css';

import './style.css';


export default class Search extends React.Component {
    render() {
        return (<div>
            <input className="input search-bar" type="text" name="search" placeholder="Search" value={this.props.search} onChange={this.props.onChange} />
        </div>);
    }
}

